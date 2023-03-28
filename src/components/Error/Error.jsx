import React from "react";
import PropTypes from "prop-types";
import styles from "./Error.module.scss";
import errorSvg from "../../images/error-svg.svg";

const Error = ({ error }) => (
    <div className={styles.error}>
        <img src={errorSvg} alt="error-svg" />
        <p>{error}</p>
    </div>
);

Error.propTypes = {
    error: PropTypes.string.isRequired,
};

export default Error;
