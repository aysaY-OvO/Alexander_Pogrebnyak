import React from 'react'

import AudioPlayer from '../audioPlayer/audioPlayer';
import MusicList from '../musicList/musicList';

import { StyledMain } from './styled';

const SoundMain: React.FC = () => {
  return (
    <StyledMain>
      <MusicList />
      <AudioPlayer />
    </StyledMain>
  )
};

export default SoundMain;
