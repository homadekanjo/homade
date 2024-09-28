import FbNoPicture from "./fb_no_picture.png";
import { FiSearch } from "react-icons/fi";
export default function FbFriends() {
  const friendRequests = [
    { id: 1, accountName: "اسم الحساب" },
    { id: 2, accountName: "اسم الحساب" },
    { id: 3, accountName: "اسم الحساب" },
    { id: 4, accountName: "اسم الحساب" },
    { id: 5, accountName: "اسم الحساب" },
    { id: 6, accountName: "اسم الحساب" },
    { id: 7, accountName: "اسم الحساب" },
    { id: 8, accountName: "اسم الحساب" },
    { id: 9, accountName: "اسم الحساب" },
    { id: 10, accountName: "اسم الحساب" },
  ];
  return (
    <main className="fb_friends_section" dir="rtl">
      <header className="fb_friends_header">
        <div className="upper_section">
          <h2>الأصدقاء</h2>
          <FiSearch className="fb_friends_search" />
        </div>
        <div className="lower_section">
          <h3>الاقتراحات</h3>
          <h3>أصدقاؤك</h3>
        </div>
        <hr />
      </header>
      <section className="friend_requsests">
        <div className="title">
          <h2>
            طلبات الصداقة <span>{friendRequests.length}</span>
          </h2>
          <a href="" className="view_all">
            عرض الكل
          </a>
        </div>
        <div className="friend_request_accounts">
          {friendRequests.map((friendRequest) => {
            return (
              < >
                <div className="friend_requsest" key={friendRequest.id}>
                  <div className="friend_request_account_picture">
                    <img src={FbNoPicture} alt="" />
                  </div>
                  <div className="friend_request_account_details">
                    <h3 className="friend_request_account_name">اسم الحساب</h3>
                    <div className="accept_discard_buttons">
                      <button className="accept">تأكيد</button>
                      <button className="discard">حذف</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <hr />
        <h2>أشخاص قد تعرفهم</h2>
      </section>
    </main>
  );
}
