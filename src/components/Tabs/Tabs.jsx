import React from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.scss";

const Tabs = props => (
    <div className={styles.tabs}>
        <button
            type="button"
            className={`${styles.tabs__item} ${styles.tabs__item_active}`}
        >
            Самый дешевый
        </button>
        <button type="button" className={styles.tabs__item}>
            Самый быстрый
        </button>
    </div>
);

Tabs.propTypes = {
    // bla: PropTypes.string,
};

Tabs.defaultProps = {
    // bla: 'test',
};

export default Tabs;
