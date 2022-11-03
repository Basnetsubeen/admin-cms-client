import React from "react";
import { Alert, Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInputField from "../../components/customInputField/CustomInputField";
import { useState } from "react";
import { postUser } from "../../components/helper/axiosHelper";
const AdminRegistration = () => {
  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Messi@10",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "10000010",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "sydney",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnsubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }
    const result = await postUser(rest);
    console.log(result);
    setResponse(result);
  };
  console.log(response);
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnsubmit}>
            <h1>Admin Registration</h1>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
            <hr />
            {fields.map((item, i) => (
              <CustomInputField key={i} {...item} onChange={handleOnChange} />
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminRegistration;
