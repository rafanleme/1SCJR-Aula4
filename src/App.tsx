import { Counter } from "./Counter"

function App() {

  const initialValue = 10;

  const onSend = () => {
    alert("Pronto, estou enviando!");
  }

  return (
    <Counter handleClick={onSend}>
      <p>Aqui está o filho de counter</p>
    </Counter>
  );
}

export default App
