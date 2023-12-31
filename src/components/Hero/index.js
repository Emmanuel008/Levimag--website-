import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks,  NavLink as NavLinkBase, SmoothLink } from "../Header";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;


const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("/company/image-004.jpg");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose text-green-700 font-semibold`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-green-500 text-gray-100 hover:bg-green-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;


export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <SmoothLink to="aboutUs" spy={true} smooth={true} offset={-100} duration={100}>About us</SmoothLink>
      <SmoothLink to="services" spy={true} smooth={true} offset={-100} duration={100}>Services</SmoothLink>
      <SmoothLink to="projects" spy={true} smooth={true} offset={-100} duration={100}>Projects</SmoothLink>
    </NavLinks>
  ],
  heading = (
    <>
      Welcome To LEVIMAG
      <wbr />
      <br />
      <span tw="text-green-500">Business Consultancy.</span>
    </>
  ),
  description = "WE ARE HERE TO HELP YOU GROW YOUR BUSINESS",
  primaryActionUrl = "#",
  primaryActionText = "Contact Us",
  secondaryActionUrl = "https://patatap.com/",
  secondaryActionText = "Game"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <SmoothLink to="contact" spy={true} smooth={true} offset={-100} duration={100} className="action primaryAction">
                {primaryActionText}
              </SmoothLink>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
