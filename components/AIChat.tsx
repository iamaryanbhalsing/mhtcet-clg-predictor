'use client';

import React, { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat({ percentile, category, branch }: { percentile: number; category: string; branch: string }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hi! I'm your CET admission assistant. Ask me anything about colleges, cutoffs, or CAP rounds.` }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    const userInput = input.toLowerCase();
    setInput("");

    setTimeout(() => {
      let response = `Based on your ${percentile} percentile (${category} category, ${branch} branch): `;

      if (userInput.includes("coep") || userInput.includes("cs")) {
        response += "COEP CS is ambitious. You have safe chances at VIT and PICT for IT/AI-DS.";
      } else if (userInput.includes("placement")) {
        response += "Top colleges like VJTI and COEP offer 12+ LPA average packages.";
      } else {
        response += "Check the Results tab for personalized recommendations. Need help with choice filling?";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 700);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border">
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
        🤖 AI Admission Assistant
      </h3>

      <div className="h-80 overflow-y-auto border rounded-2xl p-6 mb-6 space-y-4 bg-zinc-50 dark:bg-zinc-950">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-5 py-3.5 rounded-3xl text-sm leading-relaxed ${msg.role === 'user' 
              ? 'bg-blue-600 text-white' 
              : 'bg-zinc-100 dark:bg-zinc-800'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="E.g., Can I get CS in COEP with 96 percentile?"
          className="flex-1 px-5 py-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}