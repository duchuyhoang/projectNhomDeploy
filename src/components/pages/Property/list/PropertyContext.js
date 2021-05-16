import React, { createContext, useContext, useMemo, useState,useEffect } from "react";


const PropertyContext = createContext({
    listProperty: null,
    homePerPage: 0
})


export const PropertyProvider = ({ children }) => {
    const [homePerPage, setHomePerPage] = useState(8);
    const [offset, setOffset] = useState(1);
    const contextValue = useMemo(() => ({
        listProperty: [
            { id: 1, name: "house" }
        ],
        homePerPage,
        offset,
        setOffset,
        setHomePerPage,
    }), [homePerPage, offset])



    useEffect(() => {
        // fetch data here every change
        // recipe for pagination is (offset-1)*homeperpage -1 


    }, [homePerPage, offset])


    return (
        <PropertyContext.Provider value={contextValue}>
            {children}
        </PropertyContext.Provider>
    )
}

export const withPropertyContext = (Component) => {
    return (props) => {
        return (
            <PropertyProvider>
                <Component {...props} />
            </PropertyProvider>

        )
    }
}


export const usePropertyContext = () => useContext(PropertyContext)