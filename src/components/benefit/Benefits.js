import React, {useState} from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div(props => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;

const QuotesLeft = tw(QuotesLeftIcon)`w-6 h-6 opacity-75 text-green-900 inline-block mr-1 -mt-3`;
const QuotesRight = tw(QuotesRightIcon)`w-6 h-6 opacity-75 text-green-900 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({
  subheading = "",
  heading = "Benefits",
  description = "Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  testimonials = null,
  textOnLeft = false
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */
  const defaultTestimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      quote:
        "Our readership is a diverse blend of golf enthusiasts, spanning from amateurs, seasoned professionals to enthusiastic newcomers. This influential readership extends beyond the realm of golf, including Members of Parliament, Ambassadors, CEOs, Diplomats, community leaders, Army top officials, and Government representatives. Aligning your brand with The Royal Golf Magazine will seamlessly connect you with this influential and highly motivated audience.",
      customerName: "Audience Demographics:",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      quote:
        "The Royal Golf Magazine offers a rare and exclusive opportunity to enhance your brand's identity, lend support to cultural and sports initiatives, and effectively promote your products or services to a highly receptive audience.",
      customerName: "Alignment with Company Goals:",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      quote:
        "Sponsoring The Royal Golf Magazine is your gateway to elevating your brand's image not just within the golfing community but also beyond its boundaries. Your association with this historic magazine will convey prestige, credibility, and a robust commitment to advancing sports and tourism in Tanzania.",
      customerName: "Impact on Brand Image:",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      quote:
        "Our advertising formats are comprehensive, covering both print and digital platforms. We offer a variety of advertising options, including cover branding, inside page advertisements, and more, allowing you to effectively convey your message to our discerning readers.",
      customerName: "Advertising Opportunities:",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      quote:
        "We will actively integrate your sponsorship into our magazine through prominent mentions, branding, and a host of engagement opportunities. Our team will work closely with yours to ensure your brand enjoys maximum visibility and recognition.",
      customerName: "Partnership Activation:",
    }
  ];

  if (!testimonials || testimonials.length === 0) testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <HeadingInfo tw="text-center lg:hidden" subheading={subheading} heading={heading} description={description} />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider arrows={false} ref={setImageSliderRef} asNavFor={textSliderRef} fade={true}>
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo tw="hidden lg:block" subheading={subheading} heading={heading} description={description} />
                <TestimonialTextSlider arrows={false} ref={setTextSliderRef} asNavFor={imageSliderRef} fade={true}>
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <HeadingInfo  heading={testimonial.customerName}/>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    {/* <Description>{description}</Description> */}
  </div>
);
