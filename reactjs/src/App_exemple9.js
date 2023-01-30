import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Display = ({ props }) => {
  return (
    <>
      <h2
        style={{
          background: '#fff',
          width: '500px',
          color: 'black',
          textAlign: 'right',
        }}
      >
        {props}
      </h2>
    </>
  );
};
const InputCalc = ({ props }) => {
  const handleCalc = (valor) => {
    const result = eval(valor);

    valorRef.current.value = result;
    props(result);
  };
  const valorRef = useRef();
  return (
    <div>
      <input
        ref={valorRef}
        type="text"
        onChange={(e) => props(e.target.value)}
      />
      <button onClick={() => handleCalc(valorRef.current.value)}> = </button>
    </div>
  );
};

export const App = () => {
  const [valueDisplay, setValueDisplay] = useState(0);
  useEffect(() => {
    return () => {
      setValueDisplay(0);
    };
  }, [setValueDisplay]);
  return (
    <div className="App-header">
      <h1>Calculadora</h1>
      <Display props={valueDisplay} />
      <InputCalc props={setValueDisplay} />
    </div>
  );
};

Display.propTypes = {
  props: P.node.isRequired,
};

InputCalc.propTypes = {
  props: P.func.isRequired,
};
