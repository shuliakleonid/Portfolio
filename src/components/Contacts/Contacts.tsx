import React from "react";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>Contacts</h2>
      <div className={s.form}>
        <form id="form">
          <label htmlFor="firstname">First name:</label>
          <br />
          <input type="text" name="firstname" />
          <br />
          <label htmlFor="lastname">Last name:</label>
          <br />
          <input type="text" name="lastname" />
          <br />
          <label htmlFor="comment">Some text:</label>
          <br />
          <textarea
            form="form"
            name="comment"
            placeholder="White you suggestion"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
