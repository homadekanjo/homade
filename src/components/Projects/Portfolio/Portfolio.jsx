"use client";
import { useState } from "react";
import "./ProtfolioStyle.css";
import { FaBars } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import MyProfile from "./PortfolioSections/MyProfile";
import Skills from "./PortfolioSections/Skills";
import Works from "./PortfolioSections/Works";
import Resume from "./PortfolioSections/Resume";
import { Contact } from "./PortfolioSections/Contact";
import { Footer } from "./PortfolioSections/Footer";
export default function Portfolio() {
  const [ScrolledToSkills, setScrolledToSkills] = useState(false);
  const [ScrolledToWorks, setScrolledToWorks] = useState(false);
  const [ScrolledToResume, setScrolledToResume] = useState(false);
  const [ScrolledToContact, setScrolledToContact] = useState(false);
  const [ScrolledToFooter, setScrolledToFooter] = useState(false);
  const [active, setActive] = useState(5);
  const [navVisibile, setNavVisibile] = useState(false);
  const [navLinks, setNavLinks] = useState([
    { id: 1, content: "Let's Talk", labelName: "footer" },
    { id: 2, content: "Skills", labelName: "skills" },
    { id: 3, content: "Resume", labelName: "resume" },
    { id: 4, content: "Contact", labelName: "contact" },
    { id: 5, content: "Hire me", labelName: "hire_me" },
  ]);
  const mainAnimation =
    "PopUpSkills 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards";
  window.addEventListener("scroll", () => {
    let ActualScroll = window.scrollY;
    // console.log(ActualScroll)
    if (ActualScroll >= 110) {
      setScrolledToSkills(true);
      setActive(2);
      if (ActualScroll > 250) {
        setScrolledToWorks(true);
      }
      if (ActualScroll > 600) {
        setScrolledToResume(true);
        setActive(3);
      }
      if (ActualScroll > 900) {
        setScrolledToContact(true);
        setActive(4);
      }
      if (ActualScroll > 1400) {
        setScrolledToFooter(true);
        setActive(1);
      }
    } else {
      setActive(5);
    }
  });
  const handleActive = (id) => {
    setActive(id);
  };
  const handleChangeMode = (e) => {
    const PageMode = document.documentElement.style;
    const isChecked = e.target.checked;
    PageMode.cssText = `
      --main--bg : ${isChecked ? "#000" : "#fff"};
      --mainFontColor : ${isChecked ? "#fff" : "#000"};
      `;
    isChecked
      ? (e.target.title = "change into daylight")
      : (e.target.title = "change into dark mode");
  };
  const handleShowNav = () => {
    navVisibile ? setNavVisibile(false) : setNavVisibile(true);
  };
  return (
    <>
      <header className="portfolio_header">
        <h2>Homade.</h2>
        <div className="change_Mood">
          <input
            title="mode"
            type="checkbox"
            name=""
            id="change_color_mode"
            onClick={handleChangeMode}
          />
          <BiMoon className="color_mode_icons moon" />
          <BiSun className="color_mode_icons sun" />
        </div>
        <nav
          dir="rtl"
          className="nav_bar"
          style={{ width: navVisibile ? "100vw" : "" }}
          onClick={handleShowNav}
        >
          <ul
            className="nav_links"
            onClick={(e) => e.stopPropagation()}
            dir="ltr"
          >
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <a
                    href={`#${navLink.labelName}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActive(navLink.id);
                    }}
                    className={`nav_link ${
                      active === navLink.id ? "active" : ""
                    }`}
                  >
                    {navLink.content}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <FaBars className="Bars" onClick={handleShowNav} /> */}
        <div className="Bars" onClick={handleShowNav}>
          <div className={`bar ${!navVisibile ? "" : "nav_visibile"}`}></div>
          <div className={`bar ${!navVisibile ? "" : "nav_visibile"}`}></div>
          <div className={`bar ${!navVisibile ? "" : "nav_visibile"}`}></div>
        </div>
      </header>
      <MyProfile />
      <Skills scrolledTo={ScrolledToSkills} ToScrollAnimation={mainAnimation} />
      <Works scrolledTo={ScrolledToWorks} ToScrollAnimation={mainAnimation} />
      <Resume scrolledTo={ScrolledToResume} />
      <Contact scrolledTo={ScrolledToContact} />
      <Footer scrolledTo={ScrolledToFooter} />
    </>
  );
}
