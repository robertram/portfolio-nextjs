import * as React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../../context/themeContext";
import Articles from "../../components/Articles";

const BlogPage = ({ data }: any) => {
  return null
  return (
    <ThemeProvider>
      <Layout pageTitle="My Blog Posts">
        <BlogPageContainer>
          <div className="BlogPage__wrapper pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
            {/*<Nav />*/}
            <div className="BlogPage__articlesContainer container mx-auto px-0">
              <h1 className="text-5xl my-6">Blog</h1>
              {data?.allStrapiArticle && (
                <Articles articles={data?.allStrapiArticle?.edges} />
              )}
            </div>
          </div>
        </BlogPageContainer>
      </Layout>
    </ThemeProvider>
  );
};

const BlogPageContainer = styled.div`
  .BlogPage {
  }
`;

export default BlogPage;
