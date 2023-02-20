import React from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { THEME_COLORS } from "../assets/constants";

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

const options2 = ["Chocolate", "Strawberry", "Vanilla"];

const MSelect = (props: MSelectProps) => {
  const { options = options2, onChange, defaultValue, className } = props;
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
        className={className}
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
