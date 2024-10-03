import "./App.css";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import OtherSongs from "./components/other-songs.jsx";
import Track from "./components/track.jsx";
// import Gallery from "./components/gallery.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <OtherSongs />
      <Track />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </>
  );
}
export default App;
