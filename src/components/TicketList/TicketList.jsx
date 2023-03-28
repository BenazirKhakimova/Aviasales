import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { fetchTickets } from "../../store/slices/ticketSlice";
import { selectFilteredTicket } from "../../store/selectors/selector";
import Ticket from "../Ticket/Ticket";
import style from "./TicketList.module.scss";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";

const TicketList = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.ticketReducer.status);
    const error = useSelector(state => state.ticketReducer.error);
    const tickets = useSelector(selectFilteredTicket);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTickets()); // отправляем запрос сразу после рендера
        }
    }, [status, dispatch]);

    let content = null;
    if (status === "loading") {
        content = <Spinner />;
    } else if (status === "succeeded") {
        content = tickets.map(ticket => (
            <Ticket key={uniqid()} ticket={ticket} />
        ));
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
