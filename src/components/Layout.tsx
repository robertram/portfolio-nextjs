import React, { useEffect, useContext } from "react";
import Head from 'next/head'
import styled from "styled-components";
import Header from "./Header";
import { ThemeContext, saveThemeModePrefences } from "../context/themeContext";
import Seo from "./Seo";
//import "../assets/styles.css";

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

  // const data = useStaticQuery(graphql`
  //   query {
  //     site(siteMetadata: { title: {}, siteUrl: {} }) {
  //       siteMetadata {
  //         title
  //         siteUrl
  //       }
  //     }
  //     allStrapiGlobal {
  //       nodes {
  //         siteName
  //         defaultSeo {
  //           metaDescription
  //           metaTitle
  //         }
  //       }
  //     }
  //     strapiHomepage {
  //       seo {
  //         metaTitle
  //         metaDescription
  //       }
  //     }
  //   }
  // `);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${pageTitle && pageTitle}`}</title>
        <meta id="colorScheme" name="color-scheme" content={theme || "light"} />
      </Head>
      {/* <Seo seo={seo ? seo : data.strapiHomepage.seo} /> */}
      <LayoutContainer className="font-body">
        <Header />
        <main
          className={`${
            theme === "dark" ? "dark" : ""
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
