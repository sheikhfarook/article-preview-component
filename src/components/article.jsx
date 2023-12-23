import bitmap from "../assets/Bitmap.svg";
import profile from "../assets/Oval.svg";
import Ovalshare from "../assets/Ovalshare.svg";
// import group from "../assets/Group.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  // PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  // PopoverCloseButton,
  // PopoverAnchor,
  Button,
} from "@chakra-ui/react";

const Article = () => {
  return (
    <div className="">
      <div
        className="flex flex-row w-[45rem] h-[17.5rem] m-auto my-[16.25rem]
       max-sm:flex-col max-sm:w-[20.4375rem] max-sm:h-[32rem] max-sm:my-[6.5rem]">
        {/* 1 */}
        <div className="max-sm:h-[16.5rem]">
          <img
            className="rounded-l-[0.625rem] max-sm:w-full   max-sm:rounded-t-[0.625rem] max-sm:rounded-bl-none"
            src={bitmap}
            alt=""
          />
        </div>
        {/* 2 */}
        <div className="bg-white shadow-2xl rounded-r-[0.625rem] max-sm:rounded-b-[0.625rem]  max-sm:rounded-t-none">
          <div className="space-y-5 m-[31px] font-manrope">
            <h2
              className="w-[22.8125rem] text-[#48556A] text-[1.25rem] 
            font-[700] leading-[1.75rem] tracking-[0.01563rem]
            max-sm:text-[1rem] max-sm:w-[16.4375rem] max-sm:leading-[1.5rem] max-sm:tracking-[0.00125rem] ">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p
              className="w-[22.8125rem] text-[#6E8098] text-[0.8125rem] 
            font-[500] leading-[1.25rem] tracking-[0.00763rem]
            max-sm:w-[16.4375rem]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-5">
                <img
                  className="w-[2.5rem] h-[2.5rem] rounded-[2.5rem]"
                  src={profile}
                  alt=""
                />
                <div className="leading-[1.25rem]">
                  <h3 className="font-[700] text-[#48556A] text-[0.8125rem] tracking-[0.00763rem]  ">
                    Michelle Appleton
                  </h3>
                  <p className="font-[500] text-[#48556A] text-[0.8125rem] tracking-[0.00763rem]">
                    28 Jun 2020
                  </p>
                </div>
              </div>
              <div className="rounded-full">
                <Popover placement="top">
                  <PopoverTrigger>
                    <Button colorScheme="white">
                      <img
                        className="w-[2rem] h-[2rem] "
                        src={Ovalshare}
                        alt=""
                      />
                    </Button>
                  </PopoverTrigger>

                  <div className="relative max-sm:-top-[9.34rem] max-sm:right-[3.2rem] md:right-[22rem]">
                    <PopoverContent
                      width={{
                        base: "20.6rem",
                        md: "80",
                      }}
                      position={{
                        base: "relative",
                      }}
                      marginLeft={{
                        base: `-13.5rem`,
                        md: `-2.8rem`,
                      }}
                      top={{
                        base: "4.93rem",
                        md: "0rem",
                      }}
                      borderTopRadius={{
                        base: "0",
                        md: "15",
                      }}
                      borderBottomRadius={{
                        base: "12",
                        md: "15",
                      }}
                      py={2.5}
                      bg="#48556A">
                      <PopoverArrow
                        bg="#48556A"
                        size={30}
                        display={{
                          base: "none",
                          md: "block",
                        }}
                      />
                      <PopoverBody>
                        <div className="flex justify-between  ">
                          <div className="m-auto flex gap-5 ">
                            <div className="flex gap-10 m-auto md:ml-8">
                              <p className="my-auto tracking-[0.3125rem] font-[500] text-[#9DAEC2]">
                                SHARE
                              </p>
                              <div className=" flex gap-3">
                                <FaFacebookSquare color="white" fontSize={30} />
                                <FaTwitter fontSize={30} color="white" />
                                <FaPinterest fontSize={30} color="white" />
                              </div>
                            </div>

                            <PopoverTrigger>
                              <Button colorScheme="white">
                                <img
                                  className="-mt-1 md:hidden "
                                  src={Ovalshare}
                                  alt=""
                                />
                              </Button>
                            </PopoverTrigger>
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </div>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
