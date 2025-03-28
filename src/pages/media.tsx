import React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const MediaPage: React.FC = () => {
  return (
    <Layout>
      <Header indexPage={false} activePage='media' />
      <main></main>
      <Footer />
    </Layout>
  )
};

export default MediaPage;
