import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function WellnessChallengesMainPageOnePage() {
  return (
    <>
      <Helmet>
        <title>Swarada's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-light_green-50">
        <div className="flex flex-col self-end items-end gap-[23px]">
          <Img src="images/img_vector_blue_200_1x256.png" alt="vector_one" className="w-[18%] object-cover" />
          <div className="flex flex-col self-stretch items-center">
            <div className="self-stretch">
              <div className="flex flex-col overflow-auto">
                <div className="flex justify-center w-full pt-[3px] px-[3px] mx-auto md:p-5 z-[1] max-w-[2940px]">
                  <div className="flex flex-col items-center w-[49%] md:w-full gap-[25px]">
                    <Heading as="h1" className="capitalize text-center">
                      Real Time Insights on wellness challenges participation
                    </Heading>
                    <Text as="p" className="!text-light_blue-900_99 text-center">
                      Launch your challenge and we’ll deliver robust people analytics for maximum ROI.
                    </Text>
                    <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image" className="h-[8px]" />
                    <div className="self-stretch">
                      <div className="h-[675px] relative">
                        <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="h-[157px] w-[13%] mr-[161px] md:mr-0 z-[1] relative">
                            <div className="flex flex-col w-[49%] bottom-[5%] right-0 m-auto absolute">
                              <Img src="images/img_vector_red_200.svg" alt="vector_three" className="h-[47px] z-[1]" />
                              <Img
                                src="images/img_vector_red_200_43x32.svg"
                                alt="vector_five"
                                className="h-[74px] mt-[-15px]"
                              />
                            </div>
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_seven"
                              className="h-[69px] bottom-0 left-[24%] m-auto absolute"
                            />
                            <Img
                              src="images/img_vector_red_200_27x42.svg"
                              alt="vector_nine"
                              className="h-[47px] bottom-[16%] left-[4%] m-auto absolute"
                            />
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_eleven"
                              className="h-[72px] left-[20%] top-[5%] m-auto absolute"
                            />
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_thirteen"
                              className="h-[68px] right-[27%] top-0 m-auto absolute"
                            />
                            <Img
                              src="images/img_vector_red_200_43x32.svg"
                              alt="vector_fifteen"
                              className="h-[65px] left-0 top-[21%] m-auto absolute"
                            />
                          </div>
                          <div className="flex md:flex-col self-stretch justify-end items-center mt-[-120px]">
                            <div className="flex flex-col w-[62%] md:w-full gap-6 z-[1]">
                              <Img
                                src="images/img_group_1003.svg"
                                alt="image_one"
                                className="h-[60px] w-[60px] ml-1 md:ml-0"
                              />
                              <div className="pt-5 rounded-tl-[20px] rounded-tr-[20px] border-light_blue-900_4c border border-solid bg-white-A700">
                                <div className="flex flex-col self-end items-start gap-2.5">
                                  <Text size="md" as="p" className="!text-light_blue-900">
                                    Activity & Wellness Challenges Dashboard
                                  </Text>
                                  <div className="flex w-[60%] md:w-full">
                                    <div className="flex justify-end w-full p-2 border-light_blue-900_4c border border-solid bg-white-A700 rounded-[12px]">
                                      <div className="flex justify-end ml-[-565px] mr-1 gap-3.5">
                                        <Button color="light_blue_900_0c" size="sm" className="w-[32px] rounded-md">
                                          <Img src="images/img_compare_overview.svg" />
                                        </Button>
                                        <Button color="light_blue_900_0c" size="sm" className="w-[32px] rounded-md">
                                          <Img src="images/img_group_1739.svg" />
                                        </Button>
                                        <Button color="light_blue_900_0c" size="sm" className="w-[32px] rounded-[5px]">
                                          <Img src="images/img_group_1605.svg" />
                                        </Button>
                                        <div className="flex justify-end items-center gap-2">
                                          <Text size="xs" as="p" className="!text-light_blue-900_99 text-center">
                                            Year
                                          </Text>
                                          <div className="flex justify-center items-center gap-[9px] p-[7px] border-light_blue-900_4c border border-solid bg-light_green-50_7f rounded-md">
                                            <Text
                                              size="xs"
                                              as="p"
                                              className="!text-light_blue-900 text-center !font-medium"
                                            >
                                              2022
                                            </Text>
                                            <Img
                                              src="images/img_mask_group_light_blue_900.svg"
                                              alt="image_two"
                                              className="h-[16px] w-[16px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex sm:flex-col items-center w-[31%] gap-4">
                                        <div className="h-[12px] w-[24%] bg-light_blue-900_19 rounded-md" />
                                        <div className="flex w-[21%] sm:w-full">
                                          <Button
                                            color="light_blue_900_0c"
                                            size="xs"
                                            className="w-full font-medium rounded-md"
                                          >
                                            Overview
                                          </Button>
                                        </div>
                                        <div className="h-[12px] w-[19%] bg-light_blue-900_19 rounded-md" />
                                        <div className="h-[12px] w-[29%] bg-light_blue-900_19 rounded-md" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-col w-[60%] md:w-full gap-1.5">
                                    <Img
                                      src="images/img_image_148.png"
                                      alt="image148_one"
                                      className="w-[25%] md:w-full md:h-auto object-cover"
                                    />
                                    <Img
                                      src="images/img_image_149.png"
                                      alt="image149_one"
                                      className="w-[25%] md:w-full md:h-auto object-cover"
                                    />
                                    <Img
                                      src="images/img_image_150.png"
                                      alt="image150_one"
                                      className="w-[25%] md:w-full md:h-auto object-cover"
                                    />
                                    <Img
                                      src="images/img_image_151.png"
                                      alt="image151_one"
                                      className="w-[25%] md:w-full md:h-auto object-cover"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_image_153.png"
                                    alt="image153_one"
                                    className="w-[60%] object-cover"
                                  />
                                  <div className="flex md:flex-col w-[60%] md:w-full pr-[730px] gap-2.5 md:pr-5">
                                    <div className="flex justify-end w-full">
                                      <div className="flex sm:flex-col justify-between items-start w-full pr-[730px] gap-5 md:pr-5">
                                        <Img
                                          src="images/img_image_146.png"
                                          alt="image146_one"
                                          className="h-[398px] w-full md:h-auto sm:w-full object-cover"
                                        />
                                        <div className="flex flex-col items-end w-full sm:w-full mt-[97px] gap-[43px]">
                                          <div className="flex justify-end w-[120px]">
                                            <div className="h-[19px] w-full bg-light_blue-900_19 rounded-[9px]" />
                                          </div>
                                          <div className="flex justify-end w-[120px]">
                                            <div className="h-[19px] w-full bg-light_blue-900_19 rounded-[9px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[398px] w-full relative">
                                      <Img
                                        src="images/img_image_147.png"
                                        alt="image147_one"
                                        className="justify-center h-[398px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                      />
                                      <div className="w-full top-[19%] right-0 left-0 m-auto absolute">
                                        <div className="h-[129px] relative">
                                          <Img
                                            src="images/img_image_148_129x425.png"
                                            alt="image148_one"
                                            className="justify-center h-[129px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                          />
                                          <div className="flex flex-col items-end w-[29%] h-max mr-[9px] gap-[43px] right-[2%] bottom-0 top-0 my-auto absolute">
                                            <div className="flex justify-end w-[120px]">
                                              <div className="h-[19px] w-full bg-light_blue-900_19 rounded-[9px]" />
                                            </div>
                                            <div className="flex justify-end w-[120px]">
                                              <div className="h-[19px] w-full bg-light_blue-900_19 rounded-[9px]" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col justify-end items-center w-[90%] md:w-full ml-[-21px] md:ml-0">
                              <div className="flex md:flex-col justify-end items-start w-[89%] md:w-full">
                                <div className="flex md:flex-col justify-end items-center flex-1">
                                  <Img
                                    src="images/img_vector_orange_200_340x398.svg"
                                    alt="vector"
                                    className="self-end h-[340px] md:w-full md:h-auto"
                                  />
                                  <div className="flex flex-col ml-[-256px] gap-5 md:ml-0 flex-1">
                                    <div className="flex justify-center items-center w-[39%] md:w-full gap-3 p-1">
                                      <Img
                                        src="images/img_group_1003.svg"
                                        alt="image_three"
                                        className="h-[60px] w-[60px]"
                                      />
                                      <Heading size="s" as="h2" className="self-end capitalize">
                                        Challenge Leaderboard
                                      </Heading>
                                    </div>
                                    <div className="rounded-tl-[20px] rounded-tr-[20px] shadow-sm">
                                      <div className="flex flex-col pt-[19px] px-[19px] rounded-tl-[20px] rounded-tr-[20px] bg-light_blue-900">
                                        <Text size="md" as="p" className="mt-[5px] !text-light_green-50">
                                          Top Challenge Participants and Leaders
                                        </Text>
                                        <div className="mt-2.5">
                                          <div className="flex md:flex-col justify-between gap-5 p-2 border-light_blue-900_4c border border-solid bg-white-A700 rounded-[12px]">
                                            <div className="flex sm:flex-col justify-center items-center w-[52%] md:w-full ml-1 gap-4 md:ml-0">
                                              <div className="h-[12px] bg-light_blue-900_19 flex-1 rounded-md" />
                                              <Button
                                                color="light_blue_900_0c"
                                                size="xs"
                                                className="w-full font-medium flex-1 rounded-md"
                                              >
                                                Overview
                                              </Button>
                                              <div className="h-[12px] w-[19%] bg-light_blue-900_19 rounded-md" />
                                              <div className="h-[12px] w-[29%] bg-light_blue-900_19 rounded-md" />
                                            </div>
                                            <div className="flex justify-center mr-1 gap-[15px] md:mr-0">
                                              <Button
                                                color="light_blue_900_0c"
                                                size="sm"
                                                className="w-[32px] rounded-md"
                                              >
                                                <Img src="images/img_compare_overview.svg" />
                                              </Button>
                                              <Button
                                                color="light_blue_900_0c"
                                                size="sm"
                                                className="w-[32px] rounded-md"
                                              >
                                                <Img src="images/img_group_1739.svg" />
                                              </Button>
                                              <Button
                                                color="light_blue_900_0c"
                                                size="sm"
                                                className="w-[32px] rounded-[5px]"
                                              >
                                                <Img src="images/img_group_1605.svg" />
                                              </Button>
                                              <div className="flex justify-center items-center gap-2">
                                                <Text size="xs" as="p" className="!text-light_blue-900_99 text-center">
                                                  Year
                                                </Text>
                                                <div className="flex justify-center items-center gap-[9px] p-[7px] border-light_blue-900_4c border border-solid bg-light_green-50_7f rounded-md">
                                                  <Text
                                                    size="xs"
                                                    as="p"
                                                    className="!text-light_blue-900 text-center !font-medium"
                                                  >
                                                    2022
                                                  </Text>
                                                  <Img
                                                    src="images/img_mask_group_light_blue_900.svg"
                                                    alt="image_four"
                                                    className="h-[16px] w-[16px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[12px] mt-3 opacity-0.8 bg-white-A700_a2 rounded-md" />
                                        <div className="h-[12px] w-[88%] mt-3 opacity-0.8 bg-white-A700_a2 rounded-md" />
                                        <div className="flex md:flex-col mt-5 gap-2.5">
                                          <div className="h-[550px] w-full relative">
                                            <Img
                                              src="images/img_image_154.png"
                                              alt="image154_one"
                                              className="justify-center h-[550px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                            />
                                            <div className="flex flex-col items-end w-[60%] h-max mr-1.5 gap-[31px] right-[1%] bottom-0 top-0 my-auto absolute">
                                              <Img src="images/img_group_57723.svg" alt="image" className="h-[17px]" />
                                              <div className="flex justify-between w-[62%] md:w-full gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_one"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_two"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex self-stretch justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_three"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_four"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_five"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex self-stretch justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_six"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_seven"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_eight"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex self-stretch justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_nine"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_ten"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_eleven"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="h-[550px] w-full relative">
                                            <Img
                                              src="images/img_image_155.png"
                                              alt="image155_one"
                                              className="justify-center h-[550px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                            />
                                            <div className="flex flex-col w-[60%] h-max mr-1 gap-[31px] right-[1%] bottom-0 top-0 my-auto absolute">
                                              <Img src="images/img_group_57723.svg" alt="image" className="h-[17px]" />
                                              <div className="flex justify-between w-[63%] md:w-full gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_one"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_two"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_three"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_four"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_five"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_six"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_seven"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_eight"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                              <div className="flex justify-between gap-5">
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_nine"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_ten"
                                                  className="h-[17px]"
                                                />
                                                <Img
                                                  src="images/img_group_57723.svg"
                                                  alt="image_eleven"
                                                  className="h-[17px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_vector_orange_200_360x251.svg"
                                  alt="vector_nineteen"
                                  className="h-[360px] md:w-full md:h-auto mt-9 ml-[-110px] md:ml-0 z-[1]"
                                />
                              </div>
                              <div className="flex w-[68%] md:w-full ml-[-21px] pb-1 px-1 md:ml-0 z-[1]">
                                <div className="flex items-center w-[16%] md:w-full mb-[570px] gap-3">
                                  <Img src="images/img_group_1003.svg" alt="image_five" className="h-[60px] w-[60px]" />
                                  <Heading size="s" as="h3" className="self-end capitalize">
                                    Challenge Library
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[79px] w-[7%] bottom-[10%] left-[14%] m-auto absolute">
                          <Img
                            src="images/img_vector.svg"
                            alt="vector"
                            className="h-[36px] left-[20%] top-[5%] m-auto absolute"
                          />
                          <Img
                            src="images/img_vector.svg"
                            alt="vector"
                            className="h-[34px] right-[27%] top-0 m-auto absolute"
                          />
                          <div className="flex flex-col items-start w-[49%] bottom-[5%] right-0 m-auto absolute">
                            <Img src="images/img_vector_red_200.svg" alt="vector" className="h-[23px] z-[1]" />
                            <Img
                              src="images/img_vector_red_200_43x32.svg"
                              alt="vector"
                              className="h-[37px] mt-[-7px]"
                            />
                          </div>
                          <Img
                            src="images/img_vector.svg"
                            alt="vector"
                            className="h-[35px] bottom-0 left-[24%] m-auto absolute"
                          />
                          <Img
                            src="images/img_vector_red_200_27x42.svg"
                            alt="vector"
                            className="h-[24px] bottom-[15%] left-[4%] m-auto absolute"
                          />
                          <Img
                            src="images/img_vector_red_200_43x32.svg"
                            alt="vector"
                            className="h-[32px] left-0 top-[21%] m-auto absolute"
                          />
                        </div>
                      </div>
                      <div className="h-px z-[1] opacity-0.5 bg-orange-200_87" />
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_vector_blue_200_1x233.png"
                  alt="vector"
                  className="w-[16%] mt-[-76px] object-cover"
                />
              </div>
            </div>
            <div className="h-[474px] w-[92%] mt-40 relative">
              <Img
                src="images/img_vector_blue_200_1x289.png"
                alt="vector"
                className="h-px w-[22%] right-0 top-[56%] m-auto object-cover absolute"
              />
              <div className="flex w-[91%] h-full left-0 bottom-0 top-0 my-auto absolute">
                <div className="flex md:flex-col items-center w-full gap-2.5">
                  <div className="flex flex-col w-[42%] md:w-full gap-[46px] md:p-5">
                    <Heading as="h4" className="capitalize">
                      <span className="text-light_blue-900">Our </span>
                      <span className="text-blue-200">
                        HR Tech Stack&#39;s strength is fortified by customers Across All Industries
                      </span>
                    </Heading>
                    <div className="flex w-[37%] md:w-full gap-3">
                      <div className="w-[5%] pb-[150px] md:pb-5 bg-light_blue-900_19 rounded-[50%]">
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
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-20 md:gap-[60px] md:p-5 sm:gap-10 flex-1">
                    <div className="self-stretch h-[279px] relative">
                      <Img src="images/img_.svg" alt="image_six" className="h-[83px] left-0 top-0 m-auto absolute" />
                      <div className="flex flex-col w-[94%] gap-8 bottom-0 right-0 m-auto absolute">
                        <Text size="5xl" as="p" className="!text-light_blue-900">
                          &quot;This has been a great tool for our company to socially connect through
                          &quot;shoutouts&quot; My wife has recommended that her school look into this as part of their
                          initiatives too.&quot;
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
                          <Img
                            src="images/img_group_57487.svg"
                            alt="image_seven"
                            className="h-[63px] sm:w-full sm:h-auto"
                          />
                          <Img
                            src="images/img_layer_x0020_2.svg"
                            alt="layerx0020two"
                            className="h-[40px] sm:w-full sm:h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col justify-end items-center w-[94%] md:w-full gap-[19px]">
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
                      <div className="flex sm:flex-col justify-end items-center gap-5 flex-1">
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
            </div>
            <div className="flex flex-col self-stretch mt-[167px] gap-[60px] sm:gap-[30px] bg-gradient">
              <div className="flex flex-col items-center w-full gap-7 mx-auto md:p-5 max-w-[1200px]">
                <Heading as="h5" className="capitalize text-center">
                  More Reasons to choose Woliba
                </Heading>
                <Text as="p" className="!text-light_blue-900_99 text-center !leading-6">
                  HR teams leverage Woliba Employee Recognition alongside Challenges, Resources, Surveys, Events, and
                  Reward Management to comprehensively engage employees and foster a world-class organizational culture.
                </Text>
                <Img src="images/img_group_57487_orange_200_8x176.svg" alt="image_eight" className="h-[8px]" />
              </div>
              <div className="w-full mx-auto md:p-5 max-w-[928px]">
                <div className="flex flex-col items-center">
                  <Text size="3xl" as="p" className="!text-light_blue-900 text-center z-[1]">
                    Coaching & Events
                  </Text>
                  <div className="self-stretch h-[390px] relative">
                    <div className="flex justify-between items-start w-[62%] bottom-[10%] right-[12%] gap-5 m-auto absolute">
                      <Img src="images/img_layer_x0020_2.svg" alt="image_nine" className="h-[80px] mt-[49px]" />
                      <Img src="images/img_group_57558.svg" alt="image_ten" className="h-[60px] w-[60px]" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img src="images/img_group_57557.svg" alt="image_eleven" className="h-[60px] w-[60px] z-[1]" />
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
                                  alt="image_twelve"
                                  className="self-end h-[60px] w-[60px] z-[1]"
                                />
                                <div className="h-[361px] md:w-full ml-[-54px] md:ml-0 flex-1 relative md:flex-none">
                                  <Img
                                    src="images/img_group_57551_700x700.png"
                                    alt="image_thirteen"
                                    className="h-[700px] w-full md:w-[700px] md:h-auto bottom-0 right-0 left-0 m-auto object-cover absolute"
                                  />
                                  <div className="flex justify-between w-[71%] top-[12%] right-0 left-0 gap-5 m-auto absolute">
                                    <Img
                                      src="images/img_group_57555.svg"
                                      alt="image_fourteen"
                                      className="h-[60px] w-[60px]"
                                    />
                                    <Img
                                      src="images/img_group_57489_9.svg"
                                      alt="image_fifteen"
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
            <div className="w-full mt-[1630px] mx-auto md:p-5 max-w-[1200px]">
              <div className="flex flex-col gap-7">
                <div className="flex justify-between items-center gap-5">
                  <Heading as="h6" className="capitalize">
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
                    alt="image_sixteen"
                    className="justify-center h-[435px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Heading as="h1" className="top-[21%] right-0 left-0 m-auto capitalize absolute">
                    Frequently asked questions
                  </Heading>
                  <Img
                    src="images/img_group_57487_orange_200_8x176.svg"
                    alt="image_seventeen"
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
                        <Img src="images/img_group_57489.svg" alt="image_eighteen" className="h-[60px] w-[60px]" />
                      </div>
                      <Text as="p" className="!text-light_blue-900_99 !leading-6">
                        Woliba is an innovative benefit tool designed to enhance workplace well-being and engagement,
                        integrating wellness programs, employee recognition, and actionable analytics. It serves as a
                        comprehensive tool for businesses, empowering them with AI-driven insights and resources to
                        boost productivity, morale, and overall employee satisfaction.
                      </Text>
                    </div>
                  </div>
                  <Img src="images/img_group_57488.svg" alt="image_nineteen" className="h-px" />
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
                  <Img src="images/img_group_57488.svg" alt="image_twenty" className="h-px" />
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
                  <Img src="images/img_group_57488.svg" alt="image_twentyone" className="h-px" />
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
                  <Img src="images/img_group_57488.svg" alt="image_twentytwo" className="h-px" />
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
              alt="vector_fortyone"
              className="w-[14%] mt-[-110px] z-[2] object-cover"
            />
            <div className="self-stretch mt-[3000px]">
              <div className="h-[651px] relative">
                <Img
                  src="images/img_ellipse_414_651x1440.png"
                  alt="image"
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
                      src="images/img_ellipse_412_548x1434.png"
                      alt="image"
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
                        <Img
                          src="images/img_vector_blue_200.svg"
                          alt="vector"
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
                          alt="vector_fiftyone"
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
                    <Img src="images/img_frame_57382.svg" alt="image" className="self-stretch h-[176px] md:h-auto" />
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
      </div>
    </>
  );
}
