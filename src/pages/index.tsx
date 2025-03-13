import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const gif = useStaticQuery(graphql`
      query {
        file(relativePath: {eq: "main/main.gif"}) {
          publicURL
        }
      }
    `)

    if (!gif.file) {
      return <p>Image not found</p>
    }

  return (
    <img src={gif.file.publicURL} width={1024} height={1024} alt=""/>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
