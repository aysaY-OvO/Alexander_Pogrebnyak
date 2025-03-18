import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header/header";
import Image from "../styled/ui/image";
import { StyledContainer } from "../styled/layout/container";
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
      max-height: 600px;
      max-width: 600px;
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
    <StyledContainer>
      <Header indexPage={true} />
      <ImageWrapper>
        <Image src={gif.allDataJson.nodes[0].gif} width={1024} height={1024} alt=""/>
      </ImageWrapper>
    </StyledContainer>
  )
}

export default MainPage;
