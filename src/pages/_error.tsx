import { NextPage } from "next";
import React from "react";

const CustomError: NextPage = (props) => {
  console.log("_error props:", props)
  return <main><h1>Custom _error page</h1><p>Error</p></main>
};

CustomError.getInitialProps = async () => {
  return {
    foo: "bar",
  };
};

export default CustomError;
