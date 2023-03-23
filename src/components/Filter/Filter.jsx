import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = props => {
    const [hide, setHide] = useState(false);

    const handleToggle = () => {
        setHide(!hide);
    };
    return (
        <div className={styles.filter}>
            <button
                onClick={handleToggle}
                className={styles.filter__toggle}
                type="button"
            >
                Количество пересадок
            </button>
            <ul className={hide ? styles.hidden : styles.filter__items}>
                <li className={styles.filter__item}>
                    <input type="checkbox" name="" id="all" />
                    <label htmlFor="all">Все</label>
                </li>
                <li className={styles.filter__item}>
                    <input type="checkbox" name="" id="all" />
                    <label htmlFor="all">Без пересадок</label>
                </li>

                <li className={styles.filter__item}>
                    <input type="checkbox" name="" id="all" />
                    <label htmlFor="all">1 пересадка</label>
                </li>
                <li className={styles.filter__item}>
                    <input type="checkbox" name="" id="all" />
                    <label htmlFor="all">2 пересадки</label>
                </li>
                <li className={styles.filter__item}>
                    <input type="checkbox" name="" id="all" />
                    <label htmlFor="all">3 пересадки</label>
                </li>
            </ul>
        </div>
    );
};

Filter.propTypes = {
    // bla: PropTypes.string,
};

Filter.defaultProps = {
    // bla: 'test',
};

export default Filter;
