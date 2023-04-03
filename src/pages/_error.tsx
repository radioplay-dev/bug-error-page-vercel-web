import { NextPage } from "next";
import React from "react";
import {loadI18nDictionary} from "@/helpers/loadI18nDictionary";

const CustomError: NextPage = (props) => {
  console.log("_error props:", props)
  return <main><h1>Custom _error page</h1><p>Error</p></main>
};

CustomError.getInitialProps = async () => {
  const i18n = await loadI18nDictionary();

  return {
    foo: "bar",
    i18n,
  };
};

export default CustomError;
