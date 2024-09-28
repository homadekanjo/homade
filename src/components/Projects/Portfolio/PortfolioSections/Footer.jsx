import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
export const Footer = ({
  scrolledTo,
  ToScrollAnimation = "ShowContactSection 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
}) => {
  const stylerScrolledTo = {
    animation: scrolledTo ? ToScrollAnimation : "",
  };
  return (
    <footer className="portfoilo_footer" id="footer">
      <h1 style={stylerScrolledTo}>Let's Talk</h1>
      <ul className="contact_media" style={stylerScrolledTo}>
        <li>
          <a href="#" className="contact_link">
            <FaTelegram />
          </a>
        </li>
        <li>
          <a href="#" className="contact_link">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="#" className="contact_link">
            <FaXTwitter />
          </a>
        </li>
      </ul>
      <h4 className="copyright" style={stylerScrolledTo}>
        copyright &#169;2024 Homade Kanjo All Rights Reserved
      </h4>
    </footer>
  );
};
