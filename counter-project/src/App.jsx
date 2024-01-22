import { useState } from 'react';

import './App.css';

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      console.log(counter);
      //This will increase the value by one only not by 4
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      setCounter(counter + 1);

      // this will increase the value by four
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
    }
    // Corrected assignment
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    // Corrected assignment
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>Feeling Bored Play This Game !!!!!!</h1>
      <h1>counter : {counter}</h1>
      <button onClick={addValue} disabled={counter===20}>Add value {counter}</button>
      <br />
      <button onClick={removeValue} disabled={counter===0}>Remove value {counter}</button>
      <br />
      <button
      onClick={resetValue}
      >Reset To Zero</button>
    </>
  );
}

export default App;
