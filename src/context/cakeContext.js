import { createContext, useReducer } from "react";

export const CakeContext = createContext();

const initialState = {
  cake: []
};

const reducer = (state, action) => {

  switch (action.type) {
    case "INIT_CAKE_LIST":
        return{ ...state, cake: action.payload }
    default:
      throw new Error();
  }
};

export const CakeContextProvider = ({ children }) => {
  const [cakeState, dispatchCake] = useReducer(reducer, initialState);

  return (
    <CakeContext.Provider value={[cakeState, dispatchCake]}>
      {children}
    </CakeContext.Provider>
  );
};