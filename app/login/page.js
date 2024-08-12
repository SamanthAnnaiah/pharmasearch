import { signInAction } from "../_lib/actions";

export const metadata = {
    title: "Login"
}

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">Login</h2>
                <form action={signInAction}>
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            className="w-5 h-5 mr-3 svg-inline--fa fa-google fa-w-16"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"
                        >
                            <path
                                fill="currentColor"
                                d="M488 261.8c0 141.5-92.5 242.2-228 242.2-130.8 0-240-109.3-240-240S129.2 24 260 24c64.3 0 118.4 23.8 160.2 63.2l-64.8 64.8c-20.5-20.5-47.8-33.5-95.3-33.5-79.7 0-143.4 63.4-143.4 142.4 0 79.1 63.7 142.5 143.4 142.5 67.6 0 113.3-37.2 123.3-88H260v-80.4h228v30.4z"
                            ></path>
                        </svg>
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
}
