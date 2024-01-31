import { useState, createContext, useContext } from 'react'
import sublinks from './data'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        sublinks,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
