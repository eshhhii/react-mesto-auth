import React from "react";
import * as auth from "../utils/auth.js";
import { Link } from "react-router-dom";

function Register({ registration }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    registration(email, password);
  }
  return (
    <section className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form className="sign__form" onSubmit={handleSubmit}>
        <input
          className="sign__input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <input
          className="sign__input"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={handleChangePassword}
        ></input>
        <button className="sign__button">Зарегистрироваться</button>
      </form>
      <div className="sign__container">
        <p className="sign__subtitle"> Уже Зарегистрированы?</p>
        <Link className="sign__link" to="/sign-in">
          {"Войти"}
        </Link>
      </div>
    </section>
  );
}

export default Register;
