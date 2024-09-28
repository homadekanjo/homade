import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
export default function Skills({ scrolledTo, ToScrollAnimation }) {
  const stylerScrolledTo = {
    animation: scrolledTo ? ToScrollAnimation : "",
  };
  const mySkills = [
    { id: 1, name: "HTML", progress: 86, icon: <FaHtml5 /> },
    { id: 2, name: "CSS", progress: 80, icon: <FaCss3Alt /> },
    { id: 3, name: "JAVASCRIPT", progress: 75, icon: <BiLogoJavascript /> },
    { id: 4, name: "REACT JS", progress: 70, icon: <FaReact /> },
  ];
  const listOfMySkills = mySkills.map((skill) => {
    return (
      <div className="skill" key={skill.id}>
        <div className="skill_title">
          <div className="skill_icon">{skill.icon}</div>
          <h4 className="skill_name">{skill.name}</h4>
        </div>
        <div className="skill_level">
          <div
            className="skill_progress"
            style={{ width: `${skill.progress}%` }}
          ></div>
          <div className="tooltip_progress">
            <div className="tooltip_thumb"></div>
            {skill.progress}%
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="my_skills" id="skills">
      <header className="skills_header" style={stylerScrolledTo}>
        <h3>My Skills</h3>
        <p>here are my skills : </p>
      </header>
      <main className="skills_details">
        <div className="skills_levels" style={stylerScrolledTo}>
          {listOfMySkills}
        </div>
        <div className="skills_icons" style={stylerScrolledTo}>
          <div className="icon">
            <FaPython />
          </div>
          <div className="icon">
            <BiLogoJavascript />
          </div>
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </main>
    </section>
  );
}
