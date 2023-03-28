import React from "react";
import { Triangle } from "react-loader-spinner";
import styles from "./Spinner.module.scss";

const Spinner = () => (
    <div className={styles.spinner}>
        <Triangle
            height="80"
            width="80"
            color="#2196F3"
            ariaLabel="triangle-loading"
            visible
        />
    </div>
);

export default Spinner;
