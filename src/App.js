import logo from './logo.svg';
import './App.css';
import Homee from './components/homee'
import Nav from './components/nav'
import SocialLinks from './components/SocialLinks';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import ContactUs from './components/ContactUs';



function App() {
  return (
   <div>
     <Nav/>
     <Homee/>
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <Experience/>
     <ContactUs/>


      {/* <div className='bg-indigo-600 w-full h-screen'></div> */}
      </div>
  );
}

export default App;
