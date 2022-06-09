import React from "react";
import s from "../components/Error.module.css";
import errorImg from "../img/28.png";

function Error() {
  return (
    <>
      <div className={s.error}>No results </div>   
      <div className={s.imgContainer}>
      <img width={620} height={360} className={s.errorImg} src={errorImg} />
      </div>
    </>
  );
}

export default Error;
