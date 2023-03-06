import React, { useState } from "react";

import {
  Form,
  FormGroup,
  Col,
  Checkbox,
  Button,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = UserAuth();
  console.log(createUser);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, pass);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    console.log(error);
  };
  return (
    <div className="form_custom">
      <Form onSubmit={handleSubmit}>
        <Col>
          <FormGroup controlId="formHorizontalEmail" bsSize="small">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                style={{ marginBottom: "1rem" }}
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formHorizontalPassword" bsSize="small">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                placeholder="Password..."
                onChange={(e) => setPass(e.target.value)}
              />
            </Col>
          </FormGroup>
        </Col>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" bsStyle="danger">
              Sign up
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignUp;
