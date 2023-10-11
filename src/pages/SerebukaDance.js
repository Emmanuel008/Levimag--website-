import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/Header";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/Footer";
import Contact from "components/features/Contact";



const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Subheading = tw.span`uppercase tracking-wider text-sm text-green-800`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-green-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;
const HighlightedText = tw.span`bg-green-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;



export default ({
    headingText = "SEREBUKA DANCE COMPETITION",
    heading = "Execution Plan",
    description = "The dance competition will involves 5 phases.",
    features = null,
}) => {
    features = features || [
    `Auditions`,
    `Eliminations rounds`,
    `Quarter-finals`,
    "Semi-finals",
    "Grand-finale",
  ];
    return (
        <AnimationRevealPage>
            <Header/>
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Heading>{headingText}</Heading>
                    </HeadingRow>
                    <MainFeature1
                        subheading={<Subheading>About SEREBUKA DANCE COMPETITION</Subheading>}
                        heading="We are the driving force behind."
                        description="Levimag Consultancy Company Limited as a owner of
                                    Serebuka Dance Competition is a dynamic and innovative
                                    business consultancy firm headquartered in Dar-es-Salaam,
                                    Tanzania. We pride ourselves on providing comprehensive
                                    solutions in sports 360 management, sales and marketing,
                                    business development, and human resources services. Our
                                    commitment to excellence and customer-centric approach
                                    has allowed us to build a reputation as a trusted partner in the
                                    Tanzanian business landscape."
                        buttonRounded={false}
                        imageSrc="/serebuka/image-006.jpg"
                    />
                    <Text>
                        <h2>Objective</h2>
                        <ul>
                        <li>
                            <strong>Professionalism:</strong> To elevate the quality of
                            street dance performances by emphasizing
                            choreography, enabling dancers to display
                            their skills at a higher level.
                        </li>
                        <li>
                            <strong>Career Opportunities:</strong> Through financial
                            rewards and professional development, will
                            facilitate a path for street dancers to pursue
                            their passion as a lucrative career.
                        </li>
                        <li>
                            <strong>Community Building:</strong> The competition will
                            foster a strong sense of unity within the street
                            dance community, promoting collaboration
                            and growth.
                        </li>
                        <li>
                            <strong>Brand Visibility and Exposure:</strong>
                        </li>
                        <li>
                            <strong>Leverage event-related content for extended brand reach.</strong> 
                        </li>
                        <li>
                            <strong>Demonstrate corporate social responsibility
                                by supporting local arts, youth development,
                                and community initiatives.
                            </strong> 
                        </li>
                        <li>
                            <strong>Targeted Marketing and Audience Engagement:</strong>
                        </li>
                        <li>
                            <strong>Create meaningful interactions with potential customers and build brand loyalty</strong> 
                        </li>
                        </ul>
                    </Text>
                    <MainFeature1
                        subheading={<Subheading>Serebuka Concept Overview</Subheading>}
                        heading="We aim to showcasing talents."
                        description="
                            'Serebuka Dance Stars Competition
                            '
                            aims at
                            showcasing the talents of street dancers age (17-
                            40), through choreographed Audition in solo and
                            duet performances. Will use Styles like hip-hop,
                            house, amapiano, breakdances, popping
                            animations, locking, Latin dances (tango, salsa,
                            and bachata) traditional dances and afro-pop.
                            Only 4 winners out of 40 Audited dancers will be
                            wired with prize. This initiative seek to promote
                            choreography dance, where talented street
                            dancers will showcase their skills and earn a
                            living doing what they love"
                        buttonRounded={false}
                        primaryButtonText="Contact Us"
                        imageSrc="/serebuka/image-008.jpg"
                        textOnLeft={false}
                    />
                    <HeroRow>
                        <TextColumn>
                        <Heading as="h1">{heading}</Heading>
                        <Description>{description}</Description>
                        <FeatureList>
                            {features.map((feature, index) => (
                            <Feature key={index}>
                                <FeatureIcon />
                                <FeatureText>{feature}</FeatureText>
                            </Feature>
                            ))}
                        </FeatureList>
                        </TextColumn>
                        <ImageColumn>
                        <ImageContainer>
                            <Image src='/serebuka/image-011.jpg' />
                        </ImageContainer>
                        </ImageColumn>
                    </HeroRow>
                    <TabGrid
                        heading={
                        <>
                            SPONSORSHIP RATE <HighlightedText>CARD.</HighlightedText>
                        </>
                        }
                    />
                </ContentWithPaddingXl>
            </Container>
            <Contact/>
            <Footer/>
        </AnimationRevealPage>
    )
};