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

        <a href="#" className="twitter" ><i className="bx bxl-twitter"></i></a>
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
          <li><a className="nav-link scrollto " href="/exercise">Exercises</a></li>
          <li><a className="nav-link scrollto" href="/exercise/list">My List</a></li>
        <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
            </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
     
          <li><a href="/users/logout" className="nav-link" id="logout">Logout</a></li>
        </ul>
 </nav>

    </div>
  </header>
    </div>
    </div>
  );
}

export default Nav;