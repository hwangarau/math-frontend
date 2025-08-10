// No 'use client' needed yet, as it's just displaying static info

export default function Home() {
  // This is our "dummy" data for now
  const dummyProblem = {
    question_text: "What is the square root of 16?"
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Math Problem
        </h1>
        
        {/* We are displaying the dummy data here */}
        <p className="text-lg text-gray-700">
          {dummyProblem.question_text}
        </p>
        
        {/* We can even build the input form now */}
        <div className="mt-6">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your answer..."
          />
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </div>
        
      </div>
    </main>
  );
}