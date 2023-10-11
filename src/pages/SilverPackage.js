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
                        <h2>Silver Package (30 Million Tsh)</h2>
                        <ul>
                        <li>
                            <strong>Merchandise Showcase:</strong> Showcase your brand
through exclusive tournament merchandise.
                        </li>
                        <li>
                            <strong>Value:</strong> Merchandise visibility, fan engagement.
                        </li>
                        <li>
                            <strong>Banner Dominance:</strong>  Extend your brand'
s reach
with banners and logo placements on event
walls.
                        </li>
                        <li>
                            <strong>Value:</strong> Event branding, wall visibility.
                        </li>
                        <li>
                            <strong>TV Screen Spotlight:</strong> 
                            Maximize visibility with
logo placements on TV screens and brand
recognition.
                        </li>
                        <li>
                            <strong>Value:</strong> Television exposure, screen recognition.
                        </li>
                        <li>
                            <strong>Red-Carpet Recognition:</strong> Get noticed on the
prestigious red-carpet background.
                        </li>
                        </ul>
                    </Text>
                </ContentWithPaddingXl>
        
            </Container>
        </AnimationRevealPage>
        
    )
}