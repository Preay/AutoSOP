// components/SOPViewer.js

export default function SOPViewer({ sop }) {
    if (!sop) return null;
  
    return (
      <div className="mt-8 p-4 border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Generated SOP 🚀</h2>
        <pre className="whitespace-pre-wrap">{sop}</pre>
      </div>
    );
  }
  