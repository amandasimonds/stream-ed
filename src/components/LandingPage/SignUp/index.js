import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../../providers";
import classes from "../LandingPage.css";
const SignUp = () => (
  <div className={classes.background}>
    <div className={classes.form}>
      <h2>Sign Up</h2>
      <SignUpForm />
      <Link to="/login">Already have an account? Log in here!</Link>
    </div>
  </div>
);

const stateInit = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...stateInit };
  }
  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .createStreamUser(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...stateInit });
            this.props.history.push("/stream");
          })
          .catch((error) => {
            this.setState({ error });
          });
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <form onSubmit={this.onSubmit}>
        <hr />
        <input
          className={classes.inputStyle}
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.onChange}
        />

        <input
          className={classes.inputStyle}
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.onChange}
        />
        <input
          className={classes.inputStyle}
          type="password"
          name="passwordOne"
          placeholder="password"
          value={passwordOne}
          onChange={this.onChange}
        />
        <input
          className={classes.inputStyle}
          type="password"
          name="passwordTwo"
          placeholder="confirm password"
          value={passwordTwo}
          onChange={this.onChange}
        />
        <br />

        <button className={classes.button} disabled={isInvalid} type="submit">
          Sign Up
        </button>
        <br />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUp;
export { SignUpForm };
