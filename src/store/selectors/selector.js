/* eslint-disable no-nested-ternary */
/* eslint-disable no-fallthrough */
import { createSelector } from "@reduxjs/toolkit";

const selectTicket = state => state.ticketReducer.tickets;
const selectFilters = state => state.filterReducer.filters;

export const selectFilteredTicket = createSelector(
    [selectTicket, selectFilters],
    (tickets, filters) =>
        tickets
            .filter(ticket => {
                const [there] = ticket.segments;

                if (filters.all === true) {
                    return true;
                }

                if (filters.noTransfer === true && there.stops.length === 0) {
                    return true;
                }
                if (filters.oneTransfer === true && there.stops.length === 1) {
                    return true;
                }
                if (filters.twoTransfers === true && there.stops.length === 2) {
                    return true;
                }
                if (
                    filters.threeTransfers === true &&
                    there.stops.length === 3
                ) {
                    return true;
                }
                return false;
            })
            .slice(0, 5)
);
