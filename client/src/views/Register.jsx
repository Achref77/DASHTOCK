import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
export default function Login(props) {
  console.log(props);

  const [newUser, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordC: ""
  });

  function validateForm() {
    const { email, password } = newUser;
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(props.history);
    // props.history.push("/admin");
    axios
      .post("/api/users", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Formulair">
          <FormGroup controlId="Name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="texe"
              value={newUser.name}
              onChange={e => setUser({ ...newUser, name: e.target.value })}
            />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={newUser.email}
              onChange={e => setUser({ ...newUser, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={newUser.password}
              onChange={e => setUser({ ...newUser, password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="passwordC" bsSize="large">
            <ControlLabel>PasswordC</ControlLabel>
            <FormControl
              value={newUser.passwordC}
              onChange={e => setUser({ ...newUser, passwordC: e.target.value })}
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
