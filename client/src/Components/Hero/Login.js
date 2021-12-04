import './Hero.css';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Signup from './Signup';
import loginApi from '../../utils/httpRoutes';
import auth from "../../utils/auth"


function Login() {
  const emailInput = useRef()
  const passwordInput = useRef()
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   loginApi.login("sdasd12f@gmail.com","123456789").then((res) => {
  //     console.log(res);
  //   })
  // })

  const handleClose = () => {
    setShow(false)

    loginApi.login(emailInput.current.value, passwordInput.current.value).then((res) => {
      console.log("hey")
      console.log(res.data.UsersData.email);
      auth.login(res.data.token,res.data.UsersData.email);
    })
  }
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
              ref={emailInput}
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
              ref={passwordInput}
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