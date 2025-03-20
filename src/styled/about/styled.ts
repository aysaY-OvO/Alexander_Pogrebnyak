import { styled } from "@mui/material";
import { Typography } from '@mui/material';

export const StyledMain = styled('main')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  column-gap: 48px;
`;

export const StyledTitle = styled(Typography)`
  max-width: 415px;
  margin-bottom: 55px;
`;

export const StyledText = styled(Typography)`
  &:not(:last-of-type) {
    margin-bottom: 35px;
  }
`;

export const ImageWrapper = styled('div')`
  justify-self: end;
`;

export const TextWrapper = styled('div')`
  max-width: 647px;
  justify-self: start;
`;
