import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filters: {
            all: true,
            noTransfer: true,
            oneTransfer: true,
            twoTransfers: true,
            threeTransfers: true,
        },
    },
    reducers: {
        toggleFilter(state, action) {
            const { filters } = state;
            const { filter, checked } = action.payload;

            if (filter === "all") {
                filters.all = checked;
                filters.noTransfer = checked;
                filters.oneTransfer = checked;
                filters.twoTransfers = checked;
                filters.threeTransfers = checked;
            } else {
                filters[filter] = checked;
                filters.all =
                    filters.noTransfer &&
                    filters.oneTransfer &&
                    filters.twoTransfers &&
                    filters.threeTransfers;
            }
        },
    },
});

export const { toggleFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
