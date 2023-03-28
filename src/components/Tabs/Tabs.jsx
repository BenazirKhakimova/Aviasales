import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
    sortingTheCheapest,
    sortingTheFastest,
} from "../../store/slices/ticketSlice";
import styles from "./Tabs.module.scss";

const Tabs = () => {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.ticketReducer.sort);

    const classCheapest = classNames({
        [styles.tabs__item]: true,
        [styles.tabs__item_active]: sort === "cheapest",
    });
    const classFastest = classNames({
        [styles.tabs__item]: true,
        [styles.tabs__item_active]: sort === "fastest",
    });

    return (
        <div className={styles.tabs}>
            <button
                type="button"
                className={classCheapest}
                onClick={() => dispatch(sortingTheCheapest("cheapest"))}
            >
                Самый дешевый
            </button>
            <button
                type="button"
                className={classFastest}
                onClick={() => dispatch(sortingTheFastest("fastest"))}
            >
                Самый быстрый
            </button>
        </div>
    );
};

export default Tabs;
