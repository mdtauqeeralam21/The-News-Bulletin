import Head from "next/head";
import Footer from "./components/Footer";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          content="width=device-width, initial-scale=1.0, user-scalable=no"
          name="viewport"
        />
        <meta name="theme-color" content="#ffffff"></meta>
        <title>News App</title>
      </Head>
      <div className="main"></div>
      <Layout />
      <Footer />
    </>
  );
}
