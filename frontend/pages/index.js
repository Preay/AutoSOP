// pages/index.js

import { useState } from "react";
import UploadForm from "../components/UploadForm";
import SOPViewer from "../components/SOPViewer";

export default function Home() {
  const [sop, setSop] = useState("");

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-8">AutoSOP - Generate SOPs from Videos 🎥</h1>
      <UploadForm setSop={setSop} />
      <SOPViewer sop={sop} />
    </div>
  );
}
