// components/SOPViewer.js

export default function SOPViewer({ sop }) {
    if (!sop) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Generated SOP</h2>
        <div className="bg-gray-50 p-4 rounded border whitespace-pre-wrap">
          {sop}
        </div>
      </div>
    );
  }
  