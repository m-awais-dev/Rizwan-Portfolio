import { Info } from "./constants/UserInfo";
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Footer=()=>{
    const socialLinks=[{link:"https://github.com/Code-Mars", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/chandrabhan-maurya", icon:IconBrandLinkedin}, 
    {link:"https://www.instagram.com/code.marshal_", icon:IconBrandInstagram}, {link:"https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon:IconBrandYoutube},
    {link:"https://www.leetcode.com/u/CodeMars", icon:IconBrandLeetcode}
];
const socialIcons=socialLinks.map((socialLink, index)=>{
    return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-scale-105 transition transform duration-300 ease-in-out">
   <socialLink.icon stroke={1.5} size={25} />
</a>
})
    return <div className=" mx-36 mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl text-primaryColor font-semibold">{Info.name}</div>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
        <div className="text-textColor text-xl ">Copyright &copy; {new Date().getFullYear()} {Info.name} | All Rights Reserved</div>
    </div>
}
export default Footer;