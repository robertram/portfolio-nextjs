import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Image from 'next/image'
import moment from "moment";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
  date?: string;
  link?: string;
  company?: string;
  tech?: any;
  provider?: string;
}

export const SharedCard = (props: CardProps) => {
  const { title, description, image, date, link, company, tech, provider } =
    props;

  const formattedDate = moment(date ? date : '').format("MMMM, YYYY")
  return (
    <SharedCardContainer className="h-full mb-4 bg-background2-light dark:bg-background2-dark rounded-xl shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="flex flex-col">
        {image && (
          <div className="SharedCard__imageContainer sm:mr-6 mb-4 rounded-xl rounded-tl-xl rounded-tr-xl">
            <Image
              src={`https:${image}`}
              alt={title}
              className="SharedCard__image w-full object-cover object-center rounded-tl-xl rounded-tr-xl "
              width={500}
              height={500}
            />
          </div>
        )}
        <div className="w-full flex flex-col justify-center sm:m-0 border-2 p-6 pt-0">
          <h4 className="dark:text-text-dark text-text-light text-4xl sm:text-4xl mb-2">
            {title}
          </h4>
          {company && (
            <p className="dark:text-text-dark text-text-light text-3xl sm:text-2xl font-semibold mb-2 ">
              {company}
            </p>
          )}
          {description && (
            <p className="dark:text-text-dark text-text-light text-xl sm:text-base mb-2 ">
              {description}
            </p>
          )}
          {provider && (
            <p className="dark:text-text-dark text-text-light text-xl sm:text-xl">
              {provider}
            </p>
          )}
          {formattedDate && (
            <p className="dark:text-text-dark text-text-light text-md font-semibold">
              {formattedDate}
            </p>
          )}
          <div className="flex mt-2 flex-wrap">
            {tech &&
              tech.map((item: any, index: number) => (
                <p
                  key={index}
                  className="text-sm dark:text-gray-300 bg-background-light dark:bg-background-dark w-min h-full px-2 py-1 mr-2 mb-2 rounded-lg whitespace-nowrap"
                >
                  {item}
                </p>
              ))}
          </div>

          {link && <Button text="See project" blank link={link} />}
        </div>
      </div>
    </SharedCardContainer>
  );
};
const SharedCardContainer = styled.div`
  @media (min-width: 640px) {
    min-height: 250px;
  }
  .SharedCard {
    &__imageContainer {
      width: 100%;
      @media (min-width: 640px) {
        max-height: 200px;
      }
    }
    &__image {
      width: 100%;
      @media (min-width: 640px) {
        max-height: 200px;
      }
    }
  }
`;
