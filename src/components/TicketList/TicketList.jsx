import React from "react";
import PropTypes from "prop-types";
import styles from "./TicketList.module.scss";
import Ticket from "../Ticket/Ticket";

const TicketList = props => (
    <div className="TicketListWrapper">
        <Ticket />
    </div>
);

TicketList.propTypes = {
    // bla: PropTypes.string,
};

TicketList.defaultProps = {
    // bla: 'test',
};

export default TicketList;
