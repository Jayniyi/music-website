import "./gallery.css";
import Gallery1 from "../assets/img/gallery/1.png";
import Gallery2 from "../assets/img/gallery/2.png";
import Gallery3 from "../assets/img/gallery/3.png";
import Gallery4 from "../assets/img/gallery/4.png";
import Gallery5 from "../assets/img/gallery/5.png";
export default function gallery() {
  return (
    <div>
      <div className="gallery">
        <h1>Image Gallery</h1>
        <div className="gal">
          <img src={Gallery1} alt="" />
          <img src={Gallery2} alt="" />
          <img src={Gallery3} alt=""  />
          <img src={Gallery4} alt=""/>
          <img src={Gallery5} alt=""  />
        </div>
      </div>
    </div>
  );
}
