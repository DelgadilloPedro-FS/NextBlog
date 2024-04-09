'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header className='bg-gray-800 py-4 px-4 flex items-center justify-between'>
        <h1 className='text-white text-2xl font-bold'>Blog</h1>
        <ul className='hidden md:flex space-x-6'>
          <li className='relative'>
            <button
              className='bg-transparent text-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-md px-4 py-2'
              onClick={() => router.push('/dashboard')}
            >
              Dashboard
            </button>

            <svg
              className='absolute top-0 right-0 ml-3 h-5 w-5 text-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </li>
        </ul>
      </header>

      <main className='container mx-auto px-4 py-16 flex flex-col items-center space-y-12'>
        <h2 className='text-4xl font-bold text-gray-800'>
          Welcome to Our Blog!
        </h2>
        <p className='text-xl text-gray-600 text-center max-w-md'>
          This is a landing page for your amazing blog. Start creating and
          sharing valuable content with the world.
        </p>
        <button
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => router.push('/posts')} // Replace with actual post route
        >
          Explore Our Posts
        </button>
      </main>

      <footer className='fixed bottom-0 w-full bg-gray-800 text-white py-4 px-4 text-center'>
        &copy; {new Date().getFullYear()} Pedro's Next Blog
      </footer>
    </>
  );
}
