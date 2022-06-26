import React, { useEffect, useLayoutEffect, useState } from "react";
import { useHomeContact } from "../context/HomeContext";
import "../css/login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    state: { isLogin },
    setIsLogin,
  } = useHomeContact();

  return (
    <main id="login">
      <div className="form">{isLogin ? <SignIn /> : <SignUp />}</div>
      <Link to="/" className="backHome">
        <AiFillHome size="18" />
      </Link>
    </main>
  );
};

const SignIn = () => {
  const { setIsLogin } = useHomeContact();
  const [isValidation, setIsValidation] = useState(false);

  const signInSchema = Yup.object({
    username: Yup.string().required("Please enter the value Use Name"),
    password: Yup.string().required().min(8, "Your password is too short."),
  });

  const validation = useFormik({
    initialValues: { username: "", password: "" },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: signInSchema,
    onSubmit: (value) => handleSubmit(value),
  });

  useEffect(() => {});
  // TODO user
  const handleSubmit = async (value: any) => {
    console.log(value);
  };

  return (
    <form
      className="signIn"
      onSubmit={(e) => {
        e.preventDefault();
        validation.submitForm();
      }}
    >
      <h2>SIGN IN</h2>
      <div className="form-error">
        {validation.errors &&
          isValidation &&
          Object.entries(validation.errors).map((item) => (
            <p key={item[0]}>{item[1]}</p>
          ))}
      </div>
      <div>
        <input
          type="text"
          value={validation.values.username}
          onChange={(e: any) => {
            if (isValidation) {
              setIsValidation(false);
            }
            validation.setFieldValue("username", e.target.value);
          }}
          id="username"
          name="username"
          required
        />
        <label htmlFor="username">Name</label>
      </div>
      <div>
        <input
          type="password"
          id="password"
          value={validation.values.password}
          onChange={(e) => {
            if (isValidation) {
              setIsValidation(false);
            }
            validation.setFieldValue("password", e.target.value);
          }}
          name="password"
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" onClick={() => setIsValidation(true)}>
        Login
      </button>
      <h5>
        Don't have an account?
        <button onClick={() => setIsLogin()}>Register</button>
      </h5>
    </form>
  );
};

const SignUp = () => {
  const { setIsLogin } = useHomeContact();
  const [isValidation, setIsValidation] = useState(false);

  const signUnSchema = Yup.object({
    username: Yup.string().required("Please enter the value User Name"),
    password: Yup.string()
      .min(8, "Your password is too short.")
      .required("Please enter the value Password"),
    retype: Yup.string()
      .oneOf([Yup.ref("password")], "Your retype password do not match.")
      .required("Please enter the value retype Password"),
  });

  const validation = useFormik({
    initialValues: { username: "", password: "", retype: "" },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: signUnSchema,
    onSubmit: (value, helpers) => handleSubmit(value, helpers),
  });

  const handleSubmit = async (value: any, helpers: any) => {
    setIsValidation(true);
    console.log(value);
  };

  return (
    <>
      <form
        className="signUp"
        onSubmit={(e) => {
          e.preventDefault();
          validation.submitForm();
        }}
      >
        <h2>SIGN UP</h2>
        <div className="form-error">
          {validation.errors &&
            isValidation &&
            Object.entries(validation.errors).map((item) => (
              <p key={item[0]}>{item[1]}</p>
            ))}
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={validation.values.username}
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("username", e.target.value);
            }}
            required
          />
          <label htmlFor="username">User name</label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={validation.values.password}
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("password", e.target.value);
            }}
            name="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="retype"
            value={validation.values.retype}
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("retype", e.target.value);
            }}
            name="retype"
            required
          />
          <label htmlFor="retype">Retype</label>
        </div>
        <button type="submit" onClick={() => setIsValidation(true)}>
          Register
        </button>
        <h5>
          Already have an account?{" "}
          <button onClick={() => setIsLogin()}>Sign in</button>
        </h5>
      </form>
    </>
  );
};

export default LoginPage;
