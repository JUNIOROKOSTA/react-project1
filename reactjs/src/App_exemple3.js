import React, { useContext, useState } from 'react';
import './App.css';
import P from 'prop-types';

const globalEstate = {
  title: 'Titulo do Contexto.',
  body: 'Corpo do Contexto.',
  contador: 0,
};

const GlobalContext = React.createContext();

const Div = () => {
  return (
    <div className="App-header">
      <H1 />
      <Paragrafo />
    </div>
  );
};

const H1 = () => {
  const textContext = useContext(GlobalContext);
  const { contextState, setContextState } = textContext;
  return (
    <h2 className="title">
      {contextState.title} {'->'} {contextState.contador}
    </h2>
  );
};

const Paragrafo = () => {
  const textContext = useContext(GlobalContext);
  const { contextState, setContextState } = textContext;
  return (
    <p
      onClick={() =>
        setContextState((contextState) => ({
          ...contextState,
          contador: contextState.contador + 1,
        }))
      }
      className="body"
    >
      {contextState.body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalEstate);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

Div.propTypes = {
  children: P.object,
};

H1.propTypes = {
  children: P.string,
};

export default App;
