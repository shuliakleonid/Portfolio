import React from 'react';
import s from './About.module.css';

const About = () => {
  return (
      <section className={s.wrapper}>
        <div className={s.blockAboutMe}>
         <div className="title">About</div>
           <div className="text">
             <h3>Hello, I am Leonid Shuliak!</h3>
             <p>
               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dignissimos fuga fugiat fugit id ipsa iure magnam necessitatibus nihil nulla obcaecati officia officiis, omnis perspiciatis tempora tenetur totam voluptatibus!</span>
             </p>
             <p>
               <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dignissimos fuga fugiat fugit id ipsa iure magnam necessitatibus nihil nulla obcaecati officia officiis, omnis perspiciatis tempora tenetur totam voluptatibus!</span>
             </p>
             <p className={s.aboutMe}>
               <span>Name: Leonid Shuliak</span>
               <span>Age: 35</span>
               <span>Address: Minsk,Belarus</span>
               <span>Email: shuliak.leonid@tut.by</span></p>
          <p>
            <a href="#">Download CV</a>
          </p>
           </div>
        </div>
      </section>
  );
};

export default About;
