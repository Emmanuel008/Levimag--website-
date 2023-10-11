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
                        <h2>Diamond Package (130 Million )</h2>
                        <ul>
                        <li>
                            <strong>Tournament Namesake:</strong> Your brand becomes synonymous with the event,
making a lasting impression.
                        </li>
                        <li>
                            <strong>Maximum brand recognition, exclusive
association.</strong> 
                        </li>
                        <li>
                            <strong>Total of brand advertising on a TV show,
Showing up on every tv show montage
</strong> 
                        </li>
                        <li>
                            <strong>Your logo prominently adorns the stage
background, ensuring constant visibility.</strong>
                        </li>
                        <li>
                            <strong>Captivating stage presence, prime exposure.</strong> 
                        </li>
                        <li>
                            <strong>Exclusive Gate Entrance:</strong> Make a grand
entrance as the sole gate entrance sponsor. 
                        </li>
                        <li>
                            <strong>Community engagement:</strong>Host educational
seminars in your brand'
s name, contributing to
dancer development.
                        </li>
                        <li>
                            <strong>Merchandise Showcase:</strong>
                            Showcase your brand
through tournament merchandise and
product promotions.
                        </li>
                        <li>
                            <strong>Product visibility, fan engagement.</strong>
                        </li>
                        <li>
                            <strong>Montage Master:</strong>Be a key part of the event
montage, capturing the audiences attention.
                        </li>
                        <li>
                            <strong>Red-Carpet Elegance: </strong>Grace the red carpet
background with your prominent logo.
                        </li>
                        <li>
                            <strong>Awards Prestige: </strong>Personally present awards to
winners, ensuring a memorable association.
                        </li>
                        <li>
                            <strong>360° Exposure: </strong>Acknowledgments in all key
event statements.
                        </li>
                        </ul>
                    </Text>
                </ContentWithPaddingXl>
        
            </Container>
        </AnimationRevealPage>
        
    )
}