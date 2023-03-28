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
                        name="noTransfer"
                        id="noTransfer"
                        value="noTransfer"
                        checked={filters.noTransfer}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="noTransfer">Без пересадок</label>
                </li>

                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="oneTransfer"
                        id="oneTransfer"
                        value="oneTransfer"
                        checked={filters.oneTransfer}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="oneTransfer">1 пересадка</label>
                </li>
                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="twoTransfers"
                        id="twoTransfers"
                        value="twoTransfers"
                        checked={filters.twoTransfers}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="twoTransfers">2 пересадки</label>
                </li>
                <li className={styles.filter__item}>
                    <input
                        type="checkbox"
                        name="threeTransfers"
                        id="threeTransfers"
                        value="threeTransfers"
                        checked={filters.threeTransfers}
                        onChange={e =>
                            setFilter(e.target.value, e.target.checked)
                        }
                    />
                    <label htmlFor="threeTransfers">3 пересадки</label>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
