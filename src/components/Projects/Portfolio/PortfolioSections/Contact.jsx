import { FaArrowRightLong } from "react-icons/fa6";
export const Contact = ({
  scrolledTo,
  ToScrollAnimation = "ShowContactSection 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
}) => {
  const stylerScrolledTo = {
    animation: scrolledTo ? ToScrollAnimation : "",
  };
  return (
    <section className="contact_me" id="contact">
      <header className="contact_header">
        <h3>Contact</h3>
      </header>
      <div className="contact_form_container">
        <div className="form_descrip" style={stylerScrolledTo}>
          <h1>You need</h1>
          <p>awesome desgin for your website leave a request</p>
        </div>
        <FaArrowRightLong className="form_arrow" />
        <form className="request_form" style={stylerScrolledTo}>
          <div className="email">
            <input type="text" name="" id="" className="your_email" required />
            <label>Your Email</label>
          </div>
          <div className="name">
            <input type="text" name="" id="" className="your_name" required />
            <label htmlFor="">your Name</label>
          </div>
          <div className="request_message">
            <textarea className="your_message" required></textarea>
            <label htmlFor="">Your message</label>
          </div>
          <button className="send_request_btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
