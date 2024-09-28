import { CiHome } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { RiNotification2Line } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useState } from "react";
import FbHomePage from "../MainSections/FbHomePage";
import FbFriends from "../MainSections/FbFriends";
import FbNotifications from "../MainSections/FbNotifications";
import FbOptions from "../MainSections/FbOptions";
export default function FbHeader() {
  const [active, setActive] = useState("home");
  const [CurrentSection, setCurrentSection] = useState(<FbHomePage />);
  const handleSetActive = (e) => {
    ///////////
    const Id = e.target.id;
    switch (Id) {
      case "1":
        {
          setActive("options");
          setCurrentSection(<FbOptions />);
        }
        break;
      case "2":
        {
          setActive("notifications");
          setCurrentSection(<FbNotifications />);
        }
        break;
      case "3":
        {
          setActive("friends");
          setCurrentSection(<FbFriends />);
        }
        break;
      case "4":
        {
          setActive("home");
          setCurrentSection(<FbHomePage />);
        }
        break;
    }
  };

  const HeaderIcons = () => {
    return (
      <>
        <HiBars3
          id={1}
          className={`header_nav_icons ${active === "options" ? "active_options" : ""}`}
          onClick={handleSetActive}
        />
        <RiNotification2Line
          id={2}
          className={`header_nav_icons ${
            active === "notifications" ? "active_notifications" : ""
          }`}
          onClick={handleSetActive}
        />
        <LiaUserFriendsSolid
          id={3}
          className={`header_nav_icons ${active === "friends" ? "active_friends" : ""}`}
          onClick={handleSetActive}
        />
        <CiHome
          id={4}
          className={`header_nav_icons ${active === "home" ? "active_home" : ""}`}
          onClick={handleSetActive}
        />
        <div className="tracker"></div>
      </>
    );
  };
  return (
    <>
      <header className="fb_header">
        <HeaderIcons />
      </header>
      {CurrentSection}
    </>
  );
}
