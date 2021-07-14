import React from "react";

function Login() {
  return (
    <section className="sign">
      <h1 className="sign__title">Вход</h1>
      <form className="sign__form">
        <input className="sign__input" placeholder="Email" type="email"></input>

        <input
          className="sign__input"
          placeholder="Пароль"
          type="password"
        ></input>

        <button className="sign__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
