/**
  Dependencies
*/

import React, {useReducer, useContext, createContext} from 'react';

// context object to hold the cart
const CartStateContext = createContext();
// context object to hold the dispatch

// instead of importing in the file and invoking the use context
// encapsulate the strategy inside a funcion and just call it 
// whereever you need
export const useCart= ()=>useContext(CartStateContext);