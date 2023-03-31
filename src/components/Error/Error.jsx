import React from "react";
import styles from "./Error.module.scss";
import errorSvg from "../../images/error-svg.svg";

export default class ErrorBoundry extends React.Component {
    state = {
        error: false,
    };

    componentDidCatch(error) {
        this.setState({ error });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        if (error) {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.error}>
                        <img src={errorSvg} alt="error-svg" />
                        <p>
                            Билеты не найдены! Пожалуйста, повторите попытку
                            снова
                        </p>
                    </div>
                </div>
            );
        }

        return children;
    }
}
