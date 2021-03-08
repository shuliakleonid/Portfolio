import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <h1 className={s.title}>Shuliak Leonid</h1>
        <nav className={s.nav}>
          <ul>
            <li>Main</li>
            <li>Skills</li>
            <li>My works</li>
            <li>Contact me!</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
