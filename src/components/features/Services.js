import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";


import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import {MdSportsScore, MdPointOfSale} from 'react-icons/md'
import {FaBusinessTime, FaUserAlt} from 'react-icons/fa'  
import {AiFillCheckCircle} from 'react-icons/ai'

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-green-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-green-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-green-900`}
  }

  .description {
    ${tw`mt-3 font-semibold text-green-800 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: MdSportsScore, title: "SPORTS 360 MANAGEMENT",
        features: [
            "Sports Management and promotion",
            "Events Planning and coordination.",
            "Sponsorship and Branding"
        ]
    },
    { imageSrc: MdPointOfSale, title: "SALES AND MARKETING",
        features: [
            "Market analysis.",
            "Markert Positioning",
            "Influncer Markerting",
            "Lead Generation"
        ]
    },
    { imageSrc: FaBusinessTime, title: "BUSINESS DEVELOPMENT",
        features: [
            "Customer Retention",
            "Product or Service Expansion",
            "Pipeline Management",
            "Licensing and Franchising"
        ]
    },
    { imageSrc: FaUserAlt, title: "HUMAN RESOURCE",
        features: [
            "Recruitment and Staffing",
            "HR Consulting",
            "Training and Development",
            "Payroll Services"
        ]
    },
  ];

  const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-green-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-green-900 tracking-wide ml-3`}
    }
  }
`;

  return (
    <Container id="services">
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-green-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <card.imageSrc className="icon"/>
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <PlanFeatures>
                    {card.features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <AiFillCheckCircle className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
                </PlanFeatures>
                
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
