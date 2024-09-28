import restaurant from "../media/works/restaurant.png";
import cruds from "../media/works/cruds.png";
import parallax from "../media/works/parallax.png";
import register from "../media/works/register.png";
import { useRef } from "react";
export default function Works({ scrolledTo, ToScrollAnimation }) {
  const stylerScrolledTo = {
    animation: scrolledTo ? ToScrollAnimation : "",
  };

  const works = [
    { id: 1, title: "Restaurant Website", photo: restaurant },
    { id: 2, title: "Cruds Pr management", photo: cruds },
    { id: 3, title: "Parallax ", photo: parallax },
    { id: 4, title: "Sign-in-up interface", photo: register },
  ];
  const listOfWorks = works.map((work) => {
    return (
      <div key={work.id} className="work" style={stylerScrolledTo}>
        <img src={work.photo} alt="" className="work_image" />
        <h5 className="work_title">{work.title}</h5>
      </div>
    );
  });
  return (
    <section className="my_works">
      <header className="works_header" style={stylerScrolledTo}>
        <h3>Works</h3>
        <p>Here are some of my works : </p>
      </header>
      <main className="works_details">{listOfWorks}</main>
    </section>
  );
}
