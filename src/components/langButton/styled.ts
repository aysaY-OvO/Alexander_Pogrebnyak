import { styled } from "@mui/material";

export const StyledButton = styled('button')<{active?: boolean}>(({theme, active}) => ({
  fontSize: 24,
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.palette.customColors?.green,
  cursor: 'pointer',
  textDecoration: active ? 'underline' : 'none'
}));
