import React, { useContext, useReducer, useState } from 'react';
import './App.css';
import P from 'prop-types';

const initState = {
  title: 'Titulo inicial',
  body: 'Corpo inicial',
  counter: 0,
};

const reducer = (state, action) => {
  const { title } = state;
  switch (action.type) {
    case 'muda':
      return { ...state, title: 'Novo titulo' };

    case 'invert':
      return { ...state, title: title.split('').reverse().join('') };

    case 'date':
      return { ...state, title: action.payload };
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { title, body, counter } = state;
  return (
    <div className="App-header">
      <h1 className="title">
        {title}. __ Contado: {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })} className="btn-muda">
        Click
      </button>
      <button onClick={() => dispatch({ type: 'invert' })} className="btn-muda">
        Invert
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'date',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
        className="btn-muda"
      >
        DateTime
      </button>
    </div>
  );
}

export default App;
