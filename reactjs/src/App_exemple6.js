import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.css';
import P from 'prop-types';

const useMyHook = (cb, delay = 1000) => {
  const saveRef = useRef();
  useEffect(() => {
    saveRef.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveRef.current();
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

// Simulação de pacotes externos -> App.js
function App() {
  const [count1, setCount1] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(() => setCount1((count) => count + 1), delay);

  return (
    <div className="App-header">
      <h2> Contador: {count1} </h2>
      <h3>Delay: {delay}</h3>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        + {incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        - {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}

export default App;
