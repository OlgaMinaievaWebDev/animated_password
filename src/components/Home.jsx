import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Component Showcase
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/password"
          className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
        >
          Password Component
        </Link>
        <Link
          to="/movie"
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600"
        >
          Movie Component
        </Link>
        <Link
          to="/textArea"
          className="bg-purple-500 text-white px-6 py-3 rounded shadow hover:bg-purple-600"
        >
          TextArea Component
        </Link>
        <Link
          to="/counter"
          className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600"
        >
          Character Counter
        </Link>
      </div>
    </div>
  );
}

export default Home;
