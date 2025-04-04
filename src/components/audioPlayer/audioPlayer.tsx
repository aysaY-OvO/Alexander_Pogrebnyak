import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Typography } from '@mui/material';

import {
  PlayerWrapper,
  MetaWrapper,
  TextWrapper
} from './styled';

const AudioPlayer: React.FC = () => {
  const soundRef = useRef<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [isLoaded, setIsLoaded] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();

  const updateProgress = () => {
    if (!soundRef.current || !soundRef.current.playing()) return;

    const seek = soundRef.current.seek();
    const duration = soundRef.current.duration();

    if (typeof seek === 'number' && typeof duration === 'number' && duration > 0) {
      setProgress((seek / duration) * 100);
    }
  };

  const updateTime = () => {
    if (!soundRef.current) return;

    const seek = soundRef.current.seek();
    setTrackTime(seek);

    if (soundRef.current.playing()) {
      progressInterval.current = setInterval(updateTime, 500);
    }
  };

  const startProgressTracking = () => {
    stopProgressTracking();
    updateProgress();
    progressInterval.current = setInterval(updateProgress, 50);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/Soviet apartment final.mp3'],
      html5: true,
      volume: volume,
      onload: () => {
        setIsLoaded(true)
      },
      onplay: () => {
        setIsPlaying(true);
        startProgressTracking();
        updateTime();
      },
      onpause: () => {
        setIsPlaying(false);
        stopProgressTracking();
      },
      onend: () => {
        setIsPlaying(false);
        stopProgressTracking();
        setProgress(100);
        setTrackTime(0);
      },
      onseek: () => {
        if (soundRef.current?.playing()) {
          updateProgress();
        }
      },
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      stopProgressTracking();
    };
  }, []);

  const togglePlay = () => {
    if (!soundRef.current) return;
    soundRef.current.playing() ? soundRef.current.pause() : soundRef.current.play();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!soundRef.current || !progressRef.current || !isLoaded) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const duration = soundRef.current.duration();

    if (typeof duration === 'number') {
      soundRef.current.seek(clickPosition * duration);
      setProgress(clickPosition * 100);

      if (soundRef.current.playing()) {
        startProgressTracking();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (soundRef.current) soundRef.current.volume(newVolume);
  };

  const formatTime = (seconds: number) => {
    if (!soundRef.current) return '00:00';

    if (typeof seconds !== 'number' || isNaN(seconds)) return '00:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <PlayerWrapper>
      <Typography variant='h1'>Soviet apartment final</Typography>

      <MetaWrapper>
        <Typography variant='body1'>Мероприятие</Typography>
        <Typography variant='body1'>Год создания</Typography>
      </MetaWrapper>

      <TextWrapper>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facilis quaerat voluptas minus aliquid quia, enim recusandae. Omnis, consequatur quasi commodi perferendis accusamus deleniti recusandae adipisci? Eos odio dolor facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vero obcaecati possimus repudiandae, velit molestias enim voluptatum sapiente temporibus consequatur aut exercitationem. Eveniet sunt doloribus, obcaecati quaerat iste ipsum quae?
        </Typography>
      </TextWrapper>

      <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isPlaying ? '#ff4d4d' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '15px'
          }}
        >
          {isPlaying ? '⏸ Пауза' : '▶ Воспроизвести'}
        </button>

        <div style={{ margin: '20px 0' }}>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            style={{
              height: '8px',
              background: '#eee',
              cursor: 'pointer',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: '#6200ee',
                borderRadius: '4px',
                transition: 'width 0.1s linear'
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
            <span>{formatTime(trackTime)}</span>
            <span>{formatTime(Number(soundRef.current?.duration()))}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>🔊 Громкость:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            disabled={!isLoaded}
            style={{ flex: 1 }}
          />
          <span style={{ marginLeft: '10px', minWidth: '40px' }}>
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>
    </PlayerWrapper>
  );
};

export default AudioPlayer;
