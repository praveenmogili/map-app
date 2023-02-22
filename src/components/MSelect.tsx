import React from "react";
import Select, {
  ActionMeta,
  GroupBase,
  OptionsOrGroups,
  SingleValue,
} from "react-select";
import { THEME_COLORS } from "../assets/constants";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

interface MSelectProps {
  options?: string[];
  fullOptions?: OptionsOrGroups<
    {
      value: string;
      label: string;
    },
    GroupBase<{
      value: string;
      label: string;
    }>
  >;
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

const optionsDefault = ["Chocolate", "Strawberry", "Vanilla"];

const MSelect = (props: MSelectProps) => {
  const {
    options = optionsDefault,
    fullOptions,
    onChange,
    defaultValue,
    className = "",
  } = props;
  
  const adjustedOptions =
    fullOptions ??
    options.map((option) => ({
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
  );
};

export default MSelect;
