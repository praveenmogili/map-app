import React from "react";
import { Form } from "react-bootstrap";

interface MSmallDropdownProps {
  defaultOption?: string;
  otherOptions: string[];
}

const DEFAULT_OPTION = "Choose...";

const MSmallDropdown = (props: MSmallDropdownProps) => {
  const { defaultOption = DEFAULT_OPTION, otherOptions } = props;
  return (
    <Form>
      <Form.Select className="small-colored-select">
        <option>{defaultOption}</option>
        {otherOptions.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Form.Select>
    </Form>
  );
};

export default MSmallDropdown;
