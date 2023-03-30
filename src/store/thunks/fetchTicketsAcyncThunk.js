import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from "../../api/getTickets";

export const fetchTickets = createAsyncThunk(
    "tickets/fetchTickets",

    async (searchId, { rejectWithValue }) => {
        try {
            const tickets = await getTickets(searchId);
            return tickets;
        } catch (error) {
            return rejectWithValue(
                "Билеты не найдены! Пожалуйста, повторите попытку снова"
            );
        }
    }
);
