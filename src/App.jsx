import { createSignal } from 'solid-js';

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      {count()}
    </button>
  );
};

export default App;
