import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        ticketReducer,
        filterReducer,
    },
});
export default store;
