// pages/questions.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Home = () => {

  let router=useRouter();
  const [qaPairs, setQAPairs] = useState([]);

  const handleSubmit = async (inputText) => {
    const response = await fetch('/api/dummyData', {
      method: 'POST',
      body: JSON.stringify({ inputText }),
    });
    const data = await response.json();
    setQAPairs(data);

    console.log(data);

    router.push({
        pathname: '/qalist',
        query: { qaPairs: JSON.stringify(data) }
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
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
      >
        Submit
      </button>
    </div>
  </div>
  );
};

export default Home;
