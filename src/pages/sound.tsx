import React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AudioPlayer from "../components/audioPlayer/audioPlayer";

const SoundPage: React.FC = () => {
  return (
    <Layout>
      <Header indexPage={false} activePage='sound' />
      <main>
        <AudioPlayer />
      </main>
      <Footer />
    </Layout>
  )
};

export default SoundPage;
