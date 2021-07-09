import React from "react";

function Login() {
  return (
    <section className="sign">
      <h1 className="sign__title">Вход</h1>
      <form className="sign__form">
        <input className="sign__input" placeholder="Email"></input>
        <input className="sign__input" placeholder="Пароль"></input>
        <button className="sign__button">Войти</button>
      </form>
    </section>
  );
}

export default Login;
