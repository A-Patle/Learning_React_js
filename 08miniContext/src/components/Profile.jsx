import React, { useContext } from "react";
import UserContext from "../context/userContext";

export function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  } else {
    return <div>Welcome user : {user.userName}</div>;
  }
}
