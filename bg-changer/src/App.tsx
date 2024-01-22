import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState<string>('olive'); // Change to "red" for testing
  const [copied, setCopied] = useState<boolean>(false);

  const handleColorClick = (newColor: string) => {
    // Set the color and copy to clipboard
    setColor(newColor);
    navigator.clipboard.writeText(newColor);
    setCopied(true);

    // Reset the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl pt-10 mx-0 my-auto 
        "
        style={{color:'white'}}>Color Changer & Color Picker</h1>
      </div>
      {copied && (
        <div className='fixed top-4 inset-x-0 text-white text-center'>
          Color copied to clipboard!
        </div>
      )}

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}
            onClick={() => handleColorClick('red')}
          >
            Red
          </button>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}
            onClick={() => handleColorClick('green')}
          >
            Green
          </button>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'yellow' }}
            onClick={() => handleColorClick('yellow')}
          >
            Yellow
          </button>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'violet' }}
            onClick={() => handleColorClick('violet')}
          >
            Violet
          </button>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'orange' }}
            onClick={() => handleColorClick('orange')}
          >
            Orange
          </button>
          <button
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'black' }}
            onClick={() => handleColorClick('black')}
          >
            Black
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
