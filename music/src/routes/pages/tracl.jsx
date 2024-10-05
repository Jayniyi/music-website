import Track from "../../routes/pages/components/traclHero";
import Track2 from "../../components/track";
import OtherSongs from "../pages/components/track-othersongs";
import Contact from "../../components/contact.jsx";
import  Footer from '../../components/footer'
function tracl() {
  return (
    <div>
      <Track />
      <Track2 />
      <OtherSongs />
      <Contact />
      <Footer />
    </div>
  );
}

export default tracl;
