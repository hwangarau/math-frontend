'use client'; // This is very important!

import { useState, useEffect } from 'react';

export default function Home() {
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState(''); // <-- ADD THIS LINE to store the user's input

  useEffect(() => {
    async function fetchProblem() {
      try {
        // THIS IS THE CRITICAL LINE
        // It should point to your LIVE RENDER URL.
        const response = await fetch('https://math-backend-3ngp.onrender.com/api/get-problem/');
        
        const data = await response.json();
        setProblem(data);
      } catch (error) {
        console.error("Failed to fetch problem:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProblem();
  }, []);

  // --- UI Display Logic ---

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center"><p>Loading question...</p></main>;
  }

  if (!problem || problem.error) {
    return <main className="flex min-h-screen items-center justify-center"><p>Could not load the question. Please try again later.</p></main>;
  }

return (
  <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Math Problem #{problem.id}
      </h1>
      
      <p className="text-lg text-gray-700 mb-6"> {/* Added margin-bottom */}
        {problem.question_text}
      </p>

      {/* --- ADD THIS ENTIRE NEW SECTION --- */}
      <div className="mt-4">
        <input
          type="text"
          value={answer} // The input's value is controlled by our 'answer' state
          onChange={(e) => setAnswer(e.target.value)} // When the user types, update the state
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your answer..."
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
      {/* --- END OF NEW SECTION --- */}

    </div>
  </main>
);
}