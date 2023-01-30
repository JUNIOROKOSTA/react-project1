import { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';

const Post = ({ post, clickTitle }) => {
  console.log('The San rendered');
  return (
    <div key={post.id} className="post">
      <h2 onClick={() => clickTitle(post.title)} className="h2-post">
        {post.title}
      </h2>
      <p className="p-post">{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  clickTitle: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  console.log('Father was rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  const handlerClick = (valor) => {
    setValue((v) => valor);
  };

  return (
    <div className="App">
      <p className="p-search">
        <input
          ref={inputRef}
          style={{ width: '100%' }}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} clickTitle={handlerClick} />;
          })
        );
      }, [posts])}
    </div>
  );
}

export default App;
