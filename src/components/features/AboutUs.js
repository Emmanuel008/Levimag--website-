import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm text-green-800`;
export default () => {
  return (
    <div id="aboutUs">
      <MainFeature1
        subheading={<Subheading>About LEVIMAG</Subheading>}
        heading="We are a modern Business Consultant."
        description="Levimag Consultancy Company Limited is a dynamic and innovative
                    business consultancy firm headquartered in Dar-es-Salaam, Tanzania.
                    We pride ourselves on providing comprehensive solutions in sports 360
                    management, sales and marketing, business development, and human
                    resources services. Our commitment to excellence and customercentric approach has allowed us to build a reputation as a trusted
                    partner in the Tanzanian business landscape."
        buttonRounded={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to delivering innovative solutions."
        description="At Levimag Consultancy Company Limited, we
                    are committed to delivering innovative solutions
                    that empower businesses and individuals to
                    succeed. Our mission is to be a catalyst for growth
                    and development, and our vision is to become a
                    leading consultancy firm in the region."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      /> */}
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
    </div>
  );
};
