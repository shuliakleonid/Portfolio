import React from 'react';
import Skill from '../Skill/Skill';
import s from './Skills.module.css'
const Skills = () => {
  return (
      <section className={s.cardSkillElement}>
        <header><h2 className={s.title}>Skills </h2> </header>
        <div className={s.skillsElements}>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </section>
  );
};

export default Skills;
