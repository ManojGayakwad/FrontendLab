import React, { useState } from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Card(props) {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.warn(Fname, Lname, email, password);
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <Form>
        <div className="Lname">
          <label className="label">First name</label>
          <input
            className="input"
            type="text"
            placeholder="First name"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="Lname">
          <label className="label">Last name</label>
          <input
            className="input"
            type="text"
            placeholder="Last name"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div class="email">
          <label className="label">Email address</label>
          <input
            className="input"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="label">Password</label>
          <input
            className="input"
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Form>
      <div className="button">
        <Button variant="contained" onClick={collectData}>
          Sign Up
        </Button>
      </div>
      <p className="para">
        Already registered <Link to="/appa">sign in?</Link>
      </p>
    </div>
  );
}

export default Card;
