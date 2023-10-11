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
                        <h2>Bronze Package (15 Million Tsh.)</h2>
                        <ul>
                        <li>
                            <strong>Recognition through Banners:</strong> Gain recognition
with banners and logo placements.
                        </li>
                        <li>
                            <strong>Value:</strong> Event presence, banner visibility.
                        </li>
                        <li>
                            <strong>TV Screen Exposure:</strong> Extend your brand'
s reach
with logo placements on TV screens.
                        </li>
                         <li>
                            <strong>Value:</strong> Television visibility, screen recognition.
                        </li>
                        <li>
                            <strong>Red-Carpet Visibility:</strong> 
                            Secure your place on the
red-carpet background, ensuring visibility.
                        </li>
                        <li>
                            <strong>Value:</strong> Red-carpet presence, event recognition.
                        </li>
                        <li>
                            <strong>Minor Sponsorship - Contributing to the Dance Stars:</strong>
                        </li>
                        <li>
                            <strong>Value:</strong> Top 20 recognition, event engagement.
                        </li>
                        <li><strong>Quarter-Finals Booster:</strong> Promote your brand
                        during the crucial quarter-finals.
                        </li>
                        <li><strong>Value:</strong> Quarter-finals exposure, event
                        recognition.</li>
                        <li><strong>Semi-Finals Support:</strong> Shine a spotlight on your
                        brand during the thrilling semi-finals.
                        </li>
                        <li><strong>Value:</strong> Semi-finals exposure, event
                        engagement.</li>
                        <li><strong>Grand Finale Enabler:</strong> Secure your place in the
                        grand finale broadcast where the top 4
                        dancers compete for the championship.
                        </li>
                        <li><strong>Value:</strong> Grand finale recognition, event climax
                        presence</li>
                        </ul>
                    </Text>
                </ContentWithPaddingXl>
        
            </Container>
        </AnimationRevealPage>
        
    )
}