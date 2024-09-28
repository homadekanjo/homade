import { FiSearch } from "react-icons/fi";
import { FaCommentAlt } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import FbNoPicture from "./fb_no_picture.png";
export default function FbNotifications() {
    const notifications = [1,2,3,4,5,6,7,8,9,10
    ];
  return (
    <main className="fb_notifications" dir="rtl">
      <header className="notifications_header">
        <h2>الإشعارات</h2>
        <FiSearch className="fb_friends_search" />
      </header>

      <section className="notifications">
        <h4>الأقدم</h4>
        { notifications.map(notification=>{
            return (
              <div className="notification" key={notification}>
                <div className="notification_picture">
                  <img src={FbNoPicture} alt="" />
                  <div className="notification_type">
                    <FaCommentAlt />
                  </div>
                </div>

                <p className="notification_description">
                  ذكرك <strong>اسم الحساب </strong>في تعليق{" "}
                </p>
                <BiDotsHorizontalRounded className="notification_options_icon" />
              </div>
            );
        }

        )}
        {/* <div className="notification">
          <div className="notification_picture">
            <img src={FbNoPicture} alt="" />
            <div className="notification_type">
              <FaCommentAlt />
            </div>
          </div>

          <p className="notification_description">
            ذكرك <strong>اسم الحساب </strong>في تعليق{" "}
          </p>
          <BiDotsHorizontalRounded className="notification_options_icon" />
        </div> */}
      </section>
    </main>
  );
}
