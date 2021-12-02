import './Hero.css';
import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Signup from './Signup';


function Login() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>    
        <form action="/users/login" method="POST">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
</form>
          </Modal.Body>
          <Modal.Footer>
   
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
    
        </Modal>
      </>
    );
  }

  export default Login;