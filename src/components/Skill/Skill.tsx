import React from 'react';
import react from '../../assets/img/react.png'
import s from './Skill.module.css'
const Skill = () => {
  return (
      <div className={s.cardSkillElement}>
        <div className={s.skillHeader}>
          <img className={s.skillLogo} src={react} alt="React logo"/>
          <p className={s.skillTitle}>React</p>
        </div>
        <div className={s.skillText}>
          <p>I'm good in React</p>
        </div>
      </div>
  );
};

export default Skill;
