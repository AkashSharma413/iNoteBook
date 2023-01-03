import React from "react";
import Notes from "./Notes";

const Home = ( props) => {
  const {showAlert} = props;

  return (
    <React.Fragment>
      <Notes showAlert={showAlert} />
    </React.Fragment>
  );
};

export default Home;
