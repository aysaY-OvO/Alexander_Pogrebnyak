import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Header from "../../components/header/header";
import { StyledContainer } from "../../styled/layout/container";
import Image from "../../styled/ui/image";

const MainPage: React.FC = () => {
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
      <Image src={gif.allDataJson.nodes[0].gif} width={1024} height={1024} alt=""/>
    </StyledContainer>
  )
}

export default MainPage;
