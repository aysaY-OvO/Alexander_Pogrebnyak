import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { Typography } from "@mui/material";

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
    <>
      <Typography variant='h1'>Hello World</Typography>
      <img src={gif.allDataJson.nodes[0].gif} width={1024} height={1024} alt=""/>
    </>
  )
}

export default MainPage;
