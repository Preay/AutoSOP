// components/UploadForm.js

import { useState } from "react";
import { uploadVideo, transcribeVideo, summarizeText } from "../utils/api";

export default function UploadForm({ setSop }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const uploadRes = await uploadVideo(file);
      const filename = uploadRes.filename;

      const transcribeRes = await transcribeVideo(filename);
      const transcription = transcribeRes.transcription;

      const summarizeRes = await summarizeText(transcription);
      setSop(summarizeRes.sop);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className="p-2 bg-blue-600 text-white rounded-md"
      >
        {loading ? "Processing..." : "Upload & Generate SOP"}
      </button>
    </div>
  );
}
