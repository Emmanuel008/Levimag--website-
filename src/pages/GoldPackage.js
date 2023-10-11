import React from 'react';
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header, { LogoLink, NavLinks,  NavLink as NavLinkBase } from "components/Header";



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
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;
const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

export default ({
    headingText = 'Value / Benefits',
    navLinks = [
    <NavLinks key={1}>
      <NavLink href="/serebuka-dance">Back Serebuka Dance</NavLink>
    </NavLinks>
  ],
})=>{
    
    return (
        <AnimationRevealPage>
            <StyledHeader links={navLinks} collapseBreakpointClass="sm"/>
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Heading>{headingText}</Heading>
                    </HeadingRow>
                    <Text>
                        <h2>Gold Package (65 Million Tsh.)</h2>
                        <ul>
                        <li>
                            <strong>Awards Presentation:</strong> Present awards,
                                positioning your brand at the center of the
                                spotlight.
                        </li>
                        <li>
                            <strong>Prestigious association, awards recognition.</strong> 
                        </li>
                        <li>
                            <strong>Glamorous branding, red-carpet exposure.</strong> 
                        </li>
                        <li>
                            <strong>Engaging storytelling, event engagement.</strong>
                        </li>
                        <li>
                            <strong>Merchandise Display:</strong> 
                            Showcase your brand
                            through tournament merchandise and
                            product promotions
                        </li>
                        <li>
                            <strong>Extensive media coverage, publicity benefits.</strong> 
                        </li>
                        <li>
                            <strong>Targeted Marketing and Audience Engagement:</strong>
                        </li>
                        <li>
                            <strong>Value:</strong>
                            1 minute total of a brand advertising on a TV show 
                        </li>
                        </ul>
                    </Text>
                </ContentWithPaddingXl>
        
            </Container>
        </AnimationRevealPage>
        
    )
}