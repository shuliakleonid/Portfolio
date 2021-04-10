import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <nav className={s.nav}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Works</li>
          </ul>
        </nav>
        <p className={s.title}>Contacts</p>
      </header>
    </div>
  );
};

export default Header;
