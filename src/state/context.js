import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext([{}, function(){}]);
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const StateConsumer = StateContext.Consumer;
export const useStateValue = () => useContext(StateContext);
