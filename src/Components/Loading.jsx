import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Style.scss";
const Loading = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  });
  return <div className="loader"></div>;
};

export default Loading;
