import React from "react";

const UGPrograms = () => {
  const programs = [
    "B.Sc (Data Analytics)",
    "BBA (Retail Mgmt.)",
    "B.Sc (Data Analytics)",
    "BBA (Retail Mgmt.)",
    "B.Sc (Data Analytics)",
    "BBA (Retail Mgmt.)",
    "B.Sc (Data Analytics)",
    "BBA (Retail Mgmt.)",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">UG Programs</h1>

        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border border-gray-300 rounded-md p-2 w-full sm:w-auto">
            <option value="">Discipline</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2 w-full sm:w-auto">
            <option value="">All Campuses</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2 w-full sm:w-auto">
            <option value="">Program Type</option>
          </select>
          <input
            type="text"
            placeholder="Search Programs"
            className="border border-gray-300 rounded-md p-2 flex-grow sm:flex-grow-0"
          />
        </div>

        {/* Program List */}
        <div className="space-y-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-500 bg-white p-4 shadow-md rounded-md"
            >
              <p className="text-lg font-semibold text-gray-800">{program}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UGPrograms;
