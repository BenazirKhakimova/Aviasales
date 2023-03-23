import React from "react";
import PropTypes from "prop-types";
import styles from "./Ticket.module.scss";
import logo from "../../images/S7 Logo.svg";

const Ticket = props => (
    <>
        <div className={styles.ticket}>
            <div className={styles.ticket__header}>
                <p className={styles.ticket__price}>13 400 Р </p>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>MOW – HKT</p>
                    <p className={styles.ticket__text_black}>10:45 – 08:00</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>21ч 15м</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>2 пересадки</p>
                    <p className={styles.ticket__text_black}>HKG, JNB</p>
                </div>
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>MOW – HKT</p>
                    <p className={styles.ticket__text_black}>11:20 – 00:50</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>13ч 30м</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>1 пересадки</p>
                    <p className={styles.ticket__text_black}>HKG</p>
                </div>
            </div>
        </div>

        <div className={styles.ticket}>
            <div className={styles.ticket__header}>
                <p className={styles.ticket__price}>13 400 Р </p>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>MOW – HKT</p>
                    <p className={styles.ticket__text_black}>10:45 – 08:00</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>21ч 15м</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>2 пересадки</p>
                    <p className={styles.ticket__text_black}>HKG, JNB</p>
                </div>
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>MOW – HKT</p>
                    <p className={styles.ticket__text_black}>11:20 – 00:50</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>13ч 30м</p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>1 пересадки</p>
                    <p className={styles.ticket__text_black}>HKG</p>
                </div>
            </div>
        </div>
    </>
);

Ticket.propTypes = {
    // bla: PropTypes.string,
};

Ticket.defaultProps = {
    // bla: 'test',
};

export default Ticket;
