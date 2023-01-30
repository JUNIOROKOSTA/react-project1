import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import './App.css';
import P from 'prop-types';

const BaseContext = createContext();

const RenderContext = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);
  const [text1, setText1] = useState('Btn');
  return (
    <BaseContext.Provider value={{ isOn, onTurn, text1 }}>
      {children}
    </BaseContext.Provider>
  );
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn, text1 } = useContext(BaseContext);
  return (
    <button onClick={onTurn}>
      {text1} Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

export const App = () => {
  return (
    <div className="App-header">
      <RenderContext>
        <h1>Oi </h1>
        <TurnButton />
      </RenderContext>
    </div>
  );
};

RenderContext.propTypes = {
  children: P.node.isRequired,
};
