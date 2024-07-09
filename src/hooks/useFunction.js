import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  tenjoin,
  tweentyjoin,
  fourtyjoin,
  sixtyjoin,
  seventyjoin,
  onefiftyjoin,
  selecttenthColor,
  selectoneFiftyColor,
  selectfourtyColor,
  selecttweentyColor,
  selectseventyColor,
  selectsixtyColor,
  getJoinedUsers,
} from "../Reducers/userSlice";
const useFunction = () => {
  const dispatch = useDispatch();

  const [flipbtnten, setflipbtnten] = useState(false);
  const [flipbtntweenty, setflipbtntweenty] = useState(false);
  const [flipbtnfourty, setflipbtnfourty] = useState(false);
  const [flipbtnsixty, setflipbtnsixty] = useState(false);
  const [flipbtnseventy, setflipbtnseventy] = useState(false);
  const [flipbtnoneFifty, setflipbtnoneFifty] = useState(false);

  const redtenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_RED }));
  };
  const greententh = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_GREEN }));
  };
  const yellowtenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_YELLOW }));
  };

  const pinktenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_PINK }));
  };

  const bluetenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_BLUE }));
  };

  const redoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_RED }));
  };
  const greenoneFifty = (e) => {
    dispatch(
      selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_GREEN })
    );
  };
  const yellowoneFifty = (e) => {
    dispatch(
      selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_YELLOW })
    );
  };

  const pinkoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_PINK }));
  };

  const blueoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_BLUE }));
  };

  const redfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_RED }));
  };

  const greenfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_GREEN }));
  };
  const yellowfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinkfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_PINK }));
  };

  const bluefourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_BLUE }));
  };

  const redtweenty = () => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_RED }));
  };

  const greentweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_GREEN }));
  };

  const yellowtweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinktweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_PINK }));
  };

  const bluetweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_BLUE }));
  };

  const redseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_RED }));
  };
  const greenseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_GREEN }));
  };

  const yellowseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinkseventy = () => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_PINK }));
  };

  const blueseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_BLUE }));
  };

  const greensixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_GREEN }));
  };
  const yellowsixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_YELLOW }));
  };
  const pinksixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_PINK }));
  };
  const redsixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_RED }));
  };

  const bluesixty = (e) => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_BLUE }));
  };

  const joinetenth = () => {
    setflipbtnten(!flipbtnten);
    dispatch(tenjoin());
  };

  const joinetweenty = (e) => {
    setflipbtntweenty(!flipbtntweenty);
    dispatch(tweentyjoin());
  };

  const joinefourty = (e) => {
    setflipbtnfourty(!flipbtnfourty);
    dispatch(fourtyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 40 contest."
    // )
    //   toast.success(user?.message);
  };

  const joinesixty = (e) => {
    setflipbtnsixty(!flipbtnsixty);
    dispatch(sixtyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 60 contest."
    // )
    //   toast.success(user?.message);
  };

  const joineseventy = (e) => {
    setflipbtnseventy(!flipbtnseventy);
    dispatch(seventyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 70 contest."
    // )
    //   toast.success(user?.message);
  };

  const joineoneFifty = (e) => {
    setflipbtnoneFifty(!flipbtnoneFifty);
    dispatch(onefiftyjoin());
  };

  const getjoinedpeoples = () => {
    dispatch(getJoinedUsers());
  };

  const result = () => {
    navigate("/results");
  };
  return {
    redtenth,
    bluetenth,
    greententh,
    pinktenth,
    yellowtenth,
    joinetenth,
    flipbtnten,
    flipbtnfourty,
    flipbtnoneFifty,
    flipbtntweenty,
    flipbtnseventy,
    flipbtnsixty,
    redtweenty,
    bluetweenty,
    greentweenty,
    pinktweenty,
    yellowtweenty,
    redfourty,
    bluefourty,
    greenfourty,
    pinkfourty,
    yellowfourty,
    redoneFifty,
    blueoneFifty,
    greenoneFifty,
    pinkoneFifty,
    yellowoneFifty,
    redseventy,
    blueseventy,
    greenseventy,
    pinkseventy,
    yellowseventy,
    redtweenty,
    bluetweenty,
    greentweenty,
    pinktweenty,
    yellowtweenty,
    redsixty,
    bluesixty,
    greensixty,
    pinksixty,
    yellowsixty,
    joinetweenty,
    joinefourty,
    joineoneFifty,
    joineseventy,
    joineoneFifty,
    joinesixty,
  };
};

export default useFunction;
