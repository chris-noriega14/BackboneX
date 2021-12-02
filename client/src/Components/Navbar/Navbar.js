import './Navbar.css';

function Nav() {
  return (
    <div>
        <div>
  <div id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">

        <i className="bx bx-envelope"></i><a href="mailto:info@example.com">info@example.com</a>
        <i className='bx bx-phone'></i>+1 281 550 0789
      </div>
      <div className="social-links d-none d-md-block">

        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </div>

  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">BackBoneX</h1>

      <nav id="navbar" className="navbar">


           <ul>
          <li><a className="nav-link scrollto active" href="/dashboard">Home</a></li>
          <li><a className="nav-link scrollto" href="/exercises">Exercises</a></li>
          <li><a className="nav-link scrollto" href="/mylist">My List</a></li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        <li><a className="nav-link scrollto" href="/logout">Logout</a></li>
        </ul>
 </nav>

    </div>
  </header>
    </div>
    </div>
  );
}

export default Nav;