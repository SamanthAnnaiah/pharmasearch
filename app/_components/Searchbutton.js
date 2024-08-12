"use client"
import { useFormStatus } from 'react-dom';

export default function Searchbutton() {
    const { pending, } = useFormStatus();

    return (
        <>
            <button
                type="submit"
                className="inset-y-0 right-0 mr-2 flex items-center px-2"
            >
                <span className="rounded-full border-2 border-l-0 border-red-600 h-10 w-10">
                    {pending ? "🚑" : "🔍"}</span>
            </button>
        </>
    )
}