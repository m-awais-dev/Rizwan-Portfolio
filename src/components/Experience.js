import React from "react";
import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "./constants/UserInfo";

const Experience = () => {
  
  const TimelineItem = (items) => {
    return items.map((item, index) => (
      <Timeline.Item
        data-aos="fade-up"
        data-aos-duration="800"
        key={index}
        className="!pt-12 !mb-2 sm-mx:p-1"
        bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}
      >
        <div className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2">
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16 md-mx:w-14" src={item.image} alt="Company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">{item.role}</div>
                    <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs ">
                {item.desc}
            </div>

            <div className="text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1"><div className="font-semibold text-white">Skills:</div>
                <div className="flex gap-1 flex-wrap">
            {item.skills.map((skill, index) => (
              <div key={index}> &#x2022; {skill} </div>
            ))}
            </div>
          </div>
        </div>
      </Timeline.Item>
    ));
  };
  return (
    <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Experience">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl  mb-10 font-bold text-center text-white"><span className="text-primaryColor">04.&nbsp;</span>Experience</h1>
      <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
        {TimelineItem(ExperienceInfo)}
        <Timeline.Item
          bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}
        ></Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
