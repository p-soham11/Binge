/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

export const store = configureStore({
    // Reducers are combined into one root reducer, which is then passed to the store during initialization.
    reducer: {
        home: homeSlice,
    },
});
