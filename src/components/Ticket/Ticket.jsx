import React from "react";
import PropTypes from "prop-types";
import { addMinutes, format } from "date-fns";
import styles from "./Ticket.module.scss";

const Ticket = ({ ticket }) => {
    const { carrier, price, segments } = ticket;
    const [there, back] = segments;

    const calcDurationTime = where => {
        // вычисляем продолжительность полета
        const hoursThere = Math.floor(where.duration / 60);
        const minThere = there.duration % 60;

        return `${hoursThere} ч ${minThere} м`;
    };

    const calcDepartureAndArrivalTime = where => {
        // вычисляем время начала полета
        const departureTime = new Date(where.date);
        const formatedDepartureTime = format(departureTime, "HH:mm");
        // вычисляем время посадки
        const arrivalTime = addMinutes(departureTime, where.duration); // Функция addMinutes возвращает новый объект Date, соответствующий результату операции добавления или вычитания указанного количества минут к исходной дате.
        const formatedArrivalTime = format(arrivalTime, "HH:mm");

        return `${formatedDepartureTime} - ${formatedArrivalTime}`;
    };

    const addStops = where => {
        if (where.stops.length === 0) {
            return "Без пересадок";
        }
        if (where.stops.length === 1) {
            return `${where.stops.length} Пересадка`;
        }
        if (where.stops.length < 5) {
            return `${where.stops.length} Пересадки`;
        }
        return `${where.stops.length} Пересадкок`;
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
                        {calcDepartureAndArrivalTime(there)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>
                        {calcDurationTime(there)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>
                        {addStops(there)}
                    </p>

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
                        {calcDepartureAndArrivalTime(back)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>В пути</p>
                    <p className={styles.ticket__text_black}>
                        {calcDurationTime(back)}
                    </p>
                </div>
                <div className={styles.ticket__info}>
                    <p className={styles.ticket__text_gray}>{addStops(back)}</p>

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
