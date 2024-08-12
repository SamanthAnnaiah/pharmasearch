"use client";
import Searchbutton from "../_components/Searchbutton";
import { useFormStatus } from 'react-dom';
import { getsearch, processsearch } from "../_lib/actions";
import { useState } from "react";
import Medresults from "../_components/Medresults";
import { usePharmaContext } from "../PharmaProvider";

export default function Search() {
    const { pending, } = useFormStatus();

    let { searchterm, setsearchterm, optionterm,
        setoptionterm, medcounts, setmedcounts, sresult, setsresult } = usePharmaContext();

    function handlesort(sortedresult) {
        setsresult([...sortedresult]);
    }

    return (
        <div className="p-4 text-yellow-400 outline-none focus:outline-none ml-auto mr-auto w-3/4">
            <form action={getsearch}>
                <div className="flex text-xl">
                    <select
                        className="bg-white bg-gradient-to-r from-rose-950 to-rose-950 opacity-90 h-12 px-5 
                    rounded-l-full focus:outline-none 
                    outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 
                    cursor-pointer max-h-10 overflow-y-hidden" name="searchtype"
                        value={optionterm} onChange={(e) => setoptionterm(e.target.value)}
                    >
                        <option className="font-bold cursor-pointer" value="symptoms">
                            Symptoms
                        </option>
                        <option className="font-bold cursor-pointer" value="medname">
                            Medicine
                        </option>
                    </select>
                    <input
                        value={searchterm} onChange={(e) => setsearchterm(e.target.value)}
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="bg-white bg-gradient-to-r from-rose-950 to-red-700 opacity-90 h-10 flex px-5 w-full rounded-r-full 
                    focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600"
                        autoComplete="on"
                        spellCheck="false"
                        required
                        step="any"
                        autoCapitalize="none"
                        autoFocus
                    />
                    {/* <Searchbutton /> */}
                    <button
                        type="submit"
                        className="inset-y-0 right-0 mr-2 flex items-center px-2"
                        onClick={async () => {
                            sresult = await processsearch(searchterm, optionterm);
                            setmedcounts(sresult.length);
                            setsresult(sresult);
                        }}
                    >
                        <span className="rounded-full border-2 border-l-0 border-red-600 h-10 w-10">
                            {pending ? "🚑" : "🔍"}</span>
                    </button>
                </div>
            </form>
            {
                (sresult.length > 0) ?
                    <div className="text-center font-extrabold mt-4">
                        <span className="text-sm">Pharma records found: {sresult.length}</span>
                        <Medresults sresult={sresult} handlesort={handlesort} />
                    </div>
                    : (
                        (sresult.length == 0 && searchterm.length > 1) ? (
                            <div className="text-center font-extrabold mt-4">
                                <div className="text-lg">No records found.</div>
                                <div className="text-lg">Try searching with other keywords.</div>
                            </div>
                        ) :
                            (
                                ""
                            )
                    )
            }
        </div>
    );
};

