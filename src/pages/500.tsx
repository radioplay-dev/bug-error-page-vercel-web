import { GetStaticProps } from "next";
import React from "react";

const Custom500 = () => {
  return (
      <main><h1>Custom 500 page</h1><p>Error</p></main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      foo: "bar",
    },
  };
};

export default Custom500;
