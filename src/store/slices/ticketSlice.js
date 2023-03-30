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
                state.status = "succeeded";
                const tickets = action.payload?.tickets
                    .map(ticket => ({
                        ...ticket,
                        id: uniqid(),
                    }))
                    .sort((a, b) => a.price - b.price);
                state.tickets = tickets;
                state.ticketStatus = action.payload?.stop;
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { sortingTheCheapest, sortingTheFastest } = ticketSlice.actions;

export default ticketSlice.reducer;
