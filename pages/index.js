import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Questions = () => {
  const router = useRouter();
  const [qaPairs, setQAPairs] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (inputText) => {
    setIsLoading(true);
    // Fetch data from API
    const response = await fetch('/api/dummyData', {
      method: 'POST',
      body: JSON.stringify({ inputText }),
    });
    const data = await response.json();
    setQAPairs(data);

    router.push({
      pathname: '/qalist',
      query: { qaPairs: JSON.stringify(data) }
    });
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Loading...</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
          </div>
        </div>
      )}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-8">Enter Your Text</h1>
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none"
          value={qaPairs}
          onChange={(e) => setQAPairs(e.target.value)}
          placeholder="Enter your text here..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
          onClick={() => handleSubmit(qaPairs)}
          disabled={isLoading}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questions;
