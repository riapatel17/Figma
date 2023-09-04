import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

import logo from "./images/logo.png";
import cartImg from "./images/cart.png";
import searchImg from "./images/search.png";

const NavBar: FC = () => {
  return (
    <nav className={styles.NavbarContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/menu">
          Menu
        </Link>
        <Link className={styles.link} to="/rewards">
          Rewards
        </Link>
        <Link className={styles.link} to="/deals">
          Deals
        </Link>
        <Link className={styles.link} to="/brands">
          Brands
        </Link>
      </div>

      <div className={styles.RightSectionWrapper}>
        <div className={styles.icon}>
          <img src={searchImg} alt="search" />
        </div>
        <div className={styles.login}>
          <a href="/login">Login</a>
        </div>
        <div>
          <a href="/signup">
            <button className={styles.signup}>Sign up</button>
          </a>
        </div>
        <div className={styles.line}></div>
        <button className={styles.cart}>
          <img src={cartImg} alt="cart" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
