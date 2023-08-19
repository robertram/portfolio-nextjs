import * as React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import { ThemeProvider } from "../context/themeContext";
import Head from "next/head";

// markup
const NotFoundPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <Head>
          <title>Page not found</title>
        </Head>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link href="/">Go home</Link>.
        </p>
      </Layout>
    </ThemeProvider>
  );
};

export default NotFoundPage;
