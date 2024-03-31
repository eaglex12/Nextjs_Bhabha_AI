// pages/QAList.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const QAList = () => {
  const router = useRouter();
  const [qaPairs, setQAPairs] = useState([]);
  const [filteredPairs, setFilteredPairs] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const parsedQAPairs = JSON.parse(router.query.qaPairs);
    setQAPairs(parsedQAPairs);
    setFilteredPairs(parsedQAPairs);
  }, [router.query.qaPairs]);

  const handleCheckboxChange = (id) => {
    const index = selectedIds.indexOf(id);
    if (index === -1) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    }
  };

  const handleFilter = () => {
    const filteredData = qaPairs.filter((pair) => selectedIds.includes(pair.id));
    setFilteredPairs(filteredData);
    setIsModalOpen(true); // Open the modal 
  };

  const handleDownloadJSONL = () => {
    const jsonlData = filteredPairs.map((pair) => JSON.stringify(pair)).join('\n');
    const blob = new Blob([jsonlData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'filtered_data.jsonl';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Question & Answer List</h1>

      <div className="mb-4">
  <h2 className="text-xl font-semibold mb-2">Filter Options</h2>
  <div className="flex flex-wrap mb-2">
    <button onClick={() => setSelectedIds(qaPairs.map(pair => pair.id))} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4 mb-2">Select All</button>
    <button onClick={() => setSelectedIds([])} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md mr-4 mb-2">Deselect All</button>
  </div>
  <p className="mb-2">
    <strong>Selected Items:</strong> {selectedIds.length}
  </p>
  {qaPairs.map((pair) => (
    <div key={pair.id} className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`pair-${pair.id}`}
        value={pair.id}
        checked={selectedIds.includes(pair.id)}
        onChange={() => handleCheckboxChange(pair.id)}
        className="mr-2"
      />
      <div className="bg-gray-200 rounded-lg p-2 flex flex-col">
        <span className="text-blue-500">{pair.question}</span>
        <span className="text-green-500">{pair.answer}</span>
      </div>
    </div>
  ))}
  <button
    onClick={handleFilter}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
  >
    Apply Filter
  </button>
</div>

    
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Filtered Data</h2>
            <ul>
              {filteredPairs.map((pair) => (
                <li key={pair.id} className="mb-2">
                  <strong className="text-blue-500">Question:</strong> {pair.question}<br />
                  <strong className="text-green-500">Answer:</strong> {pair.answer}
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
      <button
        onClick={handleDownloadJSONL}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
      >
        Download Filtered Data (JSONL)
      </button>
      <button
        onClick={() => setIsModalOpen(false)}
        className="text-gray-500 hover:text-gray-700"
      >
        Close
      </button>
    </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QAList;
