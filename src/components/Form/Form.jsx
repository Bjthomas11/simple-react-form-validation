import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import ErrorFeedback from "../ErrorFeedback/ErrorFeedback";

const Form = () => {
  // form validation yup rules
  const validationScehma = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dob: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords don't match")
      .required("Confirm Password is required"),
    terms: Yup.bool().oneOf([true], "Accept Terms and Conditions is required"),
  });

  //   funcs to build form returned by useForm() hook
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationScehma),
  });

  //   onsubmit
  const onSubmit = (data) => {
    console.log("Success", data);

    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  };

  return (
    <div className="card m-3">
      <h3 className="card-header">React Form Validation</h3>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <Input
                inputName="firstName"
                type="text"
                id="firstName"
                label="First Name"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.firstName?.message} />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <Input
                inputName="lastName"
                type="text"
                id="lastName"
                label="Last Name"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.lastName?.message} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <Input
                inputName="dob"
                type="date"
                id="date"
                label="Date of Birth"
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.dob?.message} />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <Input
                inputName="email"
                type="email"
                id="email"
                label="Email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.email?.message} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <Input
                inputName="password"
                type="password"
                id="password"
                label="Password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.password?.message} />
            </div>
            <div className="form-group col-md-6  col-sm-12">
              <Input
                inputName="confirmPassword"
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                inputRef={register}
              />
              <ErrorFeedback errorMessage={errors.confirmPassword?.message} />
            </div>
          </div>
          <div className="form-group form-check terms-input">
            <Input
              inputName="terms"
              type="checkbox"
              id="terms"
              label="Accept Terms & Conditions"
              className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
              inputRef={register}
            />
            <ErrorFeedback errorMessage={errors.terms?.message} />
          </div>
          <div className="form-group">
            <Button
              type="submit"
              className="btn btn-primary mr-1"
              text="Sign Up"
            />
            <Button type="reset" className="btn btn-secondary" text="Reset" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
