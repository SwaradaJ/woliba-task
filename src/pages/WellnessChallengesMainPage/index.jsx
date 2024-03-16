import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function WellnessChallengesMainPagePage() {
  return (
    <>
      <Helmet>
        <title>Swarada's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pt-[47px] md:pt-5 bg-light_green-50">
        <div className="flex flex-col items-end overflow-auto">
          <div className="self-stretch h-[1513px] relative">
            <Img
              src="images/img_vector_blue_200_413x240.png"
              alt="vector_one"
              className="h-[413px] w-[17%] left-0 top-0 m-auto object-cover absolute"
            />
            <Img
              src="images/img_vector_blue_200_459x257.png"
              alt="vector_three"
              className="h-[459px] w-[18%] bottom-[30%] right-0 m-auto object-cover absolute"
            />
            <Img
              src="images/img_vector_blue_200_384x209.png"
              alt="vector_five"
              className="h-[384px] w-[15%] bottom-0 left-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-center w-[58%] gap-[29px] top-[7%] right-0 left-0 m-auto absolute">
              <Heading as="h1" className="capitalize text-center !font-bold">
                <span className="text-light_blue-900">Cultivate a Workforce That is </span>
                <span className="text-blue-200">Productive</span>
              </Heading>
              <Text as="p" className="!text-light_blue-900_99 text-center">
                Boost Your Team&#39;s Spirit and and Build Healthier Habits with Woliba&#39;s Activity & Wellness
                Challenges.
              </Text>
              <Img src="images/img_group_57487_orange_200.svg" alt="image" className="h-[8px]" />
            </div>
            <div className="h-[522px] w-[92%] right-0 top-[20%] m-auto absolute">
              <div className="h-[510px] w-[63%] right-0 bottom-0 top-0 my-auto absolute">
                <div className="flex md:flex-col items-center w-[86%] left-0 top-0 m-auto absolute">
                  <Img
                    src="images/img_frame_57466.svg"
                    alt="image_one"
                    className="self-end h-[262px] md:w-full md:h-auto z-[1]"
                  />
                  <div className="ml-[-216px] md:p-5 md:ml-0 flex-1">
                    <div className="flex flex-col gap-3">
                      <div className="h-[308px] relative">
                        <div className="flex flex-col w-[46%] gap-[22px] right-0 top-[2%] m-auto absolute">
                          <Img src="images/img_group.svg" alt="image_two" className="h-[80px] ml-[73px] md:ml-0" />
                          <div className="p-[11px] border-light_blue-900_4c border border-solid bg-white-A700 rounded-[12px]">
                            <div className="flex justify-center items-center gap-3">
                              <Button color="light_blue_900_19" size="4xl" shape="circle" className="w-[50px]">
                                <Img src="images/img_group_1433.svg" />
                              </Button>
                              <div className="flex flex-col self-end gap-[13px] flex-1">
                                <div className="flex justify-center items-center gap-[18px]">
                                  <Text size="xs" as="p" className="self-end !text-light_blue-900">
                                    Completed Challenges
                                  </Text>
                                  <Img
                                    src="images/img_mask_group.svg"
                                    alt="image_three"
                                    className="h-[20px] w-[20px]"
                                  />
                                </div>
                                <div className="h-[12px] bg-light_blue-900_19 rounded-md" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-[49%] left-[3%] top-0 m-auto absolute">
                          <div className="flex flex-col z-[1]">
                            <div className="flex items-center z-[1]">
                              <Img src="images/img_vector.svg" alt="vector_seven" className="self-end h-[39px]" />
                              <div className="ml-[-22px] p-3 border-light_blue-900_4c border border-solid bg-white-A700 flex-1 rounded-[12px]">
                                <div className="flex flex-col items-center gap-[11px]">
                                  <Text size="md" as="p" className="self-start !text-light_blue-900 !font-medium">
                                    Wellness Challenges
                                  </Text>
                                  <div className="flex self-stretch justify-center gap-3">
                                    <Img
                                      src="images/img_image_5.png"
                                      alt="imagefive_one"
                                      className="w-[80px] object-cover rounded-md"
                                    />
                                    <div className="flex flex-col gap-2 flex-1">
                                      <Text size="s" as="p" className="!text-light_blue-900">
                                        Finding Solace in Silence The Impor...
                                      </Text>
                                      <div className="h-[12px] bg-light_blue-900_19 rounded-md" />
                                      <div className="h-[12px] w-[74%] bg-light_blue-900_19 rounded-md" />
                                    </div>
                                  </div>
                                  <Button
                                    color="light_blue_900"
                                    size="md"
                                    className="sm:px-5 font-medium min-w-[155px] rounded-[18px]"
                                  >
                                    Join Challenge
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_vector_red_200.svg"
                              alt="vector_nine"
                              className="h-[27px] mt-[-16px] ml-[11px] md:ml-0"
                            />
                          </div>
                          <Img
                            src="images/img_vector_red_200_43x32.svg"
                            alt="vector_eleven"
                            className="h-[43px] mt-[-9px] ml-3 md:ml-0"
                          />
                        </div>
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_thirteen"
                          className="h-[40px] bottom-[24%] left-0 m-auto absolute"
                        />
                        <div className="flex justify-center w-[71%] bottom-0 left-[19%] p-3 m-auto border-light_blue-900_4c border border-solid bg-white-A700 absolute rounded-[12px]">
                          <div className="flex flex-col items-end w-full gap-[7px]">
                            <div className="flex self-stretch justify-end items-center gap-3">
                              <Img src="images/img_group_1434.svg" alt="image_four" className="h-[50px] w-[50px]" />
                              <Text size="xs" as="p" className="self-start w-[82%] !text-light_blue-900 !leading-4">
                                Task Tip :Drink water! In order to detox and reset, it’s important to hydrate. Drink at
                                least half your body weight
                              </Text>
                            </div>
                            <div className="h-[12px] w-[79%] bg-light_blue-900_19 rounded-md" />
                            <div className="h-[12px] w-[77%] mr-[25px] md:mr-0 bg-light_blue-900_19 rounded-md" />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[74%] md:w-full ml-[3px] md:ml-0">
                        <div className="flex sm:flex-col items-center w-full">
                          <div className="p-[11px] z-[1] border-light_blue-900_4c border border-solid bg-white-A700 flex-1 rounded-[12px]">
                            <div className="flex flex-col mb-0.5 gap-[15px]">
                              <div className="flex justify-between items-start gap-5">
                                <Text size="md" as="p" className="!text-light_blue-900 !font-medium">
                                  Task Progress
                                </Text>
                                <div className="flex justify-center w-[36%] mt-0.5 gap-[3px]">
                                  <div className="h-[12px] bg-light_blue-900_19 flex-1 rounded-md" />
                                  <div className="h-[12px] w-[26%] bg-light_blue-900_19 rounded-md" />
                                </div>
                              </div>
                              <div className="flex gap-[19px]">
                                <div className="w-full bg-red-200 rounded-[50%]">
                                  <div className="flex flex-col items-center p-[7px] bg-light_blue-900_4c rounded-[50%]">
                                    <Text size="xs" as="p" className="text-center">
                                      1
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  2
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  3
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  4
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  5
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  6
                                </Text>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[30px] w-[30px] !text-light_blue-900 text-center bg-light_blue-900_4c rounded-[50%]"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="flex items-center w-[90%] md:w-full">
                                <div className="h-[20px] w-[20px] bg-green-400 flex-1 rounded-[50%]" />
                                <Text size="xs" as="p" className="self-end !text-light_blue-900">
                                  Completed
                                </Text>
                                <div className="h-[20px] w-[20px] ml-4 bg-red-200 flex-1 rounded-[50%]" />
                                <Text size="xs" as="p" className="self-end !text-light_blue-900">
                                  Not Completed
                                </Text>
                                <div className="h-[20px] w-[20px] ml-4 opacity-0.3 bg-light_blue-900_51 flex-1 rounded-[50%]" />
                                <Text size="xs" as="p" className="ml-[5px] !text-light_blue-900">
                                  Locked
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group.svg"
                            alt="image_five"
                            className="h-[64px] sm:w-full sm:h-auto ml-[-15px] sm:ml-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_frame_57467.png"
                  alt="image_six"
                  className="h-[442px] w-[56%] bottom-0 right-0 m-auto object-cover absolute"
                />
                <Img
                  src="images/img_vector.svg"
                  alt="vector_fifteen"
                  className="h-[41px] left-[19%] top-[29%] m-auto absolute"
                />
                <Img
                  src="images/img_vector_red_200_27x42.svg"
                  alt="vector"
                  className="h-[27px] left-[18%] top-[38%] m-auto absolute"
                />
                <Img
                  src="images/img_vector_red_200_43x32.svg"
                  alt="vector_nineteen"
                  className="h-[37px] left-[17%] top-[32%] m-auto absolute"
                />
              </div>
              <div className="flex flex-col w-[38%] gap-5 left-0 top-0 m-auto absolute">
                <div className="flex sm:flex-col items-center w-full gap-3 md:p-5 border-green-400 border border-solid max-w-[446px] rounded-[30px]">
                  <Img src="images/img_peer_recognition.svg" alt="peer_one" className="h-[60px] w-[60px]" />
                  <Text size="3xl" as="p" className="self-end !text-green-400 capitalize text-center">
                    Holistic & Inclusive challenges
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col gap-7">
                    <Text as="p" className="!text-light_blue-900_99 !leading-6">
                      Offer an inclusive wellness benefit that supports all pillars of wellbeing and motivates people to
                      bring their best selves to work.
                    </Text>
                    <div className="h-[310px] relative">
                      <Img
                        src="images/img_group_57488.svg"
                        alt="image_seven"
                        className="h-px bottom-[22%] right-0 left-0 m-auto absolute"
                      />
                      <Accordion
                        preExpanded={[0]}
                        className="flex-col justify-center w-full gap-5 left-0 bottom-0 right-0 top-0 m-auto absolute"
                      >
                        {[...Array(3)].map((_, i) => (
                          <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {(props) => (
                                    <>
                                      <div className="flex flex-col gap-[27px] flex-1">
                                        <div className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[491px]">
                                          <Text size="2xl" as="p" className="!text-light_blue-900">
                                            Habit Formation
                                          </Text>
                                          <Button shape="circle" className="w-[42px]">
                                            <Img src="images/img_arrow_down.svg" />
                                          </Button>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[548px] w-[83%] bottom-[7%] right-0 left-0 m-auto absolute">
              <Img
                src="images/img_frame_57469.svg"
                alt="image_ten"
                className="h-[383px] bottom-0 left-[27%] m-auto absolute"
              />
              <Img
                src="images/img_frame_57471.svg"
                alt="image_eleven"
                className="h-[372px] left-[17%] top-0 m-auto absolute"
              />
              <div className="flex flex-col w-[42%] gap-5 bottom-[7%] right-0 m-auto absolute">
                <div className="flex sm:flex-col items-center w-full gap-3 md:p-5 border-green-400 border border-solid max-w-[422px] rounded-[30px]">
                  <Img src="images/img_peer_recognition_green_400.svg" alt="peer_three" className="h-[60px] w-[60px]" />
                  <Text size="3xl" as="p" className="self-end !text-green-400 capitalize text-center">
                    Dynamic activity challenges
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col gap-7">
                    <Text as="p" className="!text-light_blue-900_99 !leading-6">
                      Every Step Counts: Choose from a diverse library of activity challenges to launch within minutes.
                    </Text>
                    <div className="h-[286px] relative">
                      <Img
                        src="images/img_group_57488.svg"
                        alt="image_twelve"
                        className="h-px bottom-[24%] right-0 left-0 m-auto absolute"
                      />
                      <Accordion
                        preExpanded={[0]}
                        className="flex-col justify-center w-full gap-5 left-0 bottom-0 right-0 top-0 m-auto absolute"
                      >
                        {[...Array(4)].map((_, i) => (
                          <AccordionItem uuid={i} key={`expandableliste${i}`}>
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {(props) => (
                                    <>
                                      <div className="flex flex-col gap-[27px] flex-1">
                                        <div className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[491px]">
                                          <Text size="2xl" as="p" className="self-end !text-light_blue-900">
                                            Enhancing Performance
                                          </Text>
                                          <Button shape="circle" className="w-[42px]">
                                            <Img src="images/img_arrow_down.svg" />
                                          </Button>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[431px] w-[48%] bottom-[7%] left-0 m-auto absolute">
                <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-col self-stretch items-end z-[1]">
                    <div className="self-stretch h-[411px] z-[1] relative">
                      <div className="flex items-start w-[43%] left-[2%] top-[3%] m-auto absolute">
                        <div className="flex items-start z-[1] flex-1">
                          <Img src="images/img_vector_orange_200.svg" alt="vector" className="h-[322px] z-[1]" />
                          <Img
                            src="images/img_vector_red_200_27x42.svg"
                            alt="vector"
                            className="h-[34px] mt-[18px] ml-[-33px]"
                          />
                        </div>
                        <Img src="images/img_vector.svg" alt="vector" className="h-[42px] mt-[31px] ml-[-37px]" />
                      </div>
                      <div className="flex flex-col w-[91%] left-0 top-0 m-auto absolute">
                        <div className="flex sm:flex-col items-center">
                          <div className="flex items-start sm:p-5 flex-1">
                            <div className="flex items-start z-[1] flex-1">
                              <div className="flex items-start z-[1] flex-1">
                                <div className="flex items-start z-[1] flex-1">
                                  <div className="flex flex-col justify-center p-3 z-[1] border-light_blue-900_4c border border-solid bg-white-A700 flex-1 rounded-[12px]">
                                    <div className="flex flex-col">
                                      <Text size="md" as="p" className="!text-light_blue-900 !font-medium">
                                        Fitness Challenge Invitation{" "}
                                      </Text>
                                      <Img
                                        src="images/img_rectangle_2154.png"
                                        alt="image_fifteen"
                                        className="h-[125px] mt-[7px] object-cover rounded-md"
                                      />
                                      <div className="h-[12px] mt-3 bg-light_blue-900_19 rounded-md" />
                                      <div className="h-[12px] w-[64%] mt-2 bg-light_blue-900_19 rounded-md" />
                                      <div className="flex mt-[18px] gap-2.5">
                                        <Button
                                          color="light_blue_900"
                                          size="md"
                                          className="w-full sm:px-5 font-medium rounded-[18px]"
                                        >
                                          Accept
                                        </Button>
                                        <Button
                                          color="light_blue_900_99"
                                          size="md"
                                          variant="outline"
                                          className="w-full sm:px-5 font-medium rounded-[18px]"
                                        >
                                          Reject
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_vector_red_200_43x32.svg"
                                    alt="vector"
                                    className="h-[44px] mt-[57px] ml-[-14px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector.svg"
                                  alt="vector"
                                  className="h-[41px] mt-[5px] ml-[-28px]"
                                />
                              </div>
                              <Img src="images/img_vector.svg" alt="vector" className="h-[41px] mt-[19px] ml-[-15px]" />
                            </div>
                            <Img
                              src="images/img_vector_red_200.svg"
                              alt="vector"
                              className="h-[35px] mt-[49px] ml-[-43px]"
                            />
                          </div>
                          <div className="flex self-end w-[45%] sm:w-full p-[11px] sm:p-5 border-light_blue-900_4c border border-solid bg-white-A700 rounded-[12px]">
                            <div className="flex flex-col w-full mt-0.5 gap-[11px]">
                              <Text size="md" as="p" className="!text-light_blue-900 !font-medium">
                                Group Challenges
                              </Text>
                              <div className="flex items-start gap-2">
                                <Img
                                  src="images/img_image_5_60x60.png"
                                  alt="imagefive_three"
                                  className="w-[60px] object-cover rounded-md"
                                />
                                <div className="flex flex-col mt-2 gap-2 flex-1">
                                  <div className="h-[12px] bg-light_blue-900_19 rounded-md" />
                                  <div className="h-[12px] w-[82%] bg-light_blue-900_19 rounded-md" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_group.svg"
                          alt="image_sixteen"
                          className="h-[80px] mt-[-19px] ml-[107px] md:ml-0"
                        />
                      </div>
                      <div className="flex sm:flex-col justify-end items-center w-[61%] bottom-0 right-[3%] m-auto absolute">
                        <div className="flex justify-end items-center sm:p-5 flex-1">
                          <div className="flex justify-end items-center flex-1">
                            <div className="flex justify-end items-center flex-1">
                              <div className="p-[11px] border-light_blue-900_4c border border-solid bg-white-A700 flex-1 rounded-[12px]">
                                <div className="flex flex-col mt-0.5 gap-[11px]">
                                  <Text size="md" as="p" className="!text-light_blue-900 !font-medium">
                                    Survivor Challenges
                                  </Text>
                                  <div className="flex items-start gap-2">
                                    <Img
                                      src="images/img_image_5_1.png"
                                      alt="imagefive_five"
                                      className="w-[60px] object-cover rounded-md"
                                    />
                                    <div className="flex flex-col mt-2 gap-2 flex-1">
                                      <div className="h-[12px] bg-light_blue-900_19 rounded-md" />
                                      <div className="h-[12px] w-[82%] bg-light_blue-900_19 rounded-md" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_vector_red_200_43x32.svg"
                                alt="vector"
                                className="self-end h-[37px]"
                              />
                            </div>
                            <Img src="images/img_vector.svg" alt="vector" className="self-end h-[41px]" />
                          </div>
                          <Img src="images/img_vector.svg" alt="vector" className="self-end h-[39px]" />
                        </div>
                        <Img
                          src="images/img_vector_red_200.svg"
                          alt="vector_fortyone"
                          className="self-end h-[27px] sm:w-full sm:h-auto"
                        />
                      </div>
                      <Img
                        src="images/img_vector_red_200_43x32.svg"
                        alt="vector"
                        className="h-[41px] left-[39%] top-[1%] m-auto absolute"
                      />
                      <div className="flex w-[44%] right-0 top-[6%] p-[11px] m-auto border-light_blue-900_4c border border-solid bg-white-A700 absolute rounded-[12px]">
                        <div className="flex flex-col w-full mt-0.5 gap-[11px] max-w-[219px]">
                          <Text size="md" as="p" className="!text-light_blue-900 !font-medium">
                            Classic Challenges
                          </Text>
                          <div className="flex items-start gap-2">
                            <Img
                              src="images/img_image_5_2.png"
                              alt="imagefive_seven"
                              className="w-[60px] object-cover rounded-md"
                            />
                            <div className="flex flex-col mt-2 gap-2 flex-1">
                              <div className="h-[12px] bg-light_blue-900_19 rounded-md" />
                              <div className="h-[12px] w-[82%] bg-light_blue-900_19 rounded-md" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_red_200_43x32.svg"
                      alt="vector"
                      className="h-[43px] mt-[-28px] mr-[33px] md:mr-0"
                    />
                  </div>
                  <Img src="images/img_vector.svg" alt="vector" className="h-[40px] mt-[-35px] mr-[58px] md:mr-0" />
                </div>
                <Img
                  src="images/img_vector_red_200_27x42.svg"
                  alt="vector"
                  className="h-[27px] bottom-[4%] right-[12%] m-auto absolute"
                />
                <Img
                  src="images/img_frame_57470.svg"
                  alt="image_seventeen"
                  className="h-[217px] bottom-0 left-[15%] m-auto absolute"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[77px] md:p-5 bg-light_blue-900">
            <div className="flex flex-col w-[33%] md:w-full ml-[42px] gap-7 md:ml-0">
              <Heading as="h2" className="!text-white-A700 capitalize">
                how woliba is making a difference
              </Heading>
              <Text as="p" className="!leading-6">
                At Woliba, our challenges go beyond simply counting steps. We curate comprehensive and meaningful
                experiences to inspire real behavior change.
              </Text>
              <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image_eighteen" className="h-[8px]" />
            </div>
            <div className="flex flex-col w-[50%] md:w-full mr-[43px] gap-6 md:mr-0">
              <div className="flex flex-col gap-3">
                <div className="flex items-center w-[55%] md:w-full gap-3">
                  <Img src="images/img_group_57489_blue_200.svg" alt="image_nineteen" className="h-[60px] w-[60px]" />
                  <Text size="xl" as="p">
                    Personalized Fitness Goals
                  </Text>
                </div>
                <Text size="md" as="p">
                  Users are able to set tailored goals based on their individual activity levels, fostering a more
                  personalized and inclusive approach to fitness.
                </Text>
                <Img src="images/img_group_57487_blue_200.png" alt="image_twenty" className="w-[69%] object-cover" />
              </div>
              <div className="flex flex-col w-[74%] md:w-full gap-6">
                <div className="flex mr-[52px] md:p-5 md:mr-0 flex-1">
                  <div className="flex sm:flex-col items-center w-full gap-3">
                    <Img src="images/img_group_57489_blue_200_60x60.svg" alt="image" className="h-[60px] w-[60px]" />
                    <Text size="xl" as="p">
                      Engagement through Group Chat
                    </Text>
                  </div>
                </div>
                <div className="flex mr-[52px] md:p-5 md:mr-0 flex-1">
                  <div className="flex sm:flex-col items-center w-full gap-3">
                    <Img src="images/img_group_57489_60x60.svg" alt="image" className="h-[60px] w-[60px]" />
                    <Text size="xl" as="p">
                      Employee-Centric Customization
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center md:p-5 flex-1">
                  <div className="flex sm:flex-col justify-center items-center w-full gap-3">
                    <Img src="images/img_group_57489_1.svg" alt="image" className="h-[60px] w-[60px]" />
                    <Text size="xl" as="p">
                      Comprehensive Manual Activity Log-in
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector_blue_200_1x289.png"
            alt="vector_fiftyone"
            className="w-[20%] mt-[5px] object-cover"
          />
          <div className="self-stretch w-full mt-[710px] mx-auto md:p-5 max-w-[1319px]">
            <div className="flex flex-col gap-7">
              <div className="h-[422px] relative">
                <Heading
                  size="lg"
                  as="h2"
                  className="w-max left-0 bottom-0 top-0 my-auto !text-orange-200_67 capitalize opacity-0.15 absolute"
                >
                  USER
                </Heading>
                <div className="flex flex-col w-[25%] gap-3 bottom-0 left-[9%] m-auto absolute">
                  <div className="flex items-center w-[86%] md:w-full gap-3">
                    <Img src="images/img_group_57489_2.svg" alt="image_twentyone" className="h-[60px] w-[60px]" />
                    <Text size="xl" as="p" className="!text-light_blue-900">
                      Inspiring Initiatives{" "}
                    </Text>
                  </div>
                  <Text size="md" as="p" className="!text-light_blue-900_99">
                    Woliba encourages users to self-initiate challenges, reducing admin dependency, fostering individual
                    accountability, and accumulating points based on performance.
                  </Text>
                </div>
                <div className="flex md:flex-col justify-between items-start w-[58%] bottom-0 right-0 gap-5 m-auto absolute">
                  <div className="flex flex-col w-[44%] md:w-full gap-3">
                    <div className="flex items-center gap-3">
                      <Img src="images/img_group_57489_3.svg" alt="image_twentytwo" className="h-[60px] w-[60px]" />
                      <Text size="xl" as="p" className="!text-light_blue-900">
                        AI-Personalized Challenges
                      </Text>
                    </div>
                    <Text size="md" as="p" className="w-[89%] md:w-full !text-light_blue-900_99">
                      We harness the power of AI to suggest tailored challenges based on individual goals and interests,
                      fostering a more personalized and engaging wellness experience.
                    </Text>
                  </div>
                  <div className="flex flex-col w-[40%] md:w-full gap-3">
                    <div className="flex justify-center items-center gap-3">
                      <Img src="images/img_group_57489_4.svg" alt="image" className="h-[60px] w-[60px]" />
                      <Text size="xl" as="p" className="!text-light_blue-900">
                        Building Team Cohesion{" "}
                      </Text>
                    </div>
                    <Text size="md" as="p" className="!text-light_blue-900_99">
                      Strengthen team connections by uniting colleagues in pursuit of a shared wellness goal, fostering
                      a sense of camaraderie and mutual support.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[91%] gap-7 right-0 top-0 m-auto absolute">
                  <Heading as="h3" className="capitalize text-center">
                    Woliba: Embracing Total employee wellbeing
                  </Heading>
                  <Text as="p" className="!text-light_blue-900_99 text-center !leading-6">
                    Woliba&#39;s challenges drive workplace engagement, foster camaraderie, and promote team unity while
                    enhancing performance, preventing burnout, and saving costs through a proactive healthcare approach.
                  </Text>
                  <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image" className="h-[8px]" />
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="h-[274px] w-[35%] relative">
                  <Heading
                    size="lg"
                    as="h4"
                    className="left-0 top-0 m-auto !text-orange-200_67 capitalize opacity-0.15 absolute"
                  >
                    ADMIN
                  </Heading>
                  <div className="flex flex-col w-[74%] gap-3 bottom-0 right-0 m-auto absolute">
                    <div className="flex items-center gap-3">
                      <Img src="images/img_group_57489_5.svg" alt="image" className="h-[60px] w-[60px]" />
                      <Text size="xl" as="p" className="!text-light_blue-900">
                        Proactive Healthcare Focus
                      </Text>
                    </div>
                    <Text size="md" as="p" className="w-[88%] md:w-full !text-light_blue-900_99">
                      Prioritizes a proactive healthcare approach for cost savings and overall well-being benefits,
                      preventing health issues from escalating and ensuring a healthier workforce.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col self-end w-[58%] md:w-full gap-[92px]">
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3">
                      <Img src="images/img_group_57489_6.svg" alt="image" className="h-[60px] w-[60px]" />
                      <Text size="xl" as="p" className="!text-light_blue-900">
                        Efficiency through Automation
                      </Text>
                    </div>
                    <Text size="md" as="p" className="w-[82%] md:w-full !text-light_blue-900_99">
                      Boosts program management efficiency through the integration of automation, real-time analytics,
                      and data-driven dashboards, leading to significant time savings.
                    </Text>
                  </div>
                  <div className="flex flex-col w-[40%] md:w-full gap-3">
                    <div className="flex justify-center items-center gap-3">
                      <Img src="images/img_group_57489_7.svg" alt="image" className="h-[60px] w-[60px]" />
                      <Text size="xl" as="p" className="!text-light_blue-900">
                        Diverse Monthly Themes
                      </Text>
                    </div>
                    <Text size="md" as="p" className="w-[97%] md:w-full !text-light_blue-900_99">
                      Recommends challenges that align with monthly themes, emphasizing inclusivity and diversity, and
                      promoting a well-rounded and culturally aware wellness program.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-40 bg-light_blue-900">
            <div className="flex md:flex-col justify-end items-start gap-11">
              <Img
                src="images/img_group_orange_200_77x74.png"
                alt="image_twentysix"
                className="w-[5%] md:w-full md:h-auto object-cover"
              />
              <div className="md:p-5 flex-1">
                <div className="flex flex-col items-end">
                  <div className="flex md:flex-col self-stretch justify-end items-center">
                    <div className="flex-1">
                      <Text size="6xl" as="p">
                        Are you ready tocreate a culture of wellbeing?
                      </Text>
                    </div>
                    <div className="h-[199px] w-[49%] ml-[-140px] md:ml-0 relative">
                      <Img
                        src="images/img_frame_57357.svg"
                        alt="image"
                        className="justify-center h-[199px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Button
                        color="green_400"
                        size="5xl"
                        className="mr-[120px] right-[17%] bottom-0 top-0 my-auto sm:px-5 uppercase font-medium min-w-[292px] absolute rounded-[31px]"
                      >
                        Let&#39;s Get Started
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_group_orange_200.svg"
                    alt="image"
                    className="h-[59px] mt-[-59px] mr-[515px] md:mr-0 z-[1]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-40 gap-5 mx-auto md:p-5 z-[4] max-w-[1200px]">
            <Img src="images/img_group_57551.png" alt="image" className="w-[59%] md:w-full md:h-auto object-cover" />
            <div className="flex flex-col w-[33%] md:w-full gap-7">
              <Heading as="h2" className="capitalize">
                Easily Connect Your Wearable Device
              </Heading>
              <Text as="p" className="!text-light_blue-900_99 !leading-6">
                We know one device isn&#39;t made for everyone. We integrate with theleading providers, covering 90% of
                the consumer wearable device market.
              </Text>
              <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image_thirty" className="h-[8px]" />
            </div>
          </div>
          <Img src="images/img_vector_blue_200_1x256.png" alt="vector" className="w-[18%] mt-[-252px] object-cover" />
          <div className="flex w-full mt-[2800px] px-[54px] mx-auto md:p-5 md:px-5 z-[3] max-w-[2030px]">
            <div className="flex flex-col w-[66%] md:w-full">
              <Heading as="h2" className="capitalize text-center">
                Real Time Insights on wellness challenges participation
              </Heading>
              <Text as="p" className="mt-7 ml-[206px] md:ml-0 !text-light_blue-900_99 text-center">
                Launch your challenge and we’ll deliver robust people analytics for maximum ROI.
              </Text>
              <Img
                src="images/img_group_57487_orange_200_8x176.svg"
                alt="image_thirtyone"
                className="h-[8px] mt-7 ml-[457px] md:ml-0"
              />
              <div className="flex md:flex-col mt-20 ml-[95px] gap-20 md:ml-0">
                <div className="flex flex-col w-[77%] md:w-full gap-5">
                  <div className="flex justify-center items-center w-[31%] md:w-full gap-3 p-1">
                    <Img src="images/img_group_57489_8.svg" alt="peer" className="h-[60px] w-[60px]" />
                    <Heading size="s" as="h3" className="capitalize">
                      Peer Recognition
                    </Heading>
                  </div>
                  <div>
                    <div className="flex justify-center p-5 rounded-tl-[15px] rounded-tr-[15px] bg-light_green-50">
                      <Text size="md" as="p" className="mb-[484px] !text-light_blue-900_99">
                        Improve workplace wellbeing with real-time data and analytics.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[77%] md:w-full gap-5">
                  <div className="flex items-center w-[34%] md:w-full gap-3 p-1">
                    <Img src="images/img_group_57489_8.svg" alt="image" className="h-[60px] w-[60px]" />
                    <Heading size="s" as="h4" className="capitalize">
                      Company Analytics
                    </Heading>
                  </div>
                  <div>
                    <div className="flex justify-center p-5 rounded-tl-[15px] rounded-tr-[15px] bg-light_blue-900">
                      <Text size="md" as="p" className="mb-[484px] !text-light_green-50">
                        Improve workplace wellbeing with real-time data and analytics.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector_blue_200_1x233.png"
            alt="vector"
            className="self-stretch md:h-auto mt-[-94px] mr-[1206px] md:mr-0 object-cover"
          />
          <div className="w-full mt-[3814px] mx-auto md:p-5 z-[1] max-w-[1200px]">
            <div className="flex md:flex-col justify-center items-center gap-7">
              <div className="flex flex-col w-[39%] md:w-full gap-[34px]">
                <Heading as="h2" className="capitalize">
                  <span className="text-light_blue-900">Our </span>
                  <span className="text-blue-200">HR Stack&#39;s strength is fortified by our loyal customers</span>
                </Heading>
                <div className="flex w-[40%] md:w-full gap-3">
                  <div className="w-[5%] pb-[210px] md:pb-5 bg-light_blue-900_19 rounded-[50%]">
                    <div className="h-[74px] bg-orange-200 rounded-[50%]" />
                  </div>
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <Button size="2xl" shape="round" className="font-medium min-w-[118px]">
                      Healthcare
                    </Button>
                    <Button
                      color="light_blue_900_99"
                      size="2xl"
                      variant="outline"
                      shape="round"
                      className="font-medium min-w-[121px]"
                    >
                      Technology
                    </Button>
                    <Button
                      color="light_blue_900_99"
                      size="2xl"
                      variant="outline"
                      shape="round"
                      className="w-full font-medium"
                    >
                      Civil Engineering
                    </Button>
                    <Button
                      color="light_blue_900_99"
                      size="2xl"
                      variant="outline"
                      shape="round"
                      className="font-medium min-w-[96px]"
                    >
                      Banking
                    </Button>
                    <Button
                      color="light_blue_900_99"
                      size="2xl"
                      variant="outline"
                      shape="round"
                      className="font-medium min-w-[110px]"
                    >
                      Insurance
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-20 md:gap-[60px] sm:gap-10 flex-1">
                <div className="self-stretch h-[279px] relative">
                  <Img src="images/img_.svg" alt="image_thirtytwo" className="h-[83px] left-0 top-0 m-auto absolute" />
                  <div className="flex flex-col w-[91%] gap-8 bottom-0 right-0 m-auto absolute">
                    <Text size="5xl" as="p" className="!text-light_blue-900">
                      &quot;This has been a great tool for our company to socially connect through &quot;shoutouts&quot;
                      My wife has recommended that her school look into this as part of their initiatives too.&quot;
                    </Text>
                    <div className="flex sm:flex-col justify-between items-center w-[73%] md:w-full gap-5">
                      <div className="flex flex-col items-start gap-2">
                        <Text size="3xl" as="p" className="!text-light_blue-900">
                          Jason Chavarria
                        </Text>
                        <Text size="xl" as="p" className="!text-light_blue-900_99 !font-normal">
                          Senior Accountant Executive
                        </Text>
                      </div>
                      <Img src="images/img_group_57487.svg" alt="image" className="h-[63px] sm:w-full sm:h-auto" />
                      <Img
                        src="images/img_layer_x0020_2.svg"
                        alt="layerx0020two"
                        className="h-[40px] sm:w-full sm:h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-end items-center w-[91%] md:w-full gap-[19px]">
                  <div className="flex flex-col items-center w-[19%] md:w-full gap-2.5">
                    <Img src="images/img_image_53.png" alt="imagefiftythree" className="object-cover" />
                    <div className="self-stretch">
                      <div className="flex flex-col">
                        <Img
                          src="images/img_image_51_44x121.png"
                          alt="imagefiftyone"
                          className="h-[44px] object-cover"
                        />
                        <Text
                          size="md"
                          as="p"
                          className="mt-[-19px] ml-[3px] md:ml-0 !text-light_blue-900 !font-medium"
                        >
                          Rated 4.6
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-end items-center gap-[19px] flex-1">
                    <div className="flex justify-end w-[24%] sm:w-full">
                      <div className="flex flex-col items-center w-full">
                        <Img
                          src="images/img_subtract.svg"
                          alt="subtract_one"
                          className="self-stretch h-[57px] md:h-auto"
                        />
                        <Img
                          src="images/img_ellipse_411.png"
                          alt="circleimage"
                          className="h-[110px] w-[110px] mt-[-52px] rounded-[50%]"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse_411_110x110.png"
                      alt="circleimage_one"
                      className="h-[110px] w-[110px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_ellipse_411_1.png"
                      alt="circleimage_two"
                      className="h-[110px] w-[110px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_ellipse_411_2.png"
                      alt="circleimage"
                      className="h-[110px] w-[110px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_vector_blue_200_1x289.png" alt="vector" className="w-[20%] mt-[-207px] object-cover" />
          <div className="flex flex-col self-stretch mt-[4456px] gap-[60px] sm:gap-[30px] bg-gradient">
            <div className="flex flex-col items-center w-full gap-7 mx-auto md:p-5 max-w-[1200px]">
              <Heading as="h2" className="capitalize text-center">
                More Reasons to choose Woliba
              </Heading>
              <Text as="p" className="!text-light_blue-900_99 text-center !leading-6">
                HR teams leverage Woliba Employee Recognition alongside Challenges, Resources, surveys, events, and
                reward management to comprehensively engage employees and foster a world-class organizational culture.
              </Text>
              <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image" className="h-[8px]" />
            </div>
            <div className="w-full mx-auto md:p-5 max-w-[928px]">
              <div className="flex flex-col items-center">
                <Text size="3xl" as="p" className="!text-light_blue-900 text-center z-[1]">
                  Coaching & Events
                </Text>
                <div className="self-stretch h-[390px] relative">
                  <div className="flex justify-between items-start w-[62%] bottom-[10%] right-[12%] gap-5 m-auto absolute">
                    <Img src="images/img_layer_x0020_2.svg" alt="image" className="h-[80px] mt-[49px]" />
                    <Img src="images/img_group_57558.svg" alt="image_thirtysix" className="h-[60px] w-[60px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_group_57557.svg" alt="image" className="h-[60px] w-[60px] z-[1]" />
                    <div className="flex md:flex-col self-stretch justify-center items-center mt-[-30px]">
                      <div className="flex md:flex-col justify-center items-start flex-1">
                        <div className="flex md:flex-col justify-center items-center flex-1">
                          <Text size="3xl" as="p" className="self-end !text-light_blue-900 text-right z-[1]">
                            Surveys{" "}
                          </Text>
                          <div className="flex md:flex-col justify-center items-start ml-[-33px] md:ml-0 flex-1">
                            <Text size="3xl" as="p" className="mt-[43px] !text-light_blue-900 text-right z-[1]">
                              Recognition
                            </Text>
                            <div className="flex md:flex-col justify-center items-center ml-[-95px] md:ml-0 flex-1">
                              <Img
                                src="images/img_group_57556.svg"
                                alt="image"
                                className="self-end h-[60px] w-[60px] z-[1]"
                              />
                              <div className="h-[361px] md:w-full ml-[-54px] md:ml-0 flex-1 relative md:flex-none">
                                <Img
                                  src="images/img_group_57551_700x700.png"
                                  alt="image"
                                  className="h-[700px] w-full md:w-[700px] md:h-auto bottom-0 right-0 left-0 m-auto object-cover absolute"
                                />
                                <div className="flex justify-between w-[71%] top-[12%] right-0 left-0 gap-5 m-auto absolute">
                                  <Img
                                    src="images/img_group_57555.svg"
                                    alt="image_forty"
                                    className="h-[60px] w-[60px]"
                                  />
                                  <Img
                                    src="images/img_group_57489_9.svg"
                                    alt="image_fortyone"
                                    className="h-[60px] w-[60px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text size="3xl" as="p" className="mt-[43px] ml-[-90px] md:ml-0 !text-light_blue-900 z-[1]">
                          Resources
                        </Text>
                      </div>
                      <Text size="3xl" as="p" className="self-end !text-light_blue-900">
                        Rewards
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_vector_blue_200_1x326.png" alt="vector" className="w-[23%] mt-[105px] object-cover" />
          <div className="w-full mt-[5284px] mx-auto md:p-5 max-w-[1200px]">
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
                  alt="image_fortytwo"
                  className="justify-center h-[435px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Heading as="h2" className="top-[21%] right-0 left-0 m-auto capitalize absolute">
                  Frequently asked questions
                </Heading>
                <Img
                  src="images/img_group_57487_orange_200_8x176.svg"
                  alt="image"
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
                      <Img src="images/img_group_57489.svg" alt="image_fortyfour" className="h-[60px] w-[60px]" />
                    </div>
                    <Text as="p" className="!text-light_blue-900_99 !leading-6">
                      Woliba is an innovative benefit tool designed to enhance workplace well-being and engagement,
                      integrating wellness programs, employee recognition, and actionable analytics. It serves as a
                      comprehensive tool for businesses, empowering them with AI-driven insights and resources to boost
                      productivity, morale, and overall employee satisfaction.
                    </Text>
                  </div>
                </div>
                <Img src="images/img_group_57488.svg" alt="image_fortyfive" className="h-px" />
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
                <Img src="images/img_group_57488.svg" alt="image_fortysix" className="h-px" />
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
                <Img src="images/img_group_57488.svg" alt="image" className="h-px" />
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
                <Img src="images/img_group_57488.svg" alt="image" className="h-px" />
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
            alt="vector_sixtyone"
            className="self-stretch md:h-auto mt-[-110px] mr-[1236px] md:mr-0 z-[5] object-cover"
          />
          <div className="self-stretch mt-[6654px]">
            <div className="h-[651px] relative">
              <Img
                src="images/img_ellipse_414.png"
                alt="image_fortynine"
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
                    src="images/img_ellipse_412.png"
                    alt="image_fifty"
                    className="justify-center h-[548px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 rotate-[-7deg] object-cover absolute"
                  />
                  <Img
                    src="images/img_vector_blue_200.svg"
                    alt="vector"
                    className="h-[20px] w-[19px] left-[11%] top-[15%] m-auto absolute"
                  />
                  <Img
                    src="images/img_vector_blue_200.svg"
                    alt="vector"
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
                          alt="vector"
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
                      <Img src="images/img_vector_blue_200.svg" alt="vector" className="h-[20px] w-[19px] mt-[-6px]" />
                    </div>
                    <div className="flex flex-col items-center w-[9%] bottom-[6%] right-[11%] m-auto absolute">
                      <Img
                        src="images/img_image_42.png"
                        alt="imagefortytwo"
                        className="self-stretch h-[133px] w-full md:h-auto z-[1] object-cover"
                      />
                      <Img src="images/img_vector_blue_200.svg" alt="vector" className="h-[20px] w-[19px] mt-[-17px]" />
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
          <div className="self-stretch pb-10 sm:pb-5 z-[2] bg-light_blue-900">
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
                    alt="image_fiftyone"
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
