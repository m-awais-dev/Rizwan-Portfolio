const links = ["About", "Projects", "Skills", "Experience", "Contact"];
const navLinks = (col, toggle) => {
  return links.map((link, index) => {
    return (
      <a
        key={index}
        className={`${
          col ? "flex flex-col items-center mt-4" : ""
        } text-textColor text-lg font-mono hover:text-primaryColor`}
        href={`#${link}`}
        onClick={toggle}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

export default navLinks;