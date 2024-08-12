"use client"

import Link from "next/link";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">
                    {/* {statusCode ? `Error ${statusCode}` : 'An error occurred'} */}
                    {error.message}
                </h1>
                <p className="text-gray-700 mb-6">
                    {/* {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'} */}
                    {error.message}
                </p>
                <Link href="/">
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    );
}
