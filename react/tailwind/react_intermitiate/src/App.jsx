import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="text-center m-6 h-24 w-full border-2 border-gray-200 border-dashed rounded-4xl p-6 bg-violet-500">
        <h1 className="text-green-200">Hello</h1>
        <div className="border border-gray-50 rounded-4xl p-5 flex justify-center">
          <h1 className="text-blue-600">It's the Tailwind version 4</h1>
          <h1 className="text-green-500 bg-violet-400">It is the Tailwind extension that is used to display the content</h1>
        </div>
      </div>
      <div className="h-400 mt-100 grid grid-cols-3 gap-2">
        <h1 className="bg-amber-50 w-10 h-10"></h1>
        <h1 className="bg-amber-500 w-10 h-10"></h1>
        <h1 className="bg-amber-900 w-10 h-10"></h1>
        <h1 className="bg-amber-300 w-10 h-10"></h1>
        <h1 className="bg-amber-700 w-10 h-10"></h1>
        
      </div>      
    </>
  );
}

export default App;
