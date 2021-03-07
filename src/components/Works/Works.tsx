import React from "react";
import s from "./Works.module.css";
import Work from "../Work/Work";

const Works = () => {
  return (
    <section className={s.wrapper}>
      <header>
        <h2 className={s.title}>My Works </h2>{" "}
      </header>
      <div className={s.work}>
        <Work />
        <Work />
      </div>
    </section>
  );
};

export default Works;
