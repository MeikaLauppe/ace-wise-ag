import React, { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");

  const handleUpload = () => {
    if (!file) return;
    // Mock response – replace with real API later
    setTimeout(() => {
      setDiagnosis("This looks like a possible fungal infection. Consider rotating crops and applying fungicide.");
    }, 1500);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Upload Crop Image for Diagnosis</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <button onClick={handleUpload} className="bg-green-700 text-white px-4 py-2 rounded">Diagnose</button>
      {diagnosis && <p className="mt-4 bg-green-100 p-4 rounded">{diagnosis}</p>}
    </div>
  );
};

export default ImageUpload;
