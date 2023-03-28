/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchId = "743ef952542b6df5e214bb4437feb1eb";
const TICKETS_URL = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;

export const fetchTickets = createAsyncThunk(
    "tickets/fetchTickets",

    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(TICKETS_URL);
            if (!response.ok) {
                throw new Error("Server error!");
            }
            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(
                "Билеты не найдены! Пожалуйста, повторите попытку снова"
            );
        }
    }
);

const initialState = {
    tickets: [],
    status: "idle",
    error: null,
    sort: "cheapest",
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
                const tickets = action.payload?.tickets.sort(
                    (a, b) => a.price - b.price
                );
                state.tickets = tickets;
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { sortingTheCheapest, sortingTheFastest } = ticketSlice.actions;

export default ticketSlice.reducer;
