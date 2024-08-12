"use client";

import { createContext, useContext, useState } from "react";
export let pharmacontext = createContext();

export function PharmaProvider({ children }) {
    let [visible, setvisible] = useState(false);
    let [active, setactive] = useState(false);

    let [searchterm, setsearchterm] = useState("");
    let [optionterm, setoptionterm] = useState("medname");
    let [medcounts, setmedcounts] = useState(0);
    let [sresult, setsresult] = useState({});

    return (
        <pharmacontext.Provider value={{
            visible, setvisible, active, setactive,
            searchterm, setsearchterm, optionterm,
            setoptionterm, medcounts, setmedcounts, sresult, setsresult
        }}>
            {children}
        </pharmacontext.Provider>
    )
}

export function usePharmaContext() {
    let context = useContext(pharmacontext);
    if (context === undefined) {
        throw new Error("Context is out of scope");
    } else {
        return context;
    }
}