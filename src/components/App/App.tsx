import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import s from "./App.module.css";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import RemoteWork from "../Remote-work/RemoteWork";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <main>
        <Main />
        <Skills />
        <Works />
        <RemoteWork />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
