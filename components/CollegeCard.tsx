'use client';

import React from 'react';

interface CollegeCardProps {
  college: any;
  onShortlist: (college: any) => void;
  onCompare: (id: number) => void;
}

export default function CollegeCard({ college, onShortlist, onCompare }: CollegeCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-xl transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold text-xl leading-tight">{college.name}</h3>
          <p className="text-sm text-zinc-500 mt-1">{college.city} • {college.type}</p>
        </div>
        
        <div className={`px-4 py-1 text-xs font-medium rounded-full uppercase tracking-wider ${college.tag === 'safe' ? 'bg-emerald-100 text-emerald-700' : college.tag === 'moderate' ? 'bg-amber-100 text-amber-700' : 'bg-orange-100 text-orange-700'}`}>
          {college.tag}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-5 text-sm mb-8">
        <div>
          <span className="text-zinc-500">Fees</span><br />
          ₹{college.feesMin.toLocaleString()} - ₹{college.feesMax.toLocaleString()}
        </div>
        <div>
          <span className="text-zinc-500">Avg Placement</span><br />
          ₹{college.avgPlacement} LPA
        </div>
        <div>
          <span className="text-zinc-500">Hostel</span><br />
          {college.hostel ? 'Available' : 'Not Available'}
        </div>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={() => onShortlist(college)}
          className="flex-1 py-3.5 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-2xl text-sm font-medium transition-colors"
        >
          ⭐ Add to Shortlist
        </button>
        <button 
          onClick={() => onCompare(college.id)}
          className="flex-1 py-3.5 bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-white rounded-2xl text-sm font-medium transition-colors"
        >
          Compare
        </button>
      </div>
    </div>
  );
}