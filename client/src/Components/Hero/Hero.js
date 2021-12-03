import './Hero.css';
import Login from './Login';
import Signup from './Signup';
import Auth from '../../utils/auth.js';

function Hero() {
  return (
    <div>

      <div id="hero" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
        {Auth.loggedIn() ? (          
          <h1>Welcome to BackBoneX</h1>
          ) : (
            <div>
          <h1>Welcome to BackBoneX</h1>
          <h3 className="hcolor">Please login to view exercises!</h3>
          <Login />    <Signup />
          </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default Hero;