import React from "react";
import { styled } from "@mui/material";

interface ImageProps {
  src: string,
  width: number,
  height: number,
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, width, height, alt }) => {
  const StyledImage = styled('img')`
    display: block;
    box-sizing: border-box;
    height: 100%;
  `;

  return (
    <StyledImage src={src} width={width} height={height} alt={alt} />
  )
};

export default Image;
