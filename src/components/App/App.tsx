import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import s from "./App.module.css";
import Skills from "../Skills/Skills";
import Works from '../Works/Works';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <main>
        <Main />
        <Skills />
        <Works/>
      </main>
    </div>
  );
}

export default App;
