import React from "react";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";
import Tabs from "../Tabs/Tabs";
import TicketList from "../TicketList/TicketList";
import styles from "./App.module.scss";
import ErrorBoundry from "../Error/Error";

const App = () => (
    <div className={`${styles.appWrapper} container`}>
        <Logo />
        <div className={styles.main}>
            <Filter />
            <section className={styles.section}>
                <Tabs />
                <ErrorBoundry>
                    <TicketList />
                </ErrorBoundry>
            </section>
        </div>
    </div>
);

export default App;
