import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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

function App() {
  // const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const mapReverse = reverse ? 'reverse' : '';
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: {counter}</h1>
        <img src={logo} className={`App-logo ${mapReverse}`} alt="logo" />
        <button type="button" onClick={handleClick}>
          Spin {mapReverse}
        </button>
      </header>
    </div>
  );
}

export default App;
