import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/footer.css";
import alcoholBan from "../images/camWine.png";

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="footerTitle">
        <ul className="footerIcon">
          <li>
            <Link to="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiFillInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsYoutube />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerList">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">shop</Link>
          </li>
          <li>
            <Link to="/">My account</Link>
          </li>
          <li>
            <Link to="/">Wine Investment</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Wine Storage</Link>
          </li>
          <li>
            <Link to="/">Meet the Team</Link>
          </li>
          <li>
            <Link to="/">Careers at Cru Wine</Link>
          </li>
          <li>
            <Link to="/">Information</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Cellar Valuation</Link>
          </li>
          <li>
            <Link to="/">news</Link>
          </li>
          <li>
            <Link to="/">recruit</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </div>
      <p>
        Responsible commitment, agree to the terms of this website. This content
        is intended for those of legal drinking age, please do not share or
        forward it to anyone under age.
      </p>
      <div>
        <div className="Prohibited">
          <h5>Enjoy responsibly</h5>
          <p>
            Alcoholic products are not for people under 18 years old and
            pregnant women
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
