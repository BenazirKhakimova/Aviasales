import React from "react";
import logo from "../../images/Logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => (
    <div className={styles.LogoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
    </div>
);

export default Logo;
