"use client";

import { createContext, useContext, useState } from "react";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {

    const [quoteData, setQuoteData] = useState({});

    const updateData = (values) => {

        setQuoteData(prev => ({
            ...prev,
            ...values
        }));

    };

    return (

        <QuoteContext.Provider
            value={{
                quoteData,
                updateData
            }}
        >

            {children}

        </QuoteContext.Provider>

    );

}

export function useQuote(){

    return useContext(QuoteContext);

}