import './App.css';
// import maaLogo from './Assets/MAA.svg';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Package from './Components/Packeges/Package';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="Logo">
          <div className="LogoWrapper">
            <img src="https://res.cloudinary.com/davyumn8l/image/upload/v1739979213/WhatsApp_Image_2025-02-19_at_8.43.04_PM_sdhgl7.jpg" alt="Maa Logo" style={{}}/>
          </div>
       </div>
       <Menu/>
       <div className="WhatsApp">
        <a href='https://wa.me/919160782356?text="I%20Want%20To%20Trip%20With%20You' target='_blank' rel='noreferrer'>Trip With Us</a>
       </div>
      </header>
      <Home/>
      <About/>
      <Package/>
      <Footer/>
    </div>
  );
}

export default App;
