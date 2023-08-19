import React, { useEffect, useContext } from "react";
import Head from 'next/head'
import styled from "styled-components";
import Header from "./Header";
import { ThemeContext, saveThemeModePrefences } from "../context/themeContext";

export interface Props {
  pageTitle?: string;
  children: any;
  seo?: any;
}

const Layout = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const { pageTitle, children, seo } = props;
  useEffect(() => {
    saveThemeModePrefences();
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${seo ? seo.title : 'Robert Ramirez'}`}</title>
        <meta id="colorScheme" name="color-scheme" content={theme || "light"} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta name="author" content="Robert Ramirez" />

        <meta property="og:title" content={seo?.title} />
        <meta property="og:description" content={seo?.description} />
        <meta property="og:image" content={seo?.image} />
        <meta property="og:image:alt" content={seo?.title} />
        <meta property="og:url" content="https://robertramdev.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.title} />
        <meta name="twitter:description" content={seo?.description} />
        <meta name="twitter:image" content={seo?.image} />
        <meta name="twitter:image:alt" content={seo?.title}></meta>
      </Head>
      {/* <Seo seo={seo ? seo : data.strapiHomepage.seo} /> */}
      <LayoutContainer className="font-body">
        <Header />
        <main
          className={`${theme === "dark" ? "dark" : ""
            } dark:bg-background-dark bg-background-light dark:text-white text-black h-full transition-all duration-300`}
        >
          {children}
        </main>
      </LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div`
  main {
    min-height: 100vh;
  }
`;

export default Layout;
