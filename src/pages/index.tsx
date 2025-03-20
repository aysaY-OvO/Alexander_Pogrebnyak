import * as React from "react"
import { HeadFC } from "gatsby";
import { Layout } from "../components/layout/layout";
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Image from "../components/ui/image";
import { StyledContainer } from "../styled/utils/container";
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


  const gif = useStaticQuery(graphql`
      query {
        allDataJson {
          nodes {
            gif
          }
        }
      }
    `)

    if (!gif.allDataJson) {
      return <p>Image not found</p>
    }

  return (
    <Layout>
      <StyledContainer>
        <Header indexPage={true} />
        <ImageWrapper>
          <Image src={gif.allDataJson.nodes[0].gif} width={1024} height={1024} alt=""/>
        </ImageWrapper>
        <Footer />
      </StyledContainer>
    </Layout>
  )
}

export default MainPage;

export const Head: HeadFC = () => <title>Alexandeer Pogrebnyak</title>
