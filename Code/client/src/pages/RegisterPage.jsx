import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form";

import "../style/Register.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/calculator");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="register">
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <h1 className="h1Register">Register</h1>
      <Form onSubmit={onSubmit} className="form">
        <Form.Group className="mb-3" controlId="formsBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="username"
            type="text"
            {...register("username", { required: true })}
            placeholder="Enter Username"
            />
        </Form.Group>
        {errors.username && <p className="requiered">Username is required</p>}
        <Form.Group className="mb-3" controlId="formsBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
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
            placeholder="Enter Password"
          />
        </Form.Group>
        {errors.password && <p className="required">Password is required</p>}
        <Button type="submit" variant="success" className="buttonRegister">Register</Button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
