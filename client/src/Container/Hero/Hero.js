import './Hero.css';
import Login from './Login';
import Signup from './Signup';

function Hero() {
  return (
    <div>
        
  <div id="hero" className="d-flex align-items-center">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <h1>Welcome to BackBoneX</h1>
      <h3 className="hcolor">Please login to view exercises!</h3>
<Login />    <Signup />
     
  </div>
  </div>
    </div>
  
      );
    }
    
    export default Hero;