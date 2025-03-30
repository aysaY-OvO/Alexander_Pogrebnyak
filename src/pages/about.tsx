import React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../components/ui/image";

import {
  StyledMain,
  StyledTitle,
  StyledText,
  ImageWrapper,
  TextWrapper
} from '../styled/about/styled';

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          about {
            text
            photo
            title
          }
        }
      }
    }
  `)

  const content = data.allDataJson.nodes[0].about;

  const  { photo, title, text } = content;

  return (
    <Layout>
      <Header indexPage={false} activePage="about" />
      <StyledMain>
        <ImageWrapper>
          <Image src={photo} width={647} height={798} alt="фото Александра" />
        </ImageWrapper>
        <TextWrapper>
          <StyledTitle variant='h1'>{title}</StyledTitle>
          {text?.map((item: string, id: number) => {
            return <StyledText key={id} variant="body1">{item}</StyledText>
          })}
        </TextWrapper>
      </StyledMain>
      <Footer />
    </Layout>
  )
};

export default AboutPage;
