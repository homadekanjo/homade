import { FiSearch } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import FbNoPicture from "./fb_no_picture.png";
import { FaAngleDown } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiFlagFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";
import { RiMessengerFill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoIosBookmark } from "react-icons/io";
import { BiSolidCalendarStar } from "react-icons/bi";
import { BiSolidGift } from "react-icons/bi";
import { FcAssistant } from "react-icons/fc";
import { IoIosHelpCircle } from "react-icons/io";
import { ImLifebuoy } from "react-icons/im";
import { RiInbox2Line } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";
import { RiShieldUserFill } from "react-icons/ri";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdLock, MdMessage } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
export default function FbOptions() {
  const accounts = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ]
  return (
    <main className="fb_options">
      <header className="options_header" dir="rtl">
        <h2>القائمة</h2>
        <div className="options_header_icons">
          <IoSettings className="fb_options_settings" />
          <FiSearch className="fb_options_search" />
        </div>
      </header>
      <section className="profiles" dir="rtl">
        <div className="my_profiles">
          <div className="my_profile">
            <div className="my_profile_picture">
              <img src={FbNoPicture} alt="" />
            </div>
            <h4>اسم حسابي</h4>
          </div>
          <FaAngleDown className="show_my_profiles" />
        </div>

        <div className="creat_another_profile">
          <IoIosAddCircle className="add" />
          <h4>إنشاء ملف شخصي آخر</h4>
        </div>
      </section>
      <section className="my_shortcuts" dir="rtl">
        <h5>اختصاراتك</h5>
        <div className="friends_profiles_shortcuts">
          {accounts.map((account) => {
            return (
              <div className="friend_profile" key={account}>
                <div className="friend_profile_picture">
                  <img src={FbNoPicture} alt="" />
                  <div className="mark">
                    <FaUserGroup />
                  </div>
                </div>

                <h6>اسم الحساب</h6>
              </div>
            );
          })}
        </div>
      </section>
      <section className="more_options">
        <div className="items">
          <div className="column1 column">
            {/* ------------- */}
            <div className="option item-1" dir="rtl">
              <div className="option_icon">
                <HiUsers />
              </div>
              <div className="option_title">الأصدقاء (30) على الإنترنت</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <FaClockRotateLeft />
              </div>
              <div className="option_title">الذكريات</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <RiFlagFill />
              </div>
              <div className="option_title">الصفحات</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <FaGamepad />
              </div>
              <div className="option_title">الألعاب</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <FaTag />
              </div>
              <div className="option_title">العناصر</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <RiMessengerFill />
              </div>
              <div className="option_title">Messenger Kids</div>
            </div>
          </div>
          <div className="column2 column">
            {/* ------------- */}
            <div className="option item-1_column2" dir="rtl">
              <div className="option_icon">
                <IoNewspaperOutline />
              </div>
              <div className="option_title">الأخبار</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <TiGroup />
              </div>
              <div className="option_title">المجموعات</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <IoIosBookmark />
              </div>
              <div className="option_title">العناصر المحفوظة</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <BiSolidCalendarStar />
              </div>
              <div className="option_title">المناسبات</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <BiSolidGift />
              </div>
              <div className="option_title">أعياد الميلاد</div>
            </div>
            <div className="option" dir="rtl">
              <div className="option_icon">
                <FcAssistant />
              </div>
              <div className="option_title">رسومات الأفتار</div>
            </div>
          </div>
        </div>
        <div className="expand_narrow">عرض أقل</div>
      </section>
      <section className="help_support" dir="rtl">
        <div
          className="title"
          onClick={(e) => e.target.classList.toggle("height_expanded")}
        >
          <IoIosHelpCircle className="help_icon" />
          <h3>المساعدة والدعم</h3>
        </div>
        <div className="help_options">
          <div className="help_option">
            <div className="icon">
              <ImLifebuoy />
            </div>
            <h4>مركز المساعدة</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <RiInbox2Line />
            </div>
            <h4>البريد الوارد للدعم</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <IoIosWarning />
            </div>
            <h4>الإبلاغ عن مشكلة</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <RiShieldUserFill />
            </div>
            <h4>السلامة</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <BiSolidBookAlt />
            </div>
            <h4>الشروط والسياسات</h4>
          </div>
        </div>
        <div
          className="title"
          onClick={(e) => e.target.classList.toggle("height_expanded")}
        >
          <IoSettings className="help_icon" />
          <h3>الإعدادات والخصوصية</h3>
        </div>
        <div className="help_options">
          <div className="help_option">
            <div className="icon">
              <FaUserCircle />
            </div>
            <h4>الإعدادات</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <MdLock />
            </div>
            <h4>مركز الخصوصية</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <FaMobileScreen />
            </div>
            <h4>طلبات الأجهزة</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <PiNewspaperClippingFill />
            </div>
            <h4>أحدث نشاط إعلاني</h4>
          </div>
          <div className="help_option">
            <div className="icon">
              <FaLink />
            </div>
            <h4>سجل الروابط</h4>
          </div>
        </div>
        <div
          className="title meta_title"
          onClick={(e) => e.target.classList.toggle("height_expanded")}
        >
          <BsGrid3X3GapFill className="help_icon" />
          <h3>أيضًا من Meta</h3>
        </div>
        <div className="help_options meta_options">
          <div className="help_option">
            <div className="icon threads">
              <BsFillThreadsFill />
            </div>
            <h4>Threads</h4>
          </div>
          <div className="help_option">
            <div className="icon messenger">
              <FaFacebookMessenger />
            </div>
            <h4>Messenger</h4>
          </div>
          <div className="help_option">
            <div className="icon whatsapp">
              <FaWhatsapp />
            </div>
            <h4>واتساب</h4>
          </div>
        </div>
        <div className="log_out">تسجيل الخروج</div>
      </section>
    </main>
  );
}
