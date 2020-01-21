import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
export default function Login(props) {
  console.log(props);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function validateForm() {
    const { email, password } = user;
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(props.history);
    // props.history.push("/admin");
    axios
      .get("/api/auth", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Formulair">
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <Button
            className="submitForm"
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
