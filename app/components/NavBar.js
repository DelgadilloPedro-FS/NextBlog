"use client";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 py-4 px-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Blog</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="relative">
            <button
              className="bg-transparent text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-md px-4 py-2"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </button>

            <svg
              className="absolute top-0 right-0 ml-3 h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </header>
  );
};

export default Navbar;
