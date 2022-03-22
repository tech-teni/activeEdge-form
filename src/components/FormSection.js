import React from "react";
import Button from "./Button";

const FormSection = () => {
  return (
    <>
      <form className="login-form validate-form">
        <div className="column1">
          <div className="username">
            <span className="txt1"> Username </span>
          </div>
          <div
            className="wrap-input validate-input"
            data-validate="Username is required"
          >
            <input className="input" type="text" name="username" />
            <span className="focus-input"></span>
          </div>
        </div>
        <div className="column2">
          <div className="password">
            <span className="txt1"> Password </span>

            <a href="#" className="forget">
              {" "}
              Forgot?{" "}
            </a>
          </div>
          <div
            className="wrap-input validate-input"
            data-validate="Password is required"
          >
            <input className="input" type="password" name="pass" />
            <span className="focus-input"></span>
          </div>
        </div>
        <Button classDiv="form-button" mainClass="f-button" Thetext="Log in" />

        <div className="member">
          <span className="forget"> Not a member? </span>

          <a href="#" className="signing-up">
            Sign up now
          </a>
        </div>
      </form>
    </>
  );
};

export default FormSection;
