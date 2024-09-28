import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import MyProfilePicture from "../media/profile_picture.png";
export default function MyProfile() {
  return (
    <main className="my_profile" id="hire_me">
      <section className="my_profile_description">
        <h1 className="welcome">Hello, I'm Homade !!</h1>
        <h3 className="job_title">Web</h3>
        <p className="description">eager to websites building...</p>
        <div className="my_profile_buttons">
          <button className="hire_me">Hire me</button>
          <button className="resume_download">
            Resume
            <MdOutlineFileDownload />
          </button>
        </div>
        <div className="social_links">
          <a href="#" className="social_link">
            <FaFacebook />
          </a>
          <a href="#" className="social_link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social_link">
            <FaSquareInstagram />
          </a>
          <a href="#" className="social_link">
            <FaTelegram />
          </a>
        </div>
      </section>
      <section className="profile_picture_section">
        <div className="picture_container">
          <img src={MyProfilePicture} className="profile_picture" />
        </div>
      </section>
    </main>
  );
}
