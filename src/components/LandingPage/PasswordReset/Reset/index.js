import React, { Component } from "react";

import { withFirebase } from "../../../providers/config";

const stateInit = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...stateInit };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .resetPassword(passwordOne)
      .then(() => {
        this.setState({ ...stateInit });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordResetForm);
