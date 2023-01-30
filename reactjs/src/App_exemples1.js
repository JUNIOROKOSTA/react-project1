import logo from './logo.svg';
import P from 'prop-types';
import './App.css';
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reverse: true,
//     };
//   }

//   render() {
//     const { reverse } = this.state;
//     const mapReverse = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${mapReverse}`} alt="logo" />
//           <button type="button" onClick={() => this.setState({ reverse: !reverse })}>
//             Spin {mapReverse}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   // const { reverse } = this.state;
//   const [reverse, setReverse] = useState(false);
//   const mapReverse = reverse ? 'reverse' : '';
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//     setReverse(!reverse);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Contador: {counter}</h1>
//         <img src={logo} className={`App-logo ${mapReverse}`} alt="logo" />
//         <button type="button" onClick={handleClick}>
//           Spin {mapReverse}
//         </button>
//       </header>
//     </div>
//   );
// }

// const eventoClick = () => {
//   console.log('H1 foi clicado!');
// };

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   // componentDidUpdate -> Executa sempre que o componente for atualizado.
//   // useEffect(() => {
//   //   console.log('ComponentDidUpdate');
//   // });

//   // componentDidMount -> Executa sempre que o componente for montado(1x).
//   // useEffect(() => {
//   //   console.log('componentDidMount');
//   // }, []);

//   // Executa sempre que o componente com dependência mudar.
//   useEffect(() => {
//     console.log('Foi atualizado Contado', counter, counter2);
//   }, [counter, counter2]);

//   // Executa sempre que o componente for montado.
//   useEffect(() => {
//     document.querySelector('h1').addEventListener('click', eventoClick);

//     //  Executa sempre que o componente for desmontado/encerrado.
//     return () => {
//       // limpa o evento de click.
//       document.querySelector('h1').removeEventListener('click', eventoClick);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>Contador 1: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <h1>Contador 2: {counter2}</h1>
//       <button onClick={() => setCounter2(counter2 + 1)}>+</button>
//     </div>
//   );
// }

const Button = React.memo(function Button({ incrementBtn }) {
  return <button onClick={() => incrementBtn(10)}>+</button>;
});

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCount = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      <Button incrementBtn={incrementCount} />
    </div>
  );
}
Button.propTypes = {
  incrementBtn: P.func,
};
export default App;
