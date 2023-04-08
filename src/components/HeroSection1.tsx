import React from "react";
import arrow from "../assets/arrow_outward.svg";
import images from "./images";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../components/faq/data";
import SingleQuestion from "../components/faq/Question";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

type Props = {
  ratings: String;
  img: any;
  title: String;
  header: String;
  time: String;
  lessons: String;
  name: String;
  amount: String;
  profileImg: any;
};

export default function HeroSection1() {
  const [questions, setQuestions] = useState(data);
  const [tabIndex, setTabIndex] = useState(0);

  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    module: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const Card = (props: Props) => {
    const {
      ratings,
      img,
      profileImg,
      title,
      header,
      time,
      lessons,
      name,
      amount,
    } = props;

    return (
      <div className="lg:p-5 p-3 rounded-[16px] bg-white">
        <img src={img} alt="" />
        <span className="flex items-center justify-between mt-2">
          <button className="bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full">
            {title}
          </button>

          <p className="font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center">
            4.7k{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              className="lg:w-auto w-[20%]"
            >
              <path
                d="M2.8835 12.6667L3.96683 7.98333L0.333496 4.83333L5.1335 4.41667L7.00016 0L8.86683 4.41667L13.6668 4.83333L10.0335 7.98333L11.1168 12.6667L7.00016 10.1833L2.8835 12.6667Z"
                fill="#F7B435"
              />
            </svg>{" "}
            {ratings}
          </p>
        </span>
        <h1 className="capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2">
          {header}
        </h1>
        <span className="flex items-center justify-between">
          <p className="text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="lg:w-auto w-[20%]"
            >
              <path
                d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"
                fill="#A1A1A1"
              />
            </svg>
            {time}
          </p>
          <p className="text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              className="lg:w-auto w-[20%]"
            >
              <path
                d="M13 5.9V4.2C13.55 3.96667 14.1127 3.79167 14.688 3.675C15.2627 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.196 5.18767 17.788 5.113C17.3793 5.03767 16.95 5 16.5 5C15.8667 5 15.2583 5.07933 14.675 5.238C14.0917 5.396 13.5333 5.61667 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1127 9.29167 14.688 9.175C15.2627 9.05833 15.8667 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.196 10.6877 17.788 10.613C17.3793 10.5377 16.95 10.5 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1127 6.54167 14.688 6.425C15.2627 6.30833 15.8667 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.196 7.93767 17.788 7.863C17.3793 7.78767 16.95 7.75 16.5 7.75C15.8667 7.75 15.2583 7.82933 14.675 7.988C14.0917 8.146 13.5333 8.36667 13 8.65ZM5.5 12C6.28333 12 7.046 12.0873 7.788 12.262C8.52933 12.4373 9.26667 12.7 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.30433 2.05833 3.713 2.175C3.121 2.29167 2.55 2.46667 2 2.7V12.6C2.58333 12.4 3.16267 12.25 3.738 12.15C4.31267 12.05 4.9 12 5.5 12ZM12 13.05C12.7333 12.7 13.471 12.4373 14.213 12.262C14.9543 12.0873 15.7167 12 16.5 12C17.1 12 17.6877 12.05 18.263 12.15C18.8377 12.25 19.4167 12.4 20 12.6V2.7C19.45 2.46667 18.8793 2.29167 18.288 2.175C17.696 2.05833 17.1 2 16.5 2C15.7167 2 14.9417 2.1 14.175 2.3C13.4083 2.5 12.6833 2.8 12 3.2V13.05ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.11267 14.0917 3.438 14.275C2.76267 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.812667 15.225 0.488 15.025C0.162667 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.046 1.74167 0.138 1.575C0.229333 1.40833 0.366667 1.28333 0.55 1.2C1.31667 0.8 2.11667 0.5 2.95 0.3C3.78333 0.1 4.63333 0 5.5 0C6.46667 0 7.41267 0.125 8.338 0.375C9.26267 0.625 10.15 1 11 1.5C11.85 1 12.7377 0.625 13.663 0.375C14.5877 0.125 15.5333 0 16.5 0C17.3667 0 18.2167 0.1 19.05 0.3C19.8833 0.5 20.6833 0.8 21.45 1.2C21.6333 1.28333 21.771 1.40833 21.863 1.575C21.9543 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8377 14.825 21.513 15.025C21.1877 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2373 14.4583 18.562 14.275C17.8873 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z"
                fill="#A1A1A1"
              />
            </svg>{" "}
            {lessons} lessons
          </p>
        </span>
        <span className="flex items-center justify-between mt-8">
          <span className="flex items-center gap-1">
            <img src={profileImg} alt="" className="lg:w-auto w-[20%]" />
            <p className="text-black font-bold  lg:text-base text-[6px]">
              {name}
            </p>
          </span>
          <p className="text-[#004DB3] font-semibold lg:text-xl text-[8px]">
            ${amount}
          </p>
        </span>
      </div>
    );
  };
  return (
    <div>
      <main className=" bg-[#004DB3]">
        <div className="flex lg:flex-row flex-col container px-6 mx-auto lg:pt-20 pt-4 justify-between">
          <div className="lg:w-1/2 w-full lg:p-0 px-4 flex flex-col justify-center lg:text-left text-center">
            <p className="lg:text-[64px] text-[32px] text-white font-bold lg:leading-[82px] leading-[45.78px] lg:mt-0 mt-2">
              Grow your skills to advance your career path
            </p>
            <p className="text-[#E7E7E7] font-medium lg:w-[533px] capitalize lg:text-base text-[8px] mt-4">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <span className="flex items-center gap-4 mt-8 mb-6 capitalize lg:justify-start justify-center">
              <button className="lg:px-6 lg:py-4 px-4 py-2  bg-transparent border border-[#DDDDDD] capitalize text-white flex items-center lg:text-sm text-[8px] leading-snug rounded-md justify-center hoverBtn">
                get started now
                <img src={arrow} alt="arrow outward" />
              </button>
              <button className="bg-white text-[#004DB3] rounded-[4px] lg:px-6 lg:py-4 px-4 py-3 font-bold lg:text-base text-[8px]">
                Enroll Now
              </button>
            </span>
            <div className="flex items-center gap-2 lg:mx-0 mx-auto">
              <img src={images.users} alt="users" className="lg:block hidden" />
              <img
                src={images.profilesm}
                alt="users"
                className="lg:hidden block"
              />

              <p className="font-bold text-white flex flex-col lg:text-2xl text-[13.4px]">
                255k+{" "}
                <span className="font-medium lg:text-base text-[8px]">
                  Previews
                </span>
              </p>
            </div>
          </div>
          <div className="flex mx-auto mt-12">
            <img src={images.hero} alt="" className="lg:block hidden" />
            <img src={images.herosm} alt="" className="lg:hidden block" />
          </div>
        </div>
      </main>

      <section className="lg:flex hidden h-[9.88rem] bg-[#CCDBF0] items-center justify-center gap-12 ">
        <img src={images.zoom} alt="" />
        <img src={images.stripe} alt="" />
        <img src={images.monday} alt="" />
        <img src={images.dropbox} alt="" />
        <img src={images.slack} alt="" />
      </section>
      <section className="lg:hidden h-[60px] bg-[#CCDBF0] items-center flex justify-center gap-4 ">
        <img src={images.zoommobile} alt="" />
        <img src={images.stripemobile} alt="" />
        <img src={images.mondaymobile} alt="" />
        <img src={images.dropboxmobile} alt="" />
        <img src={images.slackmobile} alt="" />
      </section>

      <main className=" bg-[#F8F9FC]">
        <section>
          <div className="lg:flex items-center justify-between px-6 container mx-auto pb-12 pt-24">
            <div className="lg:w-1/2 lg:block flex flex-col items-center">
              <h1 className="text-[#000F24] font-bold lg:leading-[70px] lg:text-[56px] text-2xl mb-4 lg:text-left text-center">
                High quality video, audio & live classes
              </h1>
              <p className="text-[#A1A1A1] capitalize font-medium mb-8 lg:w-[37.75rem] lg:text-base text-[8px]">
                high-definition video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
              <button className="text-white bg-[#004DB3] capitalize rounded-[4px] px-8 py-4 mb-6 font-bold">
                view courses
              </button>
              <div className="flex lg:w-3/4 gap-6 capitalize">
                <span className="bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14">
                  <img src={images.frame1} alt="" />
                  <p className="font-bold text-[#000F24]">audio classes</p>
                </span>
                <span className="bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14">
                  <img src={images.frame2} alt="" />
                  <p className="font-bold text-[#000F24]">live classes</p>
                </span>
              </div>
              <div className="flex lg:w-3/4 gap-6 mt-6 mb-6 capitalize">
                <span className="bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14">
                  <img src={images.frame3} alt="" />
                  <p className="font-bold text-[#000F24]">recorded classes</p>
                </span>
                <span className="bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14">
                  <img src={images.frame4} alt="" />
                  <p className="font-bold text-[#000F24]">50+ notes</p>
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-end relative">
            
              <img
                src={images.heroImg}
                alt=""
                className="relative z-10 w-full"
              />
              <img
                src={images.users2}
                alt=""
                className="absolute z-20 bottom-1/2 right-2/3 lg:w-auto w-1/3"
              />
            </div>
          </div>
        </section>

        <section className="container px-6 mx-auto pb-16">
          <div className="lg:flex items-center justify-between gap-16">
            <div className="lg:w-1/2 lg:mb-0 mb-8">
              <h1 className="text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4 lg:text-left text-center">
                this is why we are best from others
              </h1>
              <p className="text-[#A1A1A1] font-medium lg:w-[38rem] lg:leading-[26px] mb-8 capitalize lg:text-base text-[8px] lg:text-left text-center">
                high-definition video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
              <img
                src={images.heroImg3}
                alt="picture of a male starring at his laptop screen"
              />
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-6 capitalize">
              <div className="bg-white lg:py-8 py-4 lg:px-6 px-2">
                <img src={images.frame5} alt="" className="lg:w-auto w-[15%]" />
                <h1 className="capitalize mt-6 text-black font-bold lg:text-base text-xs">
                  experienced mentors
                </h1>
                <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </p>
              </div>

              <div className="bg-white lg:py-8 py-4 lg:px-6 px-2">
                <img src={images.frame6} alt="" className="lg:w-auto w-[15%]" />
                <h1 className="capitalize mt-6 text-black font-bold lg:text-base text-xs">
                  one-on-one meetings
                </h1>
                <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </p>
              </div>

              <div className="bg-white lg:py-8 py-4 lg:px-6 px-2">
                <img src={images.frame7} alt="" className="lg:w-auto w-[15%]" />
                <h1 className="capitalize mt-6 text-black font-bold lg:text-base text-xs">
                  one-on-one meetings
                </h1>
                <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </p>
              </div>

              <div className="bg-white lg:py-8 py-4 lg:px-6 px-2">
                <img src={images.frame8} alt="" className="lg:w-auto w-[15%]" />
                <h1 className="capitalize mt-6 text-black font-bold lg:text-base text-xs">
                  affordable prices
                </h1>
                <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]">
                  high-defination video is video of higher resolution and
                  quality than standard definition. high-defination video is
                  video of higher resolution and quality than standard
                  definition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-6 mx-auto pb-16">
          <div className="flex flex-col items-center capitalize">
            <h1 className="text-[#000F24] font-bold lg:text-[56px] lg:leading-[70px] text-2xl capitalize mb-4">
              browse our popular courses
            </h1>
            <p className="text-[#A1A1A1] font-medium lg:text-xs lg:leading-[26px] text-[8px] text-center lg:w-2/5 w-3/4 mb-16">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>

            <div>
              <Tabs
                className=""
                selectedTabClassName=""
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList className="flex sticky top-40 h-12 items-center z-40 capitalize lg:gap-8">
                  <Tab
                    key="tab1"
                    className="lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none "
                  >
                    all categories
                  </Tab>
                  <Tab
                    key="tab2"
                    className="lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none "
                  >
                    design
                  </Tab>
                  <Tab
                    key="tab3"
                    className="lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none "
                  >
                    development
                  </Tab>
                  <Tab
                    key="tab4"
                    className="lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none "
                  >
                    marketing
                  </Tab>
                </TabList>
              </Tabs>
            </div>

        
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-2 mt-16">
              <Card
                amount="15.00"
                header="introduction to user research in ux design"
                img={images.catImg1}
                lessons="15"
                name="leonard victor"
                ratings="(32.7k+)"
                time="23hrs 50mins"
                title="design"
                profileImg={images.cardProfileImg}
              />
              <Card
                amount="32.00"
                header="introduction to  new marketing audience "
                img={images.catImg2}
                lessons="22"
                name="Jeffrey williams"
                ratings="(8.7k+)"
                time="22hrs 30mins"
                title="marketing"
                profileImg={images.cardProfileImg1}
              />
              <Card
                amount="55.00"
                header="introduction to html, css & bootstrap"
                img={images.catImg3}
                lessons="55"
                name="claretta mason"
                ratings="(12.7k+)"
                time="45hrs 50mins"
                title="development"
                profileImg={images.cardProfileImg2}
              />
              <Card
                amount="45.00"
                header="introduction to javascript, git & GitHub"
                img={images.catImg4}
                lessons="22"
                name="Jessica duke"
                ratings="(32.7k+)"
                time="30hrs 50mins"
                title="development"
                profileImg={images.cardProfileImg3}
              />
              <Card
                amount="25.00"
                header="introduction to outroom  marketing analysis"
                img={images.catImg5}
                lessons="26"
                name="Samuel jacobs"
                ratings="(4.7k+)"
                time="33hrs 50mins"
                title="marketing"
                profileImg={images.cardProfileImg4}
              />
              <Card
                amount="25.00"
                header="introduction to live  marketing analysis"
                img={images.catImg6}
                lessons="32"
                name="adam smith"
                ratings="(15.7k+)"
                time="10hrs 50mins"
                title="marketing"
                profileImg={images.cardProfileImg5}
              />
            </div>
            <button className="lg:block hidden text-white bg-[#004DB3] capitalize rounded-[4px] px-8 py-4 mt-10 mb-6 font-bold">
              explore all courses
            </button>
            <button className="lg:hidden block text-white bg-[#004DB3] capitalize rounded-[4px] px-6 py-3 mt-10 mb-6 font-bold text-[8px]">
              view courses
            </button>
          </div>
        </section>

        <section className=" pb-6">
          <div className="flex flex-col items-center capitalize">
            <h1 className="text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4">
              what our clients are saying
            </h1>
            <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-2/5 mb-16">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="bg-white px-4 py-6 capitalize rounded-3xl">
              <p className="text-[#A1A1A1] lg:text-sm text-[10px] font-medium">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </p>
              <span className="flex items-center gap-1 mt-5">
                <img src={images.carouselImg} alt="" className="lg:w-auto w-[15%]" />
                <span>
                  <p className="font-bold lg:text-sm text-[10px] text-black">bella moon</p>
                  <p className="text-[#A1A1A1] lg:text-xs text-[8px]">product designer</p>
                </span>
              </span>
            </div>
            <div className="bg-white px-4 py-6 capitalize rounded-3xl">
              <p className="text-[#A1A1A1] lg:text-sm text-[10px] font-medium">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </p>
              <span className="flex items-center gap-1 mt-5">
                <img src={images.carouselImg1} alt="" className="lg:w-auto w-[15%]" />
                <span>
                  <p className="font-bold lg:text-sm text-[10px] text-black">samuel fortune</p>
                  <p className="text-[#A1A1A1] lg:text-xs text-[8px]">product designer</p>
                </span>
              </span>
            </div>
            <div className="bg-white px-4 py-6 capitalize rounded-3xl">
              <p className="text-[#A1A1A1] lg:text-sm text-[10px] font-medium">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </p>
              <span className="flex items-center gap-1 mt-5">
                <img src={images.carouselImg2} alt="" className="lg:w-auto w-[15%]" />
                <span>
                  <p className="font-bold lg:text-sm text-[10px] text-black">bryce jason</p>
                  <p className="text-[#A1A1A1] lg:text-xs text-[8px]">product designer</p>
                </span>
              </span>
            </div>

            <div className="bg-white px-4 py-6 capitalize rounded-3xl">
              <p className="text-[#A1A1A1] lg:text-sm text-[10px] font-medium">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </p>
              <span className="flex items-center gap-1 mt-5">
                <img src={images.carouselImg1} alt="" className="lg:w-auto w-[15%]" />
                <span>
                  <p className="font-bold lg:text-sm text-[10px] text-black">samuel fortune</p>
                  <p className="text-[#A1A1A1] lg:text-xs text-[8px]">product designer</p>
                </span>
              </span>
            </div>
          </Carousel>
        </section>
      </main>

      <section className="bg-[#004DB3]">
        <div className="container mx-auto px-6 capitalize lg:w-3/4 text-center lg:pt-[88px] pt-8">
          <p className="font-medium text-white lg:text-base text-[8px]">join our community</p>
          <h1 className="text-white font-bold lg:text-[56px] text-2xl lg:leading-[68.8px]">
            are you ready to connect with the future talent of the tech world
          </h1>
          <p className="text-white font-medium mt-4 lg:text-base text-[8px]">
            meet up with other techstars and grow together
          </p>
          <img src={images.community} alt="" className="m-auto py-4" />
          <button className="bg-white text-[#004DB3] rounded-[4px] lg:px-8 px-6 lg:py-4 py-3 lg:text-base text-[8px] mt-4 lg:mb-24 mb-12 font-bold capitalize">
            join our community
          </button>
        </div>
      </section>

      <section>
        <div className="lg:w-3/4 lg:mt-32 my-12 lg:mb-40 lg:px-6 px-4 container mx-auto">
          <div className="flex flex-col items-center capitalize">
            <h1 className="text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4 lg:text-left text-center">
              frequently asked questions{" "}
            </h1>
            <p className="text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-1/2 w-3/4 mb-16">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </div>
      </section>

      <section className="bg-[#000F24] ">
        <div className="container mx-auto px-6 lg:flex items-start justify-between lg:pt-40 pt-16 lg:pb-80 pb-24">
          <div className="lg:w-1/4">
            <img src={images.logo} alt="logo" />
            <p className="text-white capitalize lg:w-72 my-6">
              reach out to us on any of our social media networks
            </p>
            <span className="flex items-center gap-7">
              <img src={images.facebook} alt="facebook logo" />
              <img src={images.twitter} alt="twitter logo" />
              <img src={images.youtube} alt="youtube logo" />
              <img src={images.instagram} alt="instagram logo" />
              <img src={images.discord} alt="discord logo" />
            </span>
          </div>
          <div className="capitalize text-white lg:w-1/4 lg:mt-0 mt-20">
            <h1 className="font-semibold text-[32px] mb-8">useful links</h1>
            <ul>
              <li className="cursor-pointer" onClick={() => navigate("/home")}>
                home
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/about-us")}
              >
                about us
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/our-courses")}
              >
                our courses
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/testimonials")}
              >
                testimonials
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/our community")}
              >
                our community
              </li>
            </ul>
          </div>
          <div className="capitalize text-white w-1/4">
            <h1 className="font-semibold text-[32px] mb-8 lg:mt-0 mt-10">
              community
            </h1>
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/help-centers")}
              >
                help centers
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/partners")}
              >
                partners
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/suggestion")}
              >
                suggestion
              </li>
              <li className="cursor-pointer" onClick={() => navigate("/blog")}>
                blog
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/our community")}
              >
                newsletter
              </li>
            </ul>
          </div>
          <div className="capitalize text-white lg:w-1/4 lg:mt-0 mt-10">
            <h1 className="font-semibold text-[32px] mb-8">subscribe us</h1>
            <span className="flex items-center">
              <input
                type="text"
                placeholder="nft123@gmail.com"
                className="h-12 px-4 bg-[#2A2A2B] outline-none lg:w-auto w-[60%]"
              />
              <button className="bg-[#054FB3] text-white text-sm font-medium h-12 whitespace-pre px-4 capitalize">
                send message
              </button>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
