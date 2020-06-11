import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Modal, FormGroup, Label, Input } from "reactstrap";
import { auth, generateUserDocument } from "../../../firebase";
import * as Yup from "yup";
import classes from "../LandingPage.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: Yup.object({
      displayName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/",
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      role: Yup.string()
        .oneOf(["teacher", "student", "parent"], "Invalid choice")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
    role
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
        role
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
    setRole("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  return (
    <div className={classes.background}>
      <form className={classes.form}>
        <h2>Sign Up</h2>
        <hr />
        <Input
          className={classes.inputStyle}
          type="text"
          name="displayName"
          placeholder="username"
          id="displayName"
          value={displayName}
          onChange={(event) => onChangeHandler(event)}
        />

        <Input
          className={classes.inputStyle}
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(event) => onChangeHandler(event)}
        />
        <Input
          className={classes.inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(event) => onChangeHandler(event)}
        />
        <br />
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              className={classes.radio}
              name="Teacher"
              value={role}
              checked={role === "Teacher"}
              onChange={(event) => onChangeHandler(event)}
              onClick={() => setRole("Teacher")}
            />
            <br />
            I'm a Teacher
          </Label>
          <Label check>
            <Input
              type="radio"
              className={classes.radio}
              name="Student"
              value={role}
              checked={role === "Student"}
              onChange={(event) => onChangeHandler(event)}
              onClick={() => setRole("Student")}
            />
            <br />
            I'm a Student
          </Label>
          <Label check>
            <Input
              type="radio"
              className={classes.radio}
              name="Parent"
              value={role}
              checked={role === "Parent"}
              onChange={(event) => onChangeHandler(event)}
              onClick={() => setRole("Parent")}
            />
            <br />
            I'm a Parent
          </Label>
          <br />
        </FormGroup>
        <button
          type="submit"
          onClick={(event) => {
            createUserWithEmailAndPasswordHandler(event, email, password, role);
          }}
          className={classes.button}
        >
          Sign Up
        </button>
        <br />
        <Link to="/login">Already have an account? Log in here!</Link>
      </form>
    </div>
  );
};

export default SignUp;
