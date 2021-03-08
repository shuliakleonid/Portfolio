import React from "react";
import project from "../../assets/img/project.png";
import s from "./Work.module.css";

const Work = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <img className={s.image} src={project} alt="Project logo" />
        <button className={s.button}>Open</button>
      </div>
      <div className={s.titleProject}>
        <h3>Name Project</h3>
        <p>About what project</p>
      </div>
    </div>
  );
};

export default Work;
