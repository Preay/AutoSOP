// pages/index.js

import { useState } from "react";
import UploadForm from "../components/UploadForm";
import SOPViewer from "../components/SOPViewer";

export default function Home() {
  const [sop, setSop] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          AutoSOP 🚀
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload your video and instantly get a clean, step-by-step SOP document.
        </p>

        <UploadForm setSop={setSop} />
        <SOPViewer sop={sop} />
      </div>
    </div>
  );
}
