import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  } 

  const increaseAmount = (id) => {
    dispatch({type: 'INCREASE_AMOUNT', payload: id})
  }
  const decreaseAmount = (id) => {
    dispatch({type: 'DECREASE_AMOUNT', payload: id})
  }

  return (
    <AppContext.Provider
      value={{
        ...state, 
        clearCart,
        remove,
        increaseAmount,
        decreaseAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
