import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../../providers/";
import { compose } from "recompose";
import classes from "../LandingPage.css";

const Login = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <Link to="/signup">Dont have an account? Sign up here!</Link>
  </div>
);
const stateInit = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...stateInit };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .signInStreamUser(email, password)
      .then(() => {
        this.setState({ ...stateInit });
        this.props.history.push("/stream");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <div className={classes.background}>
        <form className={classes.form} onSubmit={this.onSubmit}>
          <h2>Log in</h2>
          <hr />
          <input
            className={classes.inputStyle}
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={this.onChange}
          />
          <input
            className={classes.inputStyle}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={this.onChange}
          />
          <br />
          <button type="submit" className={classes.button} disabled={isInvalid}>
            <Link to="/stream">Login</Link>
          </button>
          <br />
        </form>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default Login;

export { SignInForm };
