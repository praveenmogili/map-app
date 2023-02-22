import React from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { THEME_COLORS } from "../assets/constants";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

interface MSelectProps {
  options?: string[];
  defaultValue?: string;
  onChange?: (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => void;
  className?: string;
}

const optionsDefault = [
  `${(<AccessibilityNewIcon />)}c`,
  "Strawberry",
  "Vanilla",
];

const MSelect = (props: MSelectProps) => {
  const {
    options = optionsDefault,
    onChange,
    defaultValue,
    className = "",
  } = props;
  const adjustedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));
  const adjustedDefaultValue = defaultValue
    ? {
        value: defaultValue,
        label: defaultValue,
      }
    : undefined;

  return (
    <>
      <Select
        className={`m-select ${className}`}
        options={adjustedOptions}
        isSearchable
        onChange={onChange}
        defaultValue={adjustedDefaultValue}
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
