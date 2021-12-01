import './Hero.css';
import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';


function Signup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Signup
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            </form>
          </Modal.Body>
          <Modal.Footer>
           <Button variant="primary" onClick={handleClose}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Signup;