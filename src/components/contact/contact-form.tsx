'use client';

import * as React from 'react';

export function ContactForm() {
  return (
    <form className="mt-10 flex flex-col gap-4 max-w-lg">
      <input
        type="text"
        placeholder="Name"
        className="bg-transparent border-b border-gray-500 py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
      />
      <input
        type="text"
        placeholder="Phone"
        className="bg-transparent border-b border-gray-500 py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
      />
      <input
        type="text"
        placeholder="Subject"
        className="bg-transparent border-b border-gray-500 py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
      />
      <textarea
        placeholder="To talk about....."
        className="bg-transparent border-b border-gray-500 py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition resize-none"
        rows={3}
      />
      <button
        type="submit"
        className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded transition flex items-center gap-2 w-max"
      >
        Send
        <span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5-5 5 5"/></svg>
        </span>
      </button>
    </form>
  );
}