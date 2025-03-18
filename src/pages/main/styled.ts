import { styled } from "@mui/material";

export const ImageWrapper = styled('div')`
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
