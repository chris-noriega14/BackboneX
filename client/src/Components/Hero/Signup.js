import './Hero.css';
import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import registerApi from '../../utils/httpRoutesReg';
import auth from "../../utils/auth"


function Signup() {
  const emailInput = useRef()
  const password1Input = useRef()
  const password2Input = useRef()
  const first_nameInput = useRef()
  const last_nameInput = useRef()
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)

    registerApi.register(
      first_nameInput.current.value,
      last_nameInput.current.value,
      emailInput.current.value,
      password1Input.current.value,
      password2Input.current.value,
      )
      .then((res) => {
        console.log(res)
      auth.login(res.data.token);
    })
  }
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
              <label htmlFor="first_name">First Name</label>
              <input
              ref={first_nameInput}
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
              ref={last_nameInput}
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
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
              ref={password1Input}
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter new Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
              ref={password2Input}
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