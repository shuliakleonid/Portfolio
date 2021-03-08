import React from "react";
import s from "./RemoteWork.module.css";

const RemoteWork = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.title}>
        <p className={s.text}>HConsidering options for remote work</p>
        <button>Hired Me!</button>
      </div>
    </section>
  );
};

export default RemoteWork;
