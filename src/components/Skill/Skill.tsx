import React from "react";
import react from "../../assets/img/react.png";
import s from "./Skill.module.css";

const Skill = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <img className={s.logo} src={react} alt="React logo" />
        <p className={s.title}>React</p>
      </div>
      <div className={s.text}>
        <p>I'm good in React</p>
      </div>
    </div>
  );
};

export default Skill;
