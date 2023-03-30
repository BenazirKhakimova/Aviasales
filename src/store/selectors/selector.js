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

                if (filters.noStop === true && there.stops.length === 0) {
                    return true;
                }
                if (filters.oneStop === true && there.stops.length === 1) {
                    return true;
                }
                if (filters.twoStops === true && there.stops.length === 2) {
                    return true;
                }
                if (filters.threeStops === true && there.stops.length === 3) {
                    return true;
                }
                return false;
            })
            .slice(0, 5)
);
