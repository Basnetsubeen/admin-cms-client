import React, { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { emailVerifyAdminUser } from "../../components/helper/axiosHelper";

//Frontend
//show the spinner first
//grab the c and e form the query string parameters
//create an axios function to call the server

//Backend
//create api endpoint to receive this code
//check if the combination of the email and the code exist in the user table,if so activate the user and send email notification

const EmailVerification = () => {
  const [isPending, setIspending] = useState(true);
  const [queryParams] = useSearchParams();
  const [response, setResponse] = useState({});

  //
  useEffect(() => {
    const obj = {
      emailVerificationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    //call axios to call the server
    (async () => {
      const result = await emailVerifyAdminUser(obj);
      setResponse(result);
      setIspending(false);
    })();
  }, [queryParams]);
  return (
    <div>
      <Header />
      <Container className="page-main">
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner
              variant="primary"
              animation="border"
              className="m-auto mb-4"
            />
            <h5>Email Verification Process has began, please wait .....</h5>
          </Card>
        )}
        {response.message && (
          <Alert
            variant={response.status === "success" ? "success" : "danger"}
            className="mt-5 p-2 m-auto"
          >
            {response.message}
          </Alert>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default EmailVerification;
