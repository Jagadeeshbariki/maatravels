import './App.css';
// import maaLogo from './Assets/MAA.svg';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Package from './Components/Packeges/Package';
import { useRef } from 'react';
import Contact from './Components/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop/Scroll';

function App() {

  // creating the references for the each section in the page

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const packageRef = useRef(null);
  const contactRef = useRef(null);

  // Function to smoothly scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="App-header">
       <div className="Logo">
          <div className="LogoWrapper">
            <img src="https://res.cloudinary.com/davyumn8l/image/upload/v1740852202/Maa_Tourisn_in_qao7yv.jpg" alt="Maa Logo" style={{}}/>
          </div>
       </div>

        {/* Passing scroll function to the Menu component */}

       <Menu scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} packageRef={packageRef} contactRef={contactRef}/>
       <div className="WhatsApp">
       <a href='https://wa.me/9642841566?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20travel%20services' target='_blank' rel='noreferrer'>Trip With Us</a>
       </div>
      </header>
      <div ref={homeRef} ><Home/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={contactRef}><Contact/></div>
      <div ref={packageRef}><Package/></div>
      
      <div><Footer scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} packageRef={packageRef} contactRef={contactRef}/></div>

      {/* Implementing the virtual Botton  */}
      <ScrollToTop/>
    </div>
  );
}

export default App;
