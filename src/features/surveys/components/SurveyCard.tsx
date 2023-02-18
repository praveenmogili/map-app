import React from "react";
import { Form } from "react-bootstrap";

const SurveyCard = () => {
  return (
    <div className="card ">
      <p className="title m-0">Implementation Data</p>
      <p className="subtitle">The implementation data description</p>
      <input type="text" placeholder="Short answer text" />
      <select>
        <option>Long answer text</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <Form>
        <Form.Select>
            <option>Long answer text</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </Form.Select>
      </Form>
    </div>
  );
};

export default SurveyCard;
