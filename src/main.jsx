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

// <Provider> component automatically re-renders all components that are subscribed to the Redux store
// By wrapping the root component <App /> with the <Provider> component and passing the Redux store as a prop, you ensure that the entire application has access to the Redux state and can interact with it using Redux's principles.
