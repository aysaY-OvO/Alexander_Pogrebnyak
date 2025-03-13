import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
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
    <img src={gif.allDataJson.nodes[0].gif} width={1024} height={1024} alt=""/>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
