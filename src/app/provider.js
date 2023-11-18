import { createContext } from "react"
const { createContext } = require("react")

const ModalContext = createContext()
const Providers = ({children}) => {
    return (
        <ModalContext.Provider>
            {children}
        </ModalContext.Provider>
    )
}

export default Providers;