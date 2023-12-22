/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.scss";

//  main.jsx is our top level component.
//  we pass the Redux store to give every component the access to the Redux variables
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
