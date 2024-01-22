import { useState } from 'react';

import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  const mydesc = {
    ideapad3: {
      Price: 2000,
      DisplaySize: 15.6,
    },
    M3: {
      Price: 100000,
      DisplaySize: 14,
    },
  };

  console.log(mydesc.M3);

  return (
    <>
      <h1 className="bg-green-300 text-black rounded-xl mb-9">Tailwind Test</h1>
      <Card lappyName="M3 MACBOOK" btnText="Buy Now" desc={mydesc.M3} />
      <Card lappyName="IDEAPAD GAMING 3" desc={mydesc.ideapad3} />
    </>
  );
}

export default App;
