import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/main/main.gif" }) {
        publicURL
      }
    }
  `);

  console.log(data);

  if (!data.file) {
    return <div>Image not found</div>;
  }

  return (
    <main>
      <h1>Main screen</h1>
      <img src={data.file.publicURL} alt="Main GIF" />;
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
