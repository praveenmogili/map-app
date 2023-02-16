import React from "react";
import PropTypes from "prop-types";
import Surveys from "./surveys/Surveys";

const Home = () => {
  return (
    <div>
      Hello World
      <Surveys />
      <Surveys />
    </div>
  );
};

Home.propTypes = {};

export default Home;
