import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Letras from './componentes/letras/letras';
import Palabras from './componentes/palabras/palabras.jsx';

function App() {
  const [text, setText] = useState("");

  function Handler(event) {
    setText(event.target.value);
  }

  return (
    <>
    <h1>Texto</h1>
    <textarea onChange={Handler} value={text} />
    <Letras text={text}/>
    <Palabras text={text}/>
    </>
    
    );
}

export default App;
