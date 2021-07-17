import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Header({ loggedIn, currentEmail, handleSignOut }) {
  const pathname = window.location.pathname;
  const textToggle = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;
  const linkToggle = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

  return (
    <div className="header">
      <img src={headerLogo} className="logo" alt="Логотип" />
      <div className="header__container">
        {loggedIn ? (
          <>
            <p className="header__email">{currentEmail}</p>
            <Link
              to="/sign-in"
              className="header__logout"
              onClick={handleSignOut}
            >
              Выйти
            </Link>
          </>
        ) : (
          <Link className="header__link" to={linkToggle}>
            {textToggle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
