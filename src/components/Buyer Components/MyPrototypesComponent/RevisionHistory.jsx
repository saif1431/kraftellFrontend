import React from "react";

function RevisionHistory({ history }) {
  return (
    <div className="flex flex-col gap-6 w-full rounded-lg">
      <h1 className="text-2xl font-semibold">Revision History</h1>
      {history.length === 0 ? (
        <p className="text-gray-500">No revisions yet.</p>
      ) : (
        history.map((entry, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-lg px-4 py-5 border-gray-200 flex items-center justify-between flex-wrap gap-4"
          >
            <div>
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={entry.profileImg || "/profileImg.svg"}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="mb-3">
                  <h3 className="text-lg text-gray-800">
                    {entry.user || "Unknown"}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-md">{entry.description}</p>
            </div>
            <span className="text-primary">
              {new Date(entry.date).toLocaleDateString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default RevisionHistory;
