import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 1500,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 300 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
