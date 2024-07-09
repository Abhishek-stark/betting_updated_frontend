// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProtectedPage from "./Components/ProtectedPage";
import "../src/Styles/Style.scss";
import Register from "./Components/Register";
// import FgtPwd from "./Components/FgtPwd";
import DashSetting from "./Components/DashSetting";
import Dashboard from "./Components/Dashboard";
import MainPage from "./Components/MainPage";
import BackCard from "./Components/BackCard";
import RotatingCard from "./Components/RotatingCard";
import Newnavbar from "./Components/Newnavbar";
// import Loading from "./Components/Loading";

// const MainPage = React.lazy(() => import("./Components/MainPage"));
// const Registerpage = React.lazy(() => import("./Components/Register"));
// const Dashboard = React.lazy(() => import("./Components/Dashboard"));
// const Joining = React.lazy(() => import("./Components/Joining"));
// const MainCard = React.lazy(() => import("./Components/MainCard"));
// const BackCard = React.lazy(() => import("./Components/BackCard"));
// const RotatingCard = React.lazy(() => import("./Components/RotatingCard"));

function App() {
  return (
    <Router>
      <Newnavbar />
      <Routes>
        {" "}
        <Route path="/" element={<ProtectedPage Component={Login} />} />
        <Route path="/new" element={<Newnavbar />} />
        <Route
          path="/dashboard"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ProtectedPage Component={RotatingCard} />
            </Suspense>
          }
        />{" "}
        <Route
          path="/dash"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Dashboard />{" "}
            </Suspense>
          }
        />{" "}
        <Route
          path="/signup"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Register />{" "}
            </Suspense>
          }
        />{" "}
        {/*<Route path="/forgotpassword" element={<FgtPwd />} />*/}
        <Route path="/loading" exact element={<Loading />} />{" "}
        <Route path="/loading" exact element={<Loading />} />
        <Route
          path="/timer"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <MainPage />
            </Suspense>
          }
        />{" "}
        <Route
          path="/test"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <BackCard />{" "}
            </Suspense>
          }
        />{" "}
        <Route
          path="/setting"
          element={
            <Suspense fallback={<Loading />}>
              <DashSetting />
            </Suspense>
          }
        />
      </Routes>{" "}
    </Router>
  );
}

export default App;
