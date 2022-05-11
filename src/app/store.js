import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { budgetReducer, expensesReducer, savingsReducer } from "../reducers/SavingsReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";

export default configureStore({
    reducer: combineReducers({budget: budgetReducer,expenses: expensesReducer,savings: savingsReducer}),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: [composeWithDevTools]
})