import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

import "../style/Login.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navegate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navegate("/calculator");
    }
  }, [isAuthenticated]);

  return (
    <div className="login">
      {loginErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <h1 className="h1Login">Login</h1>
      <Form onSubmit={onSubmit} className="form">
        <Form.Group className="mb-3" controlId="formsBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="emailLogin"
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
          />
        </Form.Group>
        {errors.email && <p className="required">Email is required</p>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
        </Form.Group>
        {errors.password && <p className="required">Password is required</p>}
        <Button type="submit" className="buttonLogin">Login</Button>
      </Form>

      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
