import React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SoundMain from "../components/soundPageMain/soundMain";

const SoundPage: React.FC = () => {
  return (
    <Layout>
      <Header indexPage={false} activePage='sound' />
      <SoundMain />
      <Footer />
    </Layout>
  )
};

export default SoundPage;
