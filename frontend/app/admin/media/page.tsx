'use client';

import { useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';

export default function MediaPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Media Library</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Upload size={20} className="mr-2" />
          Upload Media
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden group relative">
            <div className="aspect-square bg-gray-200"></div>
            <div className="p-2">
              <p className="text-xs text-gray-600 truncate">image-{i}.jpg</p>
            </div>
            <button className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
