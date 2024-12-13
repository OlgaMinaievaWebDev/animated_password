import { Link } from "react-router-dom";

function Main({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="mb-4">
        <Link
          to="/"
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Back to Home
        </Link>
      </div>
      <div className="w-full max-w-4xl p-4 bg-white shadow rounded">
        {children}
      </div>
    </div>
  );
}

export default Main;
