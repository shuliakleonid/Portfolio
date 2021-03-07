import React from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import s from './App.module.css'

function App() {
  return <div className={s.wrapper}>
    <Header/>
    <main>
    <Main/>



    </main>
  </div>
}

export default App;
