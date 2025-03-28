import * as React from "react"
import { HeadFC } from "gatsby";
import Layout from "../components/layout/layout";
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Image from "../components/ui/image";
import { styled } from "@mui/material";

const MainPage: React.FC = () => {
  const ImageWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;

    img {
      pointer-events: none;
      max-height: 690px;
      max-width: 690px;
    }
  `;


  const data = useStaticQuery(graphql`
      query {
        allDataJson {
          nodes {
            main {
              gif
            }
          }
        }
      }
    `)

    const gif = data.allDataJson.nodes[0].main.gif

    if (!data.allDataJson) {
      return <p>Image not found</p>
    }

  return (
    <Layout>
      <Header indexPage={true} activePage='' />
      <ImageWrapper>
        <Image src={gif} width={1024} height={1024} alt=""/>
      </ImageWrapper>
      <Footer />
    </Layout>
  )
}

export default MainPage;

export const Head: HeadFC = () => <title>Alexandeer Pogrebnyak</title>
