import "./about.css";
import AboutImg from "../assets/img/about/about_1.png";
import Signature from "../assets/img/about/Signature.png";

export default function header() {
    return (
        <div className="about">
            <div className="about-img">
                <img src={AboutImg} alt="" />
            </div>
            <div className="abt">
                <h1>Fireboy Dml</h1>
                <p>
                    Esteem spirit temper too say adieus who direct esteem. It esteems
                    luckily or picture placing drawing. Apartments frequently or
                    motionless on reasonable projecting expression enim ad minim veniam
                    quis nostrud exercitation we have supported programmes to help
                    alleviate human suffering through animal welfare when people might
                    depend.
                </p>
                <img src={Signature} alt="" />
            </div>
        </div>
    );
}
