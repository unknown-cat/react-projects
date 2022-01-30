import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${searchTerm}`)
      const data = await res.json()
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrinks, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
          return {
            id: idDrinks,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])

  return <AppContext.Provider
    value={{
      loading,
      searchTerm,
      cocktails
    }}
  >
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
