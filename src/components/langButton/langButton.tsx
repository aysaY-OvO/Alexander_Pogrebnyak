import React from "react";

import { StyledButton } from "./styled";

interface LangButtonProps {
  active?: boolean,
  lang: string
}

const LangButton: React.FC<LangButtonProps> = ({active, lang}) => {
  return (
    <StyledButton active={active}>
      {lang}
    </StyledButton>
  )
};

export default LangButton;
