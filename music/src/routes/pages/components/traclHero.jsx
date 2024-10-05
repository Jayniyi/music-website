import Logo from "../../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Styles from "../../pages/components/aboutHero.module.css";
export default function header() {
  return (
    <div className={Styles.hero}>
      <div className="header">
        <img src={Logo} className={Styles.logo} alt="Vite logo" />
        <div className="headList">
          <ul>
            <li>
            <Link to='/'>home</Link> 
            </li>
            <li>
              <Link to="/about">About </Link> 
            </li>
            <li>
              <Link to="/tracl">track</Link> 
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
            <Link to="/contact">contact</Link> 
            </li>
          </ul>
        </div>
        <div className="socials">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="ig" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="ig" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} className="ig" />
          </a>
        </div>
      </div>
      <div>
        <h1 className={Styles.musician}>My Track</h1>
      </div>
    </div>
  );
}
