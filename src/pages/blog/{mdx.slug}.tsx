import * as React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../../context/themeContext";

const BlogPost = ({ data }: any) => {
  //const image = getImage(data.mdx.frontmatter.hero_image);

  return null
  return (
    <ThemeProvider>
      <Layout pageTitle="Super Cool Blog Posts">
        <BlogPostContainer>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
          {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
        </BlogPostContainer>
      </Layout>
    </ThemeProvider>
  );
};

const BlogPostContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default BlogPost;
