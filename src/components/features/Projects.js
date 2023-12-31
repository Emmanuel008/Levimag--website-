import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-green-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-green-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-green-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-green-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-green-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-green-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "/company/image-015.jpg",
      subtitle: "Paid",
      title: "THE ROYAL GOLF MAGAZINE",
      description:
        'We proudly publish "The Royal Golf Magazine," a premier publication dedicated to the world of golf. Through captivating content and strategic partnerships, we bring the passion and excitement of golf to our readers.',
      url: "/royal-magazine"
    },

    {
      imageSrc:
        "/company/image-016.jpg",
      subtitle: "Free",
      title: "SEREBUKA DANCE COMPETITION",
      description:
        'We are the driving force behind the "Serebuka Dance Stars Tournament." This exciting dance competition showcases the incredible talent of dancers in Tanzania. Levimag Consultancy Company Limited oversees all aspects of event management, ensuring its success from auditions to the grand finale.',
      url: "/serebuka-dance"
    },
  ];

  return (
    <Container id="projects">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Projects</HeadingTitle>
          <HeadingDescription>
            Explore our portfolio of successful projects and discover 
            how LEVIMAG Business Consultants have helped businesses achieve their goals. 
            Our team of experts brings innovative solutions and industry expertise to every project, ensuring success for our clients.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Project Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
