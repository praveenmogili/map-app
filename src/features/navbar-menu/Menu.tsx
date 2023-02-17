import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ menuOpen, ...props }: { menuOpen: boolean }) => {
  const isHidden = menuOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu menuOpen={menuOpen} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        Pricing
      </a>
      <a href="/" tabIndex={tabIndex}>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
