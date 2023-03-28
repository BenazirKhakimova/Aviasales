import React from "react";
import PropTypes from "prop-types";
import { addMinutes, format } from "date-fns";
import styles from "./Ticket.module.scss";

const Ticket = ({ ticket }) => {
    const { carrier, price, segments } = ticket;
    const [there, back] = segments;

    const durationTime = where => {
        // вычисляем продолжительность полета
        const hoursThere = Math.floor(where.duration / 60);
        const minThere = there.duration % 60;

        return `${hoursThere} ч ${minThere} м`;
    };

    const departureAndArrivalTime = where => {
        // вычисляем время начала полета
        const departureTime = new Date(where.date);
        const formatedDepartureTime = format(departureTime, "HH:mm");
        // вычисляем время посадки
        const arrivalTime = addMinutes(departureTime, where.duration); // Функция addMinutes возвращает новый объект Date, соответствующий результату операции добавления или вычитания указанного количества минут к исходной дате.
        const formatedArrivalTime = format(arrivalTime, "HH:mm");

        return `${formatedDepartureTime} - ${formatedArrivalTime}`;
    };

    // eslint-disable-next-line consistent-return
    const stops = where => {
        if (where.stops.length === 0) {
            return "Без пересадок";
        }
        if (where.stops.length === 1) {
            return `${where.stops.length} Пересадка`;
        }
        if (where.stops.length <= 3) {
            return `${where.stops.length} Пересадки`;
        }
    };

    return (
        <div className={styles.ticket}>
            <div className={styles.ticket__header}>
                <p className={styles.ticket__price}>{`${price} Р`} </p>
                <img
                    src={
                        carrier
                            ? `https://pics.avs.io/99/36/${carrier}.png`
                            : null
                    }
                    alt="logo"
                />
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>
                        {there.origin} – {there.destination}
                    </p>
                    <p className={styles.ticket__text_black}>
                        {departureAndArrivalTime(there)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>
                        {durationTime(there)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>{stops(there)}</p>

                    <p className={styles.ticket__text_black}>
                        {there.stops.join(", ")}
                    </p>
                </div>
            </div>

            <div className={styles.ticket__main}>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>
                        {back.origin} – {back.destination}
                    </p>
                    <p className={styles.ticket__text_black}>
                        {departureAndArrivalTime(back)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>
                        {durationTime(back)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>{stops(back)}</p>

                    <p className={styles.ticket__text_black}>
                        {back.stops.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
};
Ticket.propTypes = {
    ticket: PropTypes.object.isRequired,
};

export default Ticket;
