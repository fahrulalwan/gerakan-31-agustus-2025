'use client'

import React, { useState, useContext } from 'react'

export const AppContext = React.createContext<{
  tab: number
  setTab: (tab: number) => void
}>({
  tab: 0,
  setTab: () => {}
})

const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  const [tab, setTab] = useState(0)

  const contextValue = {
    tab,
    setTab
  }
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider
