import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModelOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openModal = () => {
        setIsModelOpen(true)
    }
    const closeModal = () => {
        setIsModelOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

// // custom hook
// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }

export { AppContext, AppProvider }