import { useCallback, useEffect, useState } from 'react';
import './App.css';

const useMyHookAsync = (asyncFunction, shouldRun = true) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // Estado: Parado

  const run = useCallback(() => {
    setResult([]);
    setError(null);
    setStatus('pending'); // Estado: Pendente

    return asyncFunction()
      .then((res) => {
        setResult(res);
        setStatus('success'); // Estado: Concluído
      })
      .catch((err) => {
        setError(err);
        setStatus('error'); // Estado: Erro
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [shouldRun, run]);

  return [run, result, error, status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonData = await data.json();
  return jsonData;
};

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [runFetchData, results, error, status] = useMyHookAsync(fetchData);

  // useEffect(() => {
  //   runFetchData();
  // }, [runFetchData]);

  // return (
  //   <div className="App-header">
  //     {results.map((post) => {
  //       return <h2 key={post.id}>{post.title}</h2>;
  //     })}
  //   </div>
  // );

  if (status === 'idle') {
    return <div className="App-header">Sistema Parado!</div>;
  }

  if (status === 'pending') {
    return <div className="App-header">Loading...</div>;
  }

  if (status === 'error') {
    return <div className="App-header">{error}</div>;
  }

  if (status === 'success') {
    return (
      <div className="App-header">
        {results.map((post) => {
          return <h2 key={post.id}>{post.title}</h2>;
        })}
      </div>
    );
  }

  return (
    <div>
      <p>Null</p>
    </div>
  );
};
