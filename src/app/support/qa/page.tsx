export default function qa() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold">Q&A</h1>
            <p className="mt-4 text-lg">Ask your questions here.</p>
            <form className="mt-6 w-full max-w-md">
                <textarea
                    className="w-full p-4 border rounded-lg"
                    rows={5}
                    placeholder="Your question..."
                />
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}