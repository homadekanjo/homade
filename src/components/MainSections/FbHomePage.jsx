import { BsFileImage } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
export default function FbHomePage() {
  return (
    <main className="fb_home_page">
      <section className="new_post">
        <div className="add_image">
          <BsFileImage />
        </div>
        <input
          type="text"
          className="what_do_you_think"
          placeholder="بم تفكر ؟"
        />
        <div className="main_account_picture"></div>
      </section>
      <section className="stories">
        <div className="story my_story">
          <div className="user_pic"></div>
          <div className="add_story">
            <IoMdAddCircle className="add_story_icon" />
            <p>إنشاء قصة</p>
          </div>
        </div>
        <div className="story story-1">
          <span className="friend_story_picture"></span>
        </div>
        <div className="story story-2">
          <span className="friend_story_picture"></span>
        </div>
        <div className="story story-3">
          <span className="friend_story_picture"></span>
        </div>
        <div className="story story-4">
          <span className="friend_story_picture"></span>
        </div>
        <div className="story story-4">
          <span className="friend_story_picture"></span>
        </div>
        <div className="story story-4">
          <span className="friend_story_picture"></span>
        </div>
      </section>
      <section className="posts">
        <div className="post" dir="rtl">
          <header className="post_header">
            <div className="post_account_details">
              <div className="post_account_picture"></div>
              <h3 className="post_account_name">اسم الحساب هنا</h3>
            </div>
            <div className="post_options">
              <BiDotsHorizontalRounded className="post_options_icons" />
              <RxCross1 className="post_options_icons" />
            </div>
          </header>
          <div className="post_content">
            <p className="post_description">وصف المنشور هنا</p>
            <div className="post_photo"></div>
          </div>
          <footer className="post_footer">
            <div className="post_interaction_details">
              <span className="interaction_detail like_details">
               <AiOutlineLike style={{color : 'blue'}}/> 100 
              </span>
              <span className="interaction_detail comment_details">
                50 تعليق
              </span>
              <span className="interaction_detail share_details">
                مشاركة واحدة
              </span>
            </div>
            <div className="post_interaction_icons">
              <span className="interaction_button like">
                <AiOutlineLike />
                أعجبني
              </span>
              <span className="interaction_button comment">
                <FaRegComment />
                تعليق
              </span>
              <span className="interaction_button copy_link">
                <AiOutlineLink />
                نسخ
              </span>
              <span className="interaction_button share">
                <PiShareFat />
                مشاركة
              </span>
            </div>
          </footer>
        </div>
        <div className="post" dir="rtl">
          <header className="post_header">
            <div className="post_account_details">
              <div className="post_account_picture"></div>
              <h3 className="post_account_name">اسم الحساب هنا</h3>
            </div>
            <div className="post_options">
              <BiDotsHorizontalRounded className="post_options_icons" />
              <RxCross1 className="post_options_icons" />
            </div>
          </header>
          <div className="post_content">
            <p className="post_description">وصف المنشور هنا</p>
            <div className="post_photo"></div>
          </div>
          <footer className="post_footer">
            <div className="post_interaction_details">
              <span className="interaction_detail like_details">
               <AiOutlineLike style={{color : 'blue'}}/> 100 
              </span>
              <span className="interaction_detail comment_details">
                50 تعليق
              </span>
              <span className="interaction_detail share_details">
                مشاركة واحدة
              </span>
            </div>
            <div className="post_interaction_icons">
              <span className="interaction_button like">
                <AiOutlineLike />
                أعجبني
              </span>
              <span className="interaction_button comment">
                <FaRegComment />
                تعليق
              </span>
              <span className="interaction_button copy_link">
                <AiOutlineLink />
                نسخ
              </span>
              <span className="interaction_button share">
                <PiShareFat />
                مشاركة
              </span>
            </div>
          </footer>
        </div>
        
      </section>
    </main>
  );
}
