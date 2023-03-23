import React from "react";
import PropTypes from "prop-types";
import styles from "./App.module.scss";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";
import Tabs from "../Tabs/Tabs";
import TicketList from "../TicketList/TicketList";

const App = props => (
    <div className={`${styles.appWrapper} container`}>
        <Logo />
        <div className={styles.main}>
            <Filter />
            <section className={styles.section}>
                <Tabs />
                <TicketList />
            </section>
        </div>
    </div>
);

App.propTypes = {
    // bla: PropTypes.string,
};

App.defaultProps = {
    // bla: 'test',
};

export default App;
