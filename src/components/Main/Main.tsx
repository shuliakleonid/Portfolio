import React from 'react';
import s from './Main.module.css'
import avatar from '../../assets/img/avatar.png'
const Main = () => {
  return (
      <section className={s.wrapper} >
        <div className={s.blockAboutMe}>
          <div className={s.textBlock}>
            <p className={s.text}>Hi, my name is Leonid Shuliak. I'm front-end developer</p>
          </div>
          <img className={s.photo} src={avatar}/>
        </div>
      </section>
  );
};

export default Main;
