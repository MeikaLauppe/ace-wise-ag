import React, { useState } from "react";

const AskAI = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    setResponse(`Here's an AI-generated tip for: "${input}"`);
  };

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">Ask the AI Assistant</h2>
      <textarea
        className="w-full border border-gray-300 p-3 rounded mb-4"
        placeholder="Ask a question about livestock, land, or record keeping..."
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAsk}
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition block mx-auto"
      >
        Get Answer
      </button>
      {response && (
        <div className="mt-6 bg-green-50 border-l-4 border-green-600 text-green-900 p-4 rounded">
          {response}
        </div>
      )}
    </section>
  );
};

export default AskAI;