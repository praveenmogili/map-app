import React from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { THEME_COLORS } from "../assets/constants";

interface MSelectProps {
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>;
}

const MSelect = (props: MSelectProps) => {
  const {
    options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  } = props;
  return (
    <>
      <Select
        options={options}
        isSearchable
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isSelected ? "#f5f5f5" : "#fff",
            color: state.isSelected ? THEME_COLORS.PRIMARY : "black",
            ":hover": {
              backgroundColor: THEME_COLORS.PRIMARY,
              color: "white",
            },
          }),
        }}
      />
    </>
  );
};

export default MSelect;
