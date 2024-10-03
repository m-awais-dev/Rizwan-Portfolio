import React, { useState } from "react";
import navLinks from "./constants/NavbarData";
import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect } from "react";



const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true)
    else setShadow(false)
    setLastScrollY(window.scrollY);
  };
  useEffect(()=>{
    window.addEventListener('scroll' , controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar)
  })
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  return (
    <nav
      className={`flex fixed top-0 ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out  w-full z-10 bg-bgColor h-28  px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 `}
    >
      <IconHexagonLetterR
        className="z-10"
        size={isMobile ? 45 : 60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="bs:flex gap-8 hidden">{navLinks(false)}</div>
      <SideBar />
    </nav>
  );
};
export default Navbar;
export { navLinks };
