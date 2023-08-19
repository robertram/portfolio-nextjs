import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";
import Hero from "../components/Hero";
import Work from "../components/Work";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import useContentful from '../useContentful'
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [work, setWork] = useState<any>([]);
  const [workExperience, setWorkExperience] = useState<any>([]);
  const [education, setEducation] = useState<any>([]);
  const [homepage, setHomepage] = useState<any>([]);
  const [SEOData, setSEOData] = useState<any>([]);
  const { getEntries } = useContentful();

  useEffect(() => {
    getEntries('work').then((response) => response && setWork(response));
    getEntries('workExperience').then((response) => response && setWorkExperience(response));
    getEntries('education').then((response) => response && setEducation(response));
    getEntries('homepage').then((response) => response && setHomepage(response));
    getEntries('seoData').then((response) => response && setSEOData(response));
  }, []);

  return (
    <ThemeProvider>
      <Layout seo={SEOData[0]}>
        <HomeContainer>
          <div className="Home__wrapper pr-10 pl-10 max-w-screen-2xl m-auto pt-16 ">
            <Hero homepage={homepage} />

            <WorkExperience workData={workExperience} />
            <Work workData={work} />
            <Education educationData={education} />
            <Footer />
          </div>
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
  }
`;


/*
export const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
        description
        heroImage {
          img {
            url
          }
        }
      }
      seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiExperience {
      nodes {
        picture {
          img {
            url
          }
        }
        description
        date
        company
        link
        title
        realDate
        teches {
          name
        }
      }
    }
    allStrapiEducation {
      nodes {
        picture {
          img {
            url
          }
        }
        provider
        title
        furtherEducation
        date
        realDate
      }
    }
    allStrapiWorkExperience {
      nodes {
        company
        company_link
        title
        raw_date
        work_type
        description
        date
      }
    }
  }
`;
*/
export default IndexPage;
