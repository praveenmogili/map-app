import React from "react";
import PropTypes from "prop-types";
import Surveys from "./surveys/Surveys";
import H1TitleBar from "../components/H1TitleBar";
import H2TitleSubtitle from "../components/H2TitleSubtitle";

const Home = () => {
  return (
    <div>
      <H1TitleBar title="Surveys" />
      <H2TitleSubtitle
        title="Customer surveys"
        subtitle="Create and manage surveys"
      />
      <Surveys />
      <Surveys />
    </div>
  );
};

Home.propTypes = {};

export default Home;
