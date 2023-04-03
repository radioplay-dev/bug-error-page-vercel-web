import { NextPage } from "next";
import React from "react";

const CustomError: NextPage = (props) => {
  // We're getting the default Vercel error page instead of this custom error page
  // when project is deployed on Vercel. It could have something to do with "i18n"
  // in "next.config.js". Trigger the error via the "/test-error/error" page.
  console.log("_error props:", props)
  return <main><h1>Custom _error page</h1><p>Error</p></main>
};

CustomError.getInitialProps = async () => {
  return {
    foo: "bar",
  };
};

export default CustomError;
