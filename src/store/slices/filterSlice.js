import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filters: {
            all: true,
            noStop: true,
            oneStop: true,
            twoStops: true,
            threeStops: true,
        },
    },
    reducers: {
        toggleFilter(state, action) {
            const { filters } = state;
            const { filter, checked } = action.payload;

            if (filter === "all") {
                filters.all = checked;
                filters.noStop = checked;
                filters.oneStop = checked;
                filters.twoStops = checked;
                filters.threeStops = checked;
            } else {
                filters[filter] = checked;
                filters.all =
                    filters.noStop &&
                    filters.oneStop &&
                    filters.twoStops &&
                    filters.threeStops;
            }
        },
    },
});

export const { toggleFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
