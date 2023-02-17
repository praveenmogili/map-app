import React from "react";
import { SET_STATE_TYPE } from "../../assets/constants";
import { StyledBurger } from "./Burger.styled";

const Burger = ({
  menuOpen,
  setMenuOpen,
  ...props
}: {
  menuOpen: boolean;
  setMenuOpen: SET_STATE_TYPE;
}) => {
  const isExpanded = menuOpen ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      menuOpen={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
