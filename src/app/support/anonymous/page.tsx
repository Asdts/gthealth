export default function anonymous() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">Anonymous Feedback</h1>
      <p className="mt-4 text-lg">We value your feedback. Please share your thoughts below.</p>
      <form className="mt-6 w-full max-w-md">
        <textarea
          className="w-full p-4 border rounded-lg"
          rows={5}
          placeholder="Your feedback..."
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