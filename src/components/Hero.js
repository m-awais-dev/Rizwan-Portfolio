import React from "react";
import { Info } from "./constants/UserInfo";
import { Typewriter } from "react-simple-typewriter";
import { Button, useMatches } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import { NeonGradientCard } from "./magicui/Neon-Gradiant";
import Particles from "./magicui/Particles";

const Hero = () => {
  const btn = useMatches({
    xsm:'xs',
    sm:"sm",
    md:"md",
    lg:"lg"   
  })
  // const [opened, { open, close }] = useDisclosure(false);
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="800"
      className="flex mt-28 relative overflow-hidden justify-around items-center font-mono px-16 py-10 h-fit lg-mx:justify-between
      bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:overflow-visible bs-mx:gap-6 md-mx:px-6 sm-mx-px-4 xs-ms:py-4 xs-ms:px-2"
      id="bg"
    >
      <Particles
        className="absolute -z-20 inset-0"
        quantity={1000}
        ease={80}
        vx={0.1}
        vy={0.1}
        color="#64FFDA"
        refresh
      />

      <div className="ml-10  w-3/5 bs-mx:w-full bs-mx:ml-0 flex flex-col lg-mx:gap-3 bs-mx:items-center">
        <div className="text-primaryColor text-3xl lg-mx:text-2xl sm-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
        <div className="text-white text-[4.25rem] lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px] font-extrabold">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-semibold lg-mx:text-2xl ">
          I'm a&nbsp;
          <span className="text-primaryColor">
            <Typewriter
              words={Info.stack}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs ">
          {Info.bio}
        </div>
        <div className="flex gap-3">
          <Button
            // onClick={open}
            className="focus-visible:!outline-none !text-bgColor !w-fit"
            size={btn}
            variant="filled"
            color="#64FFDA"
          >
            Check Resume
          </Button>
          <Button
            component="a"
            href="/Marshal Resume.pdf"
            download={Info.name}
            className="focus-visible:!outline-none !text-primaryColor !w-fit"
            size={btn}
            variant="outline"
            color="#64FFDA"
            rightSection={<IconDownload size={20} />}
          >
            Download
          </Button>
        </div>
      </div>
      <div
        className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit"
        id="photo"
      >
        <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 items-center justify-center text-center">
          <img
            className="w-full h-full rounded-full "
            src="/aboutpic.png"
            alt="profile"
          />
        </NeonGradientCard>
      </div>
      {/* <ResumeViewer opened={opened} close={close} /> */}
    </div>
  );
};

export default Hero;
