import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.css';
import P from 'prop-types';

// Simulação de pacotes externos -> Data.jsx
export const initState = {
  title: 'Título inicial',
  body: 'Corpo inicial',
  counter: 0,
};

// Simulação de pacotes externos -> reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return { ...state, title: action.payload };
  }
  return { ...state };
};

// Simulação de pacotes externos -> AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// Simulação de pacotes externos -> H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1
        onClick={() =>
          context.dispatch({
            type: 'CHANGE_TITLE',
            payload: inputRef.current.value,
          })
        }
      >
        {context.state.title}
      </h1>
      <input
        type="text"
        ref={inputRef}
        style={{ width: '90%', height: '50px', fontSize: '28px' }}
      />
    </>
  );
};

// Simulação de pacotes externos -> App.js
function App() {
  return (
    <AppContext>
      <div className="App-header">
        <H1 />
      </div>
    </AppContext>
  );
}

// PropTypes dos pacotes:
AppContext.propTypes = {
  children: P.node,
};

export default App;
