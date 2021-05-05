import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import LinearProgress from '@material-ui/core/LinearProgress';


const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    const response = axiosInstance
      .post("/accounts/logout/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        history.push("/Home")
        window.location.reload();
      });
  });

  return <div style={{padding:"25%"}}><LinearProgress /></div>;
};

export default Logout;
