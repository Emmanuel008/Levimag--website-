import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/Header";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import Footer from "components/footers/Footer";
import Contact from "components/features/Contact";
import Benefits from "components/benefit/Benefits";
import Payment from "components/payment/Payment";




const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Subheading = tw.span`uppercase tracking-wider text-sm text-green-800`;
const HighlightedText = tw.span`bg-green-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;


export default ({
    headingText = "THE ROYAL GOLF MAGAZINE",

}) =>{
    return (
        <AnimationRevealPage>
            <Header/>
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Heading>{headingText}</Heading>
                    </HeadingRow>
                    <MainFeature1
                        subheading={<Subheading>About ROYAL GOLF MAGAZINE</Subheading>}
                        heading="We proudly publish 'ROYAL GOLF MAGAZINE'"
                        description="Levimag Consultancy Company Limited a publisher of Royal Golf
                                    Magazine is a dynamic and innovative business consultancy firm
                                    headquartered in Dar-es-Salaam, Tanzania. We pride ourselves on
                                    providing comprehensive solutions in sports 360 management, sales
                                    and marketing, business development, and human resources
                                    services. Our commitment to excellence and customer-centric
                                    approach has allowed us to build a reputation as a trusted partner in
                                    the Tanzanian business landscape."
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                        textOnLeft={false}
                    />
                    <MainFeature1
                        subheading={<Subheading>About Magazine Patron</Subheading>}
                        heading="Dr. Damas Ndumbaro"
                        description="Magazine Patron, is a Minister of Culture, Arts
                                    and Sports.
                                    Who is also Tanzania Bunge Golf Team
                                    Member.
                                    "
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <MainFeature1
                        subheading={<Subheading>Proposal Sunmary</Subheading>}
                        heading="The Royal Golf Magazine is Tanzania's premier golf publication"
                        description="The Royal Golf Magazine is Tanzania's premier golf publication,
                                    serving as the authoritative source for all golf related news/issues in
                                    the nation.
                                    Our mission is to provide top-tier, exclusive content that not
                                    only informs but also entertains and motivates both seasoned
                                    golfers and enthusiastic newcomers. This proposal extends a warm
                                    invitation to your esteemed company to join us as a valued sponsor
                                    of this groundbreaking magazine, offering an unmatched
                                    opportunity to elevate your brand'
                                    s visibility and engagement within
                                    the dynamic golfing community.
                                    "
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                        textOnLeft={false}
                    />
                    <MainFeature1
                        subheading={<Subheading>Proposal Overview</Subheading>}
                        heading="The Royal Golf Magazine is a historic publication"
                        description="The Royal Golf Magazine is a historic publication that caters to both
                                    English and Swahili-speaking readers, providing an immersive
                                    experience for golf enthusiasts nationwide. We take pride in reaching the
                                    heart of Tanzania
                                    '
                                    s vibrant golfing community, offering a unique
                                    platform to showcase your brand to a highly targeted and influential
                                    audience. Through strategic distribution, we ensure that our content is
                                    readily accessible to golfers and potential tourists across the entire
                                    country
                                    The Royal Golf Magazine Expected to be published quarterly with its first
                                    issue to be out in October 2023, our magazine is dedicated to the
                                    promotion and development of golf and its associated disciplines. It
                                    stands as a testament to the thriving golfing culture in Tanzania, with the
                                    potential to not only attract tourists but also captivate golf enthusiasts of
                                    all levels"
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <MainFeature1
                        subheading={<Subheading>Sponsorship</Subheading>}
                        heading="Our sponsorship opportunities"
                        description="Our sponsorship opportunities are designed to be versatile and tailored
                                    to your preferences and objectives. We offer a range of options,
                                    including Main Sponsorship, advertising space, event sponsorship, and
                                    customized packages crafted to align seamlessly with your brand'
                                    s
                                    unique goals and strategies.
                                    Benefits to the Sponsor
                                    By partnering with The Royal Golf Magazine, your company stands to
                                    gain a host of unparalleled benefits. These include amplified brand
                                    exposure, heightened visibility among a niche audience, and direct
                                    access to the vibrant golfing community. Your association with our
                                    magazine will distinctly reflect your commitment to both sports and
                                    cultural initiatives within the Tanzanian landscape.
                                    "
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <Benefits textOnLeft={true}/>
                    <FeatureWithSteps
                        subheading={<Subheading>Sponsorship Rates</Subheading>}
                        heading={
                        <>
                            Sponsorship <HighlightedText>value.</HighlightedText>
                        </>
                        }
                        textOnLeft={false}
                        imageSrc={macHeroScreenshotImageSrc}
                        imageDecoratorBlob={true}
                        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
                    />
                    <Payment/>
                    <MainFeature1
                        subheading={<Subheading>The Royal golf Magazine</Subheading>}
                        heading="R.O.I & TRACKING"
                        description="We are dedicated to ensuring that your sponsorship investment yields
                                    tangible results. Key performance indicators (KPIs) and metrics will be
                                    established to track the impact of your sponsorship. These may include
                                    increased brand awareness, website traffic, social media engagement,
                                    and any measurable impact on sales or leads generated. We will provide
                                    regular reports and updates to demonstrate the value of our partnership."
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <MainFeature1
                        subheading={<Subheading>The Royal golf Magazine</Subheading>}
                        heading="Proposal Timeline"
                        description="The duration of our partnership can be customized to align with your
                                    objectives. A detailed timeline will be provided upon further discussions
                                    and agreement."
                        buttonRounded={false}
                        textOnLeft={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <MainFeature1
                        subheading={<Subheading>The Royal golf Magazine</Subheading>}
                        heading="Appendices"
                        description="Attached, you will find additional supporting documents, including our
                                    magazine license, which provides a comprehensive overview of The Royal
                                    Golf Magazine.
                                    We eagerly anticipate the opportunity to collaborate with your esteemed
                                    company. Together, we can make a lasting impact on the golfing
                                    community and showcase Tanzania
                                    '
                                    s abundant potential to the world.
                                    Thank you for considering this sponsorship opportunity."
                        buttonRounded={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                    <MainFeature1
                        subheading={<Subheading>The Royal golf Magazine</Subheading>}
                        heading="Next Steps"
                        description="To move forward, we cordially invite you to schedule a meeting with our
                                    team to delve into the specifics of your sponsorship package, finalize the
                                    agreement, and address any questions or concerns you may have. We
                                    are wholly committed to ensuring that this partnership is mutually
                                    beneficial and a rewarding experience for your esteemed company.
                                    "
                        buttonRounded={false}
                        textOnLeft={false}
                        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    />
                </ContentWithPaddingXl>
            </Container>
            <Contact/>
            <Footer/>
        </AnimationRevealPage>
    )
}