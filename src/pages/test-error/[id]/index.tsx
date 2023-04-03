import {GetStaticProps} from "next";

interface IProps {
  foo: string;
}

const MyPage = (props:IProps) => {
  // eslint-disable-next-line no-console
  console.log("MyPage render:", props);
  return <main><h1>My page</h1><p>Page</p></main>;
};

export const getStaticProps:GetStaticProps<IProps> = async (context) => {
  if (context.params?.id === "error") {
    throw new Error("Test");
  }
  return {
    props: {
      foo: "bar",
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default MyPage;
