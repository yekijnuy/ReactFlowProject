import React from "react";
import { Container } from "semantic-ui-react";

const MainContainer = ({ children }) => {
  return <Container style={{ marginTop: "5em" }}>{children}</Container>;
};

export default MainContainer;
