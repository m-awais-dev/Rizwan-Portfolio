import React from 'react'
import { SkillInfo } from './constants/UserInfo'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className="px-16 md-mx:px-8 sm-mx:px-4 md-mx:mx-10 mx-6 my-10 font-mono" id="skills">
            <h1 className="text-4xl text-center mb-10 font-bold text-white sm-mx:text-3xl xs-ms:text-2xl">Skills</h1>
            <div className='flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2'>
            {
                SkillInfo.map((skill, index) => <SkillCard key={index} title={skill.title} skill={skill.skills}/>)
            }
            </div>
        </div>
  )
}

export default Skills