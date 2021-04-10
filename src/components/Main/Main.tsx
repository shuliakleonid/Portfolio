import React from 'react';
import s from './Main.module.css';
import avatar from '../../assets/img/photo.png';

const Main = () => {
  return (
      <section className={s.wrapper}>
        <div className={s.blockAboutMe}>
          <div className={s.textBlock}>
            <p>
              <span className={s.text}>Shuliak</span> Leonid
            </p>
            <p>Frontend
              <span className={s.text} > Developer</span>
            </p>
          </div>
          <img className={s.photo} src={avatar}/>
        </div>
      </section>
  );
};

export default Main;
