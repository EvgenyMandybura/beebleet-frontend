import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "reactstrap";
import { withRouter, useHistory } from "react-router-dom";
import { registerUser } from "../../store/auth/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import FormikFormGroup from "../formik/FormikFormGroup";
import { Formik } from "formik";
import validationSchemas from "../../constants/validationSchemas";

const validationSchema = yup.object({
  email: validationSchemas.email,
  password: validationSchemas.password,
  phone: validationSchemas.phone
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

const SignUpForm = ({ registerUser }) => {
  const history = useHistory();
  const handleSubmitForm = (values) => {
    registerUser(values, history);
  //  history.push("/");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {(form) => {
          const { errors, touched, handleSubmit } = form;

          return (
            <Form className="w-100" onSubmit={handleSubmit}>
              <h1>Sign up</h1>
              <FormikFormGroup
                errors={errors}
                touched={touched}
                fieldName={"firstName"}
                label={"First Name"}
                placeholder={"Enter first name"}
              />
              <FormikFormGroup
                errors={errors}
                touched={touched}
                fieldName={"lastName"}
                label={"Last Name"}
                placeholder={"Enter Last Name"}
              />
              <FormikFormGroup
                type={"email"}
                errors={errors}
                touched={touched}
                fieldName={"email"}
                label={"Email address"}
                placeholder={"Enter email"}
              />
              <FormikFormGroup
                type={"phone"}
                errors={errors}
                touched={touched}
                fieldName={"phone"}
                label={"Mobile phone"}
                placeholder={"Enter mobile phone, +123456789"}
             />
              <FormikFormGroup
                errors={errors}
                touched={touched}
                fieldName={"password"}
                label={"Password"}
                placeholder={"Enter password"}
                type={"password"}
              />
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  color="dark"
                  className="w-100 mt-3 p-3 text-uppercase"
                  size="lg"
                  type="submit"
                >
                  Continue
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = () => ({});

export default withRouter(
  connect(mapStateToProps, { registerUser })(SignUpForm)
);
