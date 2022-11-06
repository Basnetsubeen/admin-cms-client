import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CustomInputField from "../../components/customInputField/CustomInputField";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useState } from "react";
import { loginUserAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user, navigate]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
    console.log(form);
  };
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInputField
              label="Email"
              type="email"
              name="email"
              required={true}
              palceholder="your@gmail.com"
              onChange={handleOnChange}
            />
            <CustomInputField
              label="Password"
              type="password"
              name="password"
              required={true}
              palceholder="********"
              onChange={handleOnChange}
            />
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
