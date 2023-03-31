import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from "../../api/getTickets";

export const fetchTickets = createAsyncThunk(
    "tickets/fetchTickets",

    async searchId => {
        const tickets = await getTickets(searchId);
        return tickets;
    }
);
