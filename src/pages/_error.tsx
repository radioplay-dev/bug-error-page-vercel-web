import { NextPage, NextPageContext } from "next";
import React from "react";

const CustomError: NextPage = () => {
  return <main><h1>Custom _error page</h1><p>Error</p></main>
};

CustomError.getInitialProps = async (
  contextData: NextPageContext
) => {
  const { res } = contextData;

  if (res) {
    res.statusCode = 500;
  }

  return {
    foo: "bar",
  };
};

export default CustomError;
