import Logo from "../assets/img/logo.png";
import "./header.css";
import Fireboy from "../assets/img/experts/fireboy.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function header() {
  return (
    <div className="hero">
      <div className="header">
        <img src={Logo} className="logo" alt="Vite logo" />
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
        <h1 className="musician">Musician</h1>
        <div className="first-music">
          <div className="fire">
            <img src={Fireboy} alt="" />
          </div>
          <div className="dml">
            <h2>Ajoke</h2>
            <h3>Fireboy DML</h3>
            <p>1 November, 2018</p>
            <div className="audioplayer">
              <audio preload="auto" controls className="lol">
                <source src="../src/assets/audio/Ajoke_Fireboy_DML_Naijapals.mp3" />
              </audio>
            </div>
          </div>
          {/* <div>
            <button>Buy Song</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
