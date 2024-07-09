import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./../Styles/Style.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { reset, checkColors, resetColor } from "../Reducers/userSlice";

import { CurrencyRupee } from "@mui/icons-material";

function Newnavbar() {
  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  // Retrieve the initial timer value from localStorage or set it to the initial value
  const storedSeconds = parseInt(localStorage.getItem("seconds"), 10);
  const initialCounter = !isNaN(storedSeconds) ? storedSeconds : 90;

  const [seconds, setSeconds] = useState(initialCounter);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (user && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          localStorage.setItem("seconds", newSeconds); // Update localStorage
          return newSeconds;
        });
        if (
          seconds === 20 &&
          (user?.data?.tenthjoin !== "No" ||
            user?.data?.tweentyjoin !== "No" ||
            user?.data?.fourtyjoin !== "No" ||
            user?.data?.sixtyjoin !== "No" ||
            user?.data?.seventyjoin !== "No" ||
            user?.data?.hundredjoin !== "No" ||
            user?.data?.oneFiftyjoin !== "No")
        ) {
          dispatch(checkColors());
        }
      }, 1000);
      if (user && seconds === 1) {
        setIsActive(true);
        setSeconds(90);

        localStorage.setItem("seconds", seconds);
        if (
          user?.data?.tenthjoin !== "No" ||
          user?.data?.tweentyjoin !== "No" ||
          user?.data?.fourtyjoin !== "No" ||
          user?.data?.sixtyjoin !== "No" ||
          user?.data?.seventyjoin !== "No" ||
          user?.data?.hundredjoin !== "No" ||
          user?.data?.oneFiftyjoin !== "No"
        ) {
          dispatch(resetColor());
        }
      }
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, user]);

  useEffect(() => {
    if (isError) console.log(message);
    dispatch(reset());
  }, [isError, navigate, message, dispatch]);

  // const startTimer = () => {
  //   setIsActive(true);
  // };

  // const stopTimer = () => {
  //   setIsActive(false);
  // };

  // const resetTimer = () => {
  //   setIsActive(false);
  //   setSeconds(180);
  //   localStorage.setItem("seconds", 180); // Reset localStorage
  // };
  const navigation = () => {
    navigate("/setting");
  };
  return (
    <div className="navdiv">
      {user ? (
        <button className="navdiv__btn navdiv__btn--2" onClick={navigation}>
          <AccountCircleIcon />
        </button>
      ) : null}

      <div className="  navdiv__btn--3">
        {user?.data?.balance ? (
          <span className="navdiv__btn--span">
            <CurrencyRupee />
            {user?.data?.balance}
          </span>
        ) : null}
      </div>
      <div className="timebtn">
        {user && (
          <button className="timebtn--1">
            Remaining :<span className="timer">{seconds} sec</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Newnavbar;
