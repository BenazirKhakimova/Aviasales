import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../store/slices/filterSlice";
import styles from "./Filter.module.scss";

const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filterReducer.filters);
    const [hide, setHide] = useState(false);

    const setFilter = (filter, checked) => {
        dispatch(toggleFilter({ filter, checked }));
    };

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
                    <input
                        type="checkbox"
                        name="all"
                        id="all"
                        value="all"
                        checked={filters.all}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="all">Все</label>
                </li>
                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="noStop"
                        id="noStop"
                        value="noStop"
                        checked={filters.noStop}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="noStop">Без пересадок</label>
                </li>

                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="oneStop"
                        id="oneStop"
                        value="oneStop"
                        checked={filters.oneStop}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="oneStop">1 пересадка</label>
                </li>
                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="twoStops"
                        id="twoStops"
                        value="twoStops"
                        checked={filters.twoStops}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="twoStops">2 пересадки</label>
                </li>
                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="threeStops"
                        id="threeStops"
                        value="threeStops"
                        checked={filters.threeStops}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="threeStops">3 пересадки</label>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
