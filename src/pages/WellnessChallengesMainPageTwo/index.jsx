import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function WellnessChallengesMainPageTwoPage() {
  return (
    <>
      <Helmet>
        <title>Swarada's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-light_green-50">
        <div className="flex flex-col self-end items-center">
          <div className="self-stretch h-[821px] relative">
            <div className="flex flex-col items-end w-full top-0 right-0 left-0 m-auto absolute">
              <Img src="images/img_vector_blue_200_1x289.png" alt="vector_one" className="w-[20%] object-cover" />
              <div className="self-stretch mt-[-121px] bg-gradient">
                <div className="flex flex-col items-center w-full mx-auto md:p-5 max-w-[1200px]">
                  <Heading as="h1" className="capitalize text-center">
                    More Reasons to choose Woliba
                  </Heading>
                  <Text as="p" className="mt-7 !text-light_blue-900_99 text-center !leading-6">
                    HR teams leverage Woliba Employee Recognition alongside Challenges, Resources, Surveys, Events, and
                    Reward Management to comprehensively engage employees and foster a world-class organizational
                    culture.
                  </Text>
                  <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image" className="h-[8px] mt-7" />
                  <Text size="3xl" as="p" className="mt-[76px] !text-light_blue-900 text-center">
                    Coaching & Events
                  </Text>
                  <div className="h-[390px] w-[77%] mt-[11px] relative">
                    <Img
                      src="images/img_layer_x0020_2.svg"
                      alt="image_one"
                      className="h-[80px] bottom-[10%] right-0 left-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img src="images/img_group_57557.svg" alt="image_two" className="h-[60px] w-[60px] z-[1]" />
                      <div className="flex md:flex-col self-stretch justify-center items-start mt-[-30px]">
                        <div className="flex md:flex-col justify-center items-center z-[1] flex-1">
                          <Text size="3xl" as="p" className="self-end !text-light_blue-900 text-right z-[1]">
                            Surveys{" "}
                          </Text>
                          <div className="flex md:flex-col justify-center items-start ml-[-33px] md:ml-0 flex-1">
                            <Text size="3xl" as="p" className="mt-[59px] !text-light_blue-900 text-right z-[1]">
                              Recognition
                            </Text>
                            <div className="flex md:flex-col justify-center items-center ml-[-95px] md:ml-0 flex-1">
                              <Img
                                src="images/img_group_57556.svg"
                                alt="image_three"
                                className="self-end h-[60px] w-[60px] z-[1]"
                              />
                              <div className="h-[361px] md:w-full ml-[-54px] md:ml-0 flex-1 relative md:flex-none">
                                <Img
                                  src="images/img_group_57551_700x700.png"
                                  alt="image_four"
                                  className="h-[700px] w-full md:w-[700px] md:h-auto bottom-0 right-0 left-0 m-auto object-cover absolute"
                                />
                                <div className="flex justify-between w-[71%] top-[12%] right-0 left-0 gap-5 m-auto absolute">
                                  <Img
                                    src="images/img_group_57555.svg"
                                    alt="image_five"
                                    className="h-[60px] w-[60px]"
                                  />
                                  <Img
                                    src="images/img_group_57489_9.svg"
                                    alt="image_six"
                                    className="h-[60px] w-[60px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-[20%] md:w-full mt-[57px] ml-[-90px] gap-[104px] md:gap-[78px] md:ml-0 sm:gap-[52px]">
                          <Text size="3xl" as="p" className="!text-light_blue-900">
                            Resources
                          </Text>
                          <div className="flex justify-end items-center ml-[34px] gap-3 md:ml-0">
                            <Img src="images/img_group_57558.svg" alt="image_seven" className="h-[60px] w-[60px]" />
                            <Text size="3xl" as="p" className="!text-light_blue-900">
                              Rewards
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[26%] bottom-0 left-[7%] p-5 m-auto bg-white-A700 shadow-xs absolute rounded-[32px]">
              <div className="flex flex-col items-start w-full gap-[11px] max-w-[308px]">
                <div className="flex self-stretch justify-between items-center gap-5">
                  <Text size="3xl" as="p" className="!text-light_blue-900">
                    Surveys{" "}
                  </Text>
                  <Img src="images/img_group_57556.svg" alt="image_eight" className="h-[60px] w-[60px]" />
                </div>
                <Text size="md" as="p" className="!text-light_blue-900">
                  Capture direct employee feedback effortlessly, providing data-driven insights to inform and improve
                  your workplace strategies.
                </Text>
                <Button
                  color="green_400"
                  size="lg"
                  shape="round"
                  className="uppercase font-medium border-green-400 border-2 border-solid min-w-[129px] !rounded-[20px]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector_blue_200_1x326.png"
            alt="vector_three"
            className="w-[23%] mt-[29px] object-cover"
          />
          <div className="w-full mx-auto md:p-5 max-w-[1200px]">
            <div className="flex flex-col gap-7">
              <div className="flex justify-between items-center gap-5">
                <Heading as="h2" className="capitalize">
                  Recommended Articles
                </Heading>
                <Button
                  color="light_green_50"
                  size="lg"
                  shape="round"
                  className="uppercase font-medium border-blue-200 border-2 border-solid min-w-[103px] !rounded-[20px]"
                >
                  View All
                </Button>
              </div>
              <div className="flex md:flex-col gap-px shadow-xs">
                <div className="flex flex-col w-full rounded-tl-[20px] rounded-bl-[20px] bg-light_green-50">
                  <Img
                    src="images/img_monday_new_year.png"
                    alt="mondaynewyear"
                    className="h-[500px] rounded-bl-[20px] rounded-tl-[20px] object-cover"
                  />
                </div>
                <div className="flex flex-col w-full bg-light_green-50">
                  <Img
                    src="images/img_how_to_be_an_informed.png"
                    alt="howtobean_one"
                    className="h-[500px] object-cover"
                  />
                </div>
                <div className="flex flex-col w-full rounded-tr-[20px] rounded-br-[20px] bg-light_green-50">
                  <Img
                    src="images/img_monday_new_year_500x400.png"
                    alt="mondaynewyear"
                    className="h-[500px] rounded-tr-[20px] rounded-br-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-40 mx-auto md:p-5 max-w-[1200px]">
            <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="h-[435px] w-[29%] relative">
                <Img
                  src="images/img__orange_200.svg"
                  alt="image_nine"
                  className="justify-center h-[435px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Heading as="h2" className="top-[21%] right-0 left-0 m-auto capitalize absolute">
                  Frequently asked questions
                </Heading>
                <Img
                  src="images/img_group_57487_orange_200_8x176.svg"
                  alt="image_ten"
                  className="h-[8px] left-0 bottom-0 top-0 my-auto absolute"
                />
              </div>
              <div className="flex flex-col w-[58%] md:w-full gap-5">
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-5">
                      <Text size="2xl" as="p" className="!text-blue-200 !font-medium">
                        What is Woliba?
                      </Text>
                      <Img src="images/img_group_57489.svg" alt="image_eleven" className="h-[60px] w-[60px]" />
                    </div>
                    <Text as="p" className="!text-light_blue-900_99 !leading-6">
                      Woliba is an innovative benefit tool designed to enhance workplace well-being and engagement,
                      integrating wellness programs, employee recognition, and actionable analytics. It serves as a
                      comprehensive tool for businesses, empowering them with AI-driven insights and resources to boost
                      productivity, morale, and overall employee satisfaction.
                    </Text>
                  </div>
                </div>
                <Img src="images/img_group_57488.svg" alt="image_twelve" className="h-px" />
                <div className="h-[42px] relative">
                  <Text
                    size="2xl"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-light_blue-900 absolute"
                  >
                    How much does Woliba cost?
                  </Text>
                  <Button shape="circle" className="w-[42px] mr-[9px] right-[1%] bottom-0 top-0 my-auto absolute">
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <Img src="images/img_group_57488.svg" alt="image_thirteen" className="h-px" />
                <div className="h-[42px] relative">
                  <Text
                    size="2xl"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-light_blue-900 absolute"
                  >
                    Can I try Woliba for free?
                  </Text>
                  <Button shape="circle" className="w-[42px] mr-[9px] right-[1%] bottom-0 top-0 my-auto absolute">
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <Img src="images/img_group_57488.svg" alt="image_fourteen" className="h-px" />
                <div className="h-[42px] relative">
                  <Text
                    size="2xl"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-light_blue-900 absolute"
                  >
                    Is there a company size requirement?
                  </Text>
                  <Button shape="circle" className="w-[42px] mr-[9px] right-[1%] bottom-0 top-0 my-auto absolute">
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <Img src="images/img_group_57488.svg" alt="image_fifteen" className="h-px" />
                <div className="h-[42px] relative">
                  <Text
                    size="2xl"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-light_blue-900 absolute"
                  >
                    Can I customize Woliba to my company?
                  </Text>
                  <Button shape="circle" className="w-[42px] mr-[9px] right-[1%] bottom-0 top-0 my-auto absolute">
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector_blue_200_1x203.png"
            alt="vector_five"
            className="w-[14%] mt-[-110px] z-[2] object-cover"
          />
          <div className="self-stretch mt-[1370px]">
            <div className="h-[651px] relative">
              <Img
                src="images/img_ellipse_414_1.png"
                alt="image_sixteen"
                className="justify-center h-[651px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 rotate-[-7deg] object-cover absolute"
              />
              <div className="flex flex-col w-full top-0 right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_image_40.png"
                  alt="imageforty_one"
                  className="w-[9%] ml-[113px] md:ml-0 z-[1] object-cover"
                />
                <div className="h-[548px] mt-[-99px] relative">
                  <Img
                    src="images/img_ellipse_412_1.png"
                    alt="image_seventeen"
                    className="justify-center h-[548px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 rotate-[-7deg] object-cover absolute"
                  />
                  <Img
                    src="images/img_vector_blue_200.svg"
                    alt="vector_seven"
                    className="h-[20px] w-[19px] left-[11%] top-[15%] m-auto absolute"
                  />
                  <Img
                    src="images/img_vector_blue_200.svg"
                    alt="vector_nine"
                    className="h-[20px] w-[19px] bottom-[21%] left-[20%] m-auto absolute"
                  />
                  <div className="justify-center h-[464px] w-[90%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="justify-center h-[464px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 rotate-[-7deg] border-orange-200_87 border border-dashed absolute rounded-[647px]" />
                    <div className="flex md:flex-col items-start w-[74%] gap-2.5 left-[13%] top-[13%] m-auto absolute">
                      <Img
                        src="images/img_image_43.png"
                        alt="imagefortythree"
                        className="w-[13%] md:w-full md:h-auto mt-[191px] object-cover"
                      />
                      <div className="flex flex-col items-center mb-10 md:p-5 flex-1">
                        <Img
                          src="images/img_vector_blue_200.svg"
                          alt="vector_eleven"
                          className="self-start h-[20px] w-[19px]"
                        />
                        <Text size="7xl" as="p" className="mt-[43px] !text-light_blue-900 uppercase text-center">
                          <span className="text-light_blue-900 font-bold">foster better </span>
                          <span className="text-blue-200 font-bold">
                            <>
                              Team
                              <br />
                            </>
                          </span>
                          <span className="text-blue-200 font-bold">Collaboration & Productivity</span>
                        </Text>
                        <Text size="4xl" as="p" className="mt-4 !text-light_blue-900 capitalize text-center">
                          with Woliba Challenges
                        </Text>
                        <div className="flex justify-center w-[47%] md:w-full mt-8 gap-4">
                          <Button
                            color="light_green_50"
                            size="3xl"
                            className="w-full uppercase font-medium border-blue-200 border-2 border-solid rounded-[25px]"
                          >
                            Product Tour
                          </Button>
                          <Button size="3xl" className="w-full uppercase font-medium rounded-[25px]">
                            talk to sales
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-[8%] right-[4%] top-[22%] m-auto absolute">
                      <Img
                        src="images/img_image_41.png"
                        alt="imagefortyone"
                        className="self-stretch h-[110px] w-full md:h-auto z-[1] object-cover"
                      />
                      <Img
                        src="images/img_vector_blue_200.svg"
                        alt="vector_thirteen"
                        className="h-[20px] w-[19px] mt-[-6px]"
                      />
                    </div>
                    <div className="flex flex-col items-center w-[9%] bottom-[6%] right-[11%] m-auto absolute">
                      <Img
                        src="images/img_image_42.png"
                        alt="imagefortytwo"
                        className="self-stretch h-[133px] w-full md:h-auto z-[1] object-cover"
                      />
                      <Img
                        src="images/img_vector_blue_200.svg"
                        alt="vector_fifteen"
                        className="h-[20px] w-[19px] mt-[-17px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_image_39.png"
                alt="imagethirtynine"
                className="h-[126px] w-[12%] left-[43%] top-[6%] m-auto object-cover absolute"
              />
            </div>
          </div>
          <div className="self-stretch pb-10 sm:pb-5 z-[1] bg-light_blue-900">
            <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
              <div className="h-[2px] opacity-0.3 bg-orange-200_75" />
              <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1200px]">
                <div className="flex flex-col items-end w-[65%] md:w-full gap-20 md:gap-[60px] sm:gap-10">
                  <div className="self-stretch mr-2.5 md:mr-0">
                    <div className="flex flex-col gap-8">
                      <div className="flex justify-between w-[90%] md:w-full gap-5 sm:flex-wrap">
                        <Text size="2xl" as="p" className="!font-medium">
                          Company
                        </Text>
                        <Text size="2xl" as="p" className="!font-medium">
                          Products
                        </Text>
                        <Text size="2xl" as="p" className="!font-medium">
                          Resources
                        </Text>
                        <a href="#">
                          <Text size="2xl" as="p" className="!font-medium">
                            Support
                          </Text>
                        </a>
                      </div>
                      <div className="flex sm:flex-col justify-between items-start gap-5">
                        <div className="flex md:flex-row w-[39%] sm:w-full gap-[119px]">
                          <div className="flex flex-col items-start gap-2.5">
                            <Text as="p">Home</Text>
                            <Text as="p">About Us</Text>
                            <Text as="p">Why Us</Text>
                            <Text as="p">Pricing</Text>
                            <Text as="p">Demo</Text>
                            <a href="#">
                              <Text as="p">Sign In</Text>
                            </a>
                          </div>
                          <div className="flex flex-col items-start gap-2.5">
                            <Text as="p">Recognition</Text>
                            <Text as="p">Challenges</Text>
                            <Text as="p">Wellness</Text>
                            <Text as="p">Surveys</Text>
                            <Text as="p">Events</Text>
                            <Text as="p">Rewards</Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-2.5">
                          <Text as="p">Blogs</Text>
                          <Text as="p">Guides</Text>
                          <Text as="p">Newsletters</Text>
                          <Text as="p" className="h-[28px]">
                            KTs
                          </Text>
                        </div>
                        <div className="flex flex-col items-start gap-2.5">
                          <a href="#">
                            <Text as="p">Contact Us</Text>
                          </a>
                          <a href="#">
                            <Text as="p">FAQs</Text>
                          </a>
                          <a href="#">
                            <Text as="p">Careers</Text>
                          </a>
                          <a href="#">
                            <Text as="p">Terms & Conditions</Text>
                          </a>
                          <a href="#">
                            <Text as="p">Privacy Policy</Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text size="md" as="p" className="text-center">
                    © 2020 Training Amigo Inc. All Rights Reserved
                  </Text>
                </div>
                <div className="flex flex-col items-end w-[25%] md:w-full">
                  <Img
                    src="images/img_frame_57382.svg"
                    alt="image_eighteen"
                    className="self-stretch h-[176px] md:h-auto"
                  />
                  <a href="#" className="mt-[54px]">
                    <Text as="p" className="text-right !font-medium">
                      Contact Us
                    </Text>
                  </a>
                  <Text size="md" as="p" className="mt-1 text-right !font-medium">
                    Sales@woliba.io
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
