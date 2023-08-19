import * as React from "react";
import styled from "styled-components";

interface Props {
  homepage: any
}

const Hero = (props: Props) => {
  const { title, description, image } = props.homepage[0]

  return (
    <HeroContainer>
      <div className="Hero__parent m-auto py-16 flex justify-center items-center">
        <div className="flex flex-col xl:flex-row xl:m-auto">
          <div className="w-full xl:w-1/2 flex flex-col justify-center mb-6 sm:m-0">
            <h1 className="dark:text-text-dark text-text-light text-4xl sm:text-5xl mb-2 sm:mb-2">
              I'm
            </h1>
            <h2 className="mb-6 sm:mb-6 dark:text-text-dark text-text-light text-7xl sm:text-6xl ">
              {title}
              Robert
            </h2>
            <p className="dark:text-text-dark text-text-light text-4xl sm:text-4xl">
              {description}
            </p>
            <a
              href="#contact"
              title="Contact"
              className="shadow-md hover:shadow-xl text-left  border-2 border-solid border-orange w-max p-2 mt-4 hover:bg-orange transition-all duration-500 hover:text-text-dark font-semibold rounded-md cursor-pointer"
            >
              Let's have a chat
            </a>
          </div>
          <div className="w-full xl:w-1/2">
            <img src={image.fields.file.url} alt={title} className="Hero__image w-full" />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  .Hero {
    &__parent {
      min-height: calc(100vh - 60px);
    }
    &__image {
      @media (min-width: 640px) {
        min-width: 500px;
      }
    }
  }
`;

export default Hero;
