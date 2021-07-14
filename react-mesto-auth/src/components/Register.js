import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form className="sign__form">
        <input className="sign__input" placeholder="Email"></input>
        <input className="sign__input" placeholder="Пароль"></input>
        <button className="sign__button">Зарегистрироваться</button>
      </form>
      <Link className="sign__link" to="/sign-in">
        Уже Зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
