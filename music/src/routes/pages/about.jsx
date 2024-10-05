import AboutHero  from '../pages/components/aboutHero.jsx'
import About from '../../components/about.jsx'
import Gallery from '../../components/gallery.jsx'
import Contact from '../../components/contact.jsx';
import Footer from '../../components/footer'
function about() {
  return (
    <div>
        <AboutHero />
        <About />
        <Gallery />
        <Contact />
        <Footer />
    </div>
  );
}

export default about;
