import React from "react";
import Heading from "../layout/Heading";

function Home() {
  return (
    <>
      <Heading content="Home" />

      <div className="container">Environment: {process.env.NODE_ENV}</div>
    </>
  );
}

export default Home;
