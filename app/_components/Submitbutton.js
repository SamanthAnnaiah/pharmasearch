"use client";
import { useFormStatus } from 'react-dom';

export function Submitbutton() {
    const { pending, } = useFormStatus();
    return (
        <div className="flex items-center justify-center mb-4">
            <button disabled={pending}
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
            >{pending ? "Updating...." : "Update Profile"}
            </button>
        </div>
    )
}