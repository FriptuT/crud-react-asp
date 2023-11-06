import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware,compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";



export const store = configureStore(
    [],
    compose(
        applyMiddleware(thunk)
    )
);