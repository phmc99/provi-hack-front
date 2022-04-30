import { createContext } from "react";
import usePageProvider from '../hooks/usePageProvider'

const PageContext = createContext({})

export function PageProvider(props) {
    const pageProvider = usePageProvider()

    return (
        <PageContext.Provider value={pageProvider}>{props.childres}</PageContext.Provider>
    )
}

export default PageContext