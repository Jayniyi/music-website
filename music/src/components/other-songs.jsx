import VideOne from "../assets/img/video/1.png";
import VideTwo from "../assets/img/video/2.png";
import VideThree from "../assets/img/video/3.png";
import Videfour from "../assets/img/video/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./othersongs.css";
export default function otherSongs() {
  return (
    <div className="joo">
      <div className="single_video">
        <div className="thumb">
          <img src={VideOne} alt="" />
        </div>
        <div className="hover_elements">
          <div className="hover_inner">
            <div className="video">
              <a
                className="popup-video"
                href="https://www.youtube.com/watch?v=Hzmp3z6deF8"
              >
                <FontAwesomeIcon className="play" icon={faPlay}  />
              </a>
            </div>
            <span>New York Show-2018</span>
            <h3>
              <a href="#">Shadows of My Dream</a>
            </h3>
          </div>
        </div>
      </div>
      <div className="single_video">
        <div className="thumb">
          <img src={VideTwo} alt="" />
        </div>

        <div className="hover_elements">
          <div className="hover_inner">
            <div className="video">
              <a
                className="popup-video"
                href="https://www.youtube.com/watch?v=Hzmp3z6deF8"
              >
                <FontAwesomeIcon icon={faPlay} className="play" />
              </a>
            </div>
            <span>New York Show-2018</span>
            <h3>
              <a href="#">Shadows of My Dream</a>
            </h3>
          </div>
        </div>
      </div>
      <div className="single_video">
        <div className="thumb">
          <img src={VideThree} alt="" />
        </div>

        <div className="hover_elements">
          <div className="hover_inner">
            <div className="video">
              <a
                className="popup-video"
                href="https://www.youtube.com/watch?v=Hzmp3z6deF8"
              >
                <FontAwesomeIcon icon={faPlay}className="play" />
              </a>
            </div>
            <span>New York Show-2018</span>
            <h3>
              <a href="#">Shadows of My Dream</a>
            </h3>
          </div>
        </div>
      </div>
      <div className="single_video">
        <div className="thumb">
          <img src={Videfour} alt="" />
        </div>

        <div className="hover_elements">
          <div className="hover_inner">
            <div className="video">
              <a
                className="popup-video"
                href="https://www.youtube.com/watch?v=Hzmp3z6deF8"
              >
                <FontAwesomeIcon icon={faPlay} className="play" />
              </a>
            </div>
            <span>New York Show-2018</span>
            <h3>
              <a href="#">Shadows of My Dream</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
