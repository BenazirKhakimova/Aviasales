import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../store/thunks/fetchTicketsAcyncThunk";
import { selectFilteredTicket } from "../../store/selectors/selector";
import { getSearchId } from "../../api/getTickets";
import Ticket from "../Ticket/Ticket";
import style from "./TicketList.module.scss";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";

const TicketList = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.ticketReducer.status);
    const error = useSelector(state => state.ticketReducer.error);
    const ticketStatus = useSelector(state => state.ticketReducer.ticketStatus);
    const tickets = useSelector(selectFilteredTicket);
    const [searchId, setSearchId] = useState(null);

    useEffect(() => {
        getSearchId().then(setSearchId);
    }, []);

    useEffect(() => {
        if (searchId) {
            dispatch(fetchTickets(searchId));
        }
    }, [searchId, dispatch, ticketStatus]);

    let content = null;
    if (status === "loading") {
        content = <Spinner />;
    } else if (status === "succeeded") {
        content = tickets
            .slice(0, 5)
            .map(ticket => <Ticket key={ticket.id} ticket={ticket} />);
    } else if (status === "failed") {
        content = <Error error={error} />;
    }

    return (
        <div className="TicketListWrapper">
            {tickets.length === 0 && status === "succeeded" ? (
                <h2 className={style.warning}>
                    Рейсов, подходящих под заданные фильтры, не найдено
                </h2>
            ) : (
                content
            )}
        </div>
    );
};

export default TicketList;
