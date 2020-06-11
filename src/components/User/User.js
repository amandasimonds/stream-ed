import React, { useContext } from "react";
import "./User.css";
import { UserContext } from "../../providers/UserProvider";

const User = () => {
  const user = useContext(UserContext);
  const { displayName } = user;
  return <p>{displayName}</p>;
};

export default User;
