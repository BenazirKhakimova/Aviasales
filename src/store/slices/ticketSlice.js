import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import { fetchTickets } from "../thunks/fetchTicketsAcyncThunk";

const initialState = {
    tickets: [],
    status: "idle",
    error: null,
    sort: "cheapest",
    ticketStatus: false,
};

const ticketSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        sortingTheCheapest(state, action) {
            state.sort = action.payload;
            state.tickets.sort((a, b) => a.price - b.price);
        },
        sortingTheFastest(state, action) {
            state.sort = action.payload;
            state.tickets.sort((a, b) => {
                const { segments: first } = a;
                const { segments: second } = b;
                const [A] = first;
                const [B] = second;
                return A.duration - B.duration;
            });
        },
    },

    extraReducers(builder) {
        builder
            .addCase(fetchTickets.pending, state => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                const tickets = action.payload?.tickets
                    .map(ticket => ({
                        ...ticket,
                        id: uniqid(),
                    }))
                    .sort((a, b) => a.price - b.price);
                state.tickets = [...state.tickets, ...tickets];

                if (!action.payload.stop) {
                    state.ticketStatus = !state.ticketStatus;
                } else {
                    state.status = "succeeded";
                }
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.ticketStatus = !state.ticketStatus;
            });
    },
});

export const { sortingTheCheapest, sortingTheFastest } = ticketSlice.actions;

export default ticketSlice.reducer;
