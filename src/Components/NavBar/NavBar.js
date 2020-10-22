import React, { useEffect } from "react";
import "./NavBar.css";

//Effects
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 450) {
      //400
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }
  return (
    <header className={x.join(" ")}>
      <nav className="navigation">
        <AnchorLink offset="100" href="#skills">
          <p>Skills</p>
        </AnchorLink>

        <AnchorLink offset="100" href="#projects">
          <p>Projects</p>
        </AnchorLink>

        <AnchorLink offset="100" href="#about">
          <p>About</p>
        </AnchorLink>

        <AnchorLink offset="100" href="#contact">
          <p>Contact</p>
        </AnchorLink>
      </nav>
    </header>
  );
};

export default Navbar;
