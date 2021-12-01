import './Hero.css';

function Hero() {
  return (
    <div>
        
  <div id="hero" className="d-flex align-items-center">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <h1>Welcome to BackBoneX</h1>
      <h3 className="hcolor">Please login to view exercises!</h3>

     
      <button type="button" className="btn btn-info btn-round" data-toggle="modal" data-target="#loginModal" id="login">Login</button>  

   
     <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-title text-center">
              <h4>Login</h4>
            </div>
            <div className="d-flex flex-column text-center">
             <form action="/users/login" method="POST">
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
              <div className="text-center text-muted delimiter">or use a social network</div>
              <div className="d-flex justify-content-center social-buttons">
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="bx bxl-twitter"></i>
                </button>
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="bx bxl-facebook"></i>
                </button>
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                  <i className="bx bxl-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
          <div className="modal-footer d-flex justify-content-center">
            <div className="signup-section">Not a member yet?</div>
         
      <button type="button" className="btn btn-info btn-round" data-toggle="modal" data-target="#signupModal" id="login">Sign Up</button>  

          </div>

      </div>
    </div>
    </div>


     <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-title text-center">
              <h4>Sign Up</h4>
            </div>
            <div className="d-flex flex-column text-center">
             <form action="/users/register" method="POST">
              <div className="form-group">
          <label for="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="form-control"
            placeholder="First Name"
          />
        </div>
         <div className="form-group">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter new Password"
          />
        </div>
           <div className="form-group">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
             
    </div>
    </div>
    </div>

    </div>
  </div>
    </div>
    </div>
      );
    }
    
    export default Hero;