import React from "react";
import "./Header.css";
import { logoutUser } from "../utils/api";
import { toast } from "react-toastify";

function Header() {
  const token = localStorage.getItem("token_news");
  const handleLogoutUser = () => {
    if (!token) {
      toast.error("user not loged in!");
    } else {
      logoutUser();
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <h1>Personalized News Hub</h1>
        </a>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recommended-articles">Recommended Articles</a>
          </li>

          <li>
            <a href="/saved-articles">Saved Articles</a>
          </li>
          {token ? (
            <li>
              <a href="/" onClick={handleLogoutUser}>
                Logout
              </a>
            </li>
          ) : (
            <>
              <li className="loginRegister">
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
