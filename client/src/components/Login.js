import React, { useState } from "react";
import { API_BASE } from "../config";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const isLogin = useSelector((state) => state.isLogin);

  console.log("isLogin:", isLogin);

  const dispatch = useDispatch();
  const history = useHistory();

  if (isLogin) {
    history.push("/list");
  }

  const [user, setUser] = useState({
    username: "admin",
    password: "admin",
  });

  const [msg, setMsg] = useState("");

  const DoLogin = () => {
    axios
      .post(API_BASE + "/admin/login", user)
      .then((res) => {
        if (res.data.st === 1) {
          dispatch({
            type: "ADMIN_LOGIN",
            payload: res.data.user,
          });
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>

      <div>{msg}</div>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button onClick={DoLogin}>Login</button>
    </div>
  );
};

export default Login;
