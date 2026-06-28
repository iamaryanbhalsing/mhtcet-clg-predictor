'use client';

import React, { useState, useMemo, useEffect } from 'react';

interface College {
  id: number;
  name: string;
  city: string;
  type: string;
  feesMin: number;
  feesMax: number;
  avgPlacement: number;
  hostel: boolean;
}

export default function MHTCETCollegeFinder() {
  const [percentile, setPercentile] = useState(96.5);
  const [selectedCategory, setSelectedCategory] = useState("OBC");
  const [selectedBranch, setSelectedBranch] = useState("CS");
  const [shortlist, setShortlist] = useState<any[]>([]);

  const colleges = [
    { id: 1, name: "COEP Pune", city: "Pune", type: "Government", feesMin: 80000, feesMax: 120000, avgPlacement: 12.5, hostel: true },
    { id: 2, name: "VIT Pune", city: "Pune", type: "Private", feesMin: 150000, feesMax: 200000, avgPlacement: 8.5, hostel: true },
    { id: 3, name: "PICT Pune", city: "Pune", type: "Private", feesMin: 140000, feesMax: 180000, avgPlacement: 11.2, hostel: true },
    { id: 4, name: "VJTI Mumbai", city: "Mumbai", type: "Government", feesMin: 90000, feesMax: 130000, avgPlacement: 13.5, hostel: true },
  ];

  const filtered = colleges.filter(c => c.branches ? c.branches.includes(selectedBranch) : true); // simplified

  const addToShortlist = (college: any) => {
    setShortlist([...shortlist, college]);
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">MHT-CET College Finder</h1>

        <div className="bg-white p-8 rounded-3xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-6">Enter Your Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2">Percentile</label>
              <input 
                type="number" 
                value={percentile} 
                onChange={(e) => setPercentile(Number(e.target.value))} 
                className="w-full p-4 border rounded-xl text-2xl"
              />
            </div>
            <div>
              <label className="block mb-2">Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-4 border rounded-xl">
                <option value="OPEN">OPEN</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Branch</label>
              <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} className="w-full p-4 border rounded-xl">
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="AI-DS">AI-DS</option>
              </select>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6">Recommended Colleges</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {colleges.map(college => (
            <div key={college.id} className="bg-white p-6 rounded-3xl border">
              <h4 className="font-bold text-xl">{college.name}</h4>
              <p className="text-zinc-600">{college.city} • {college.type}</p>
              <p className="mt-2">₹{college.feesMin.toLocaleString()} - ₹{college.feesMax.toLocaleString()}</p>
              <button 
                onClick={() => addToShortlist(college)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl"
              >
                Add to Shortlist
              </button>
            </div>
          ))}
        </div>

        {shortlist.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Your Shortlist ({shortlist.length})</h3>
            <ul className="list-disc pl-6">
              {shortlist.map((item, i) => <li key={i}>{item.name}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}