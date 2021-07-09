import React from "react";

function Register() {
  return (
    <section className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form className="sign__form">
        <input className="sign__input" placeholder="Email"></input>
        <input className="sign__input" placeholder="Пароль"></input>
        <button className="sign__button">Зарегистрироваться</button>
      </form>
      <h2 className="sign__subtitle">Уже Зарегистрированы? Войти</h2>
    </section>
  );
}

export default Register;
