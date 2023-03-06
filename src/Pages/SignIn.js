import { useState } from "react";
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

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, pass);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      console.log(error);
    }
  };
  return (
    <div className="form_custom">
      <Form horizontal onSubmit={handleSubmit}>
        <FormGroup controlId="formHorizontalEmail" bsSize="medium">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword" bsSize="medium">
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

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" bsStyle="danger">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignIn;
