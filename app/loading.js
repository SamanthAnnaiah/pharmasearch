export default function Loading() {
    return (
        <div className="flex justify-center items-center">
            {/* <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span>Loading...</span>
            </div> */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-300"></div>
            </div>
        </div>

    )
}