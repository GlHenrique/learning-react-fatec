import React, { useState } from 'react';
import './App.css';
import api from './services/api';

function App() {


  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    api.post('', {
      title: text,
      body: 'Testando request',
      userId: count
    }).then(resposta => {
      console.log(resposta);
    })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="number" id="count" value={count} onChange={(e) => setCount(e.target.value)} />
        <label htmlFor="count">Contador</label>

        <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
        
        <button type="submit">Enviar valores</button>
      </form>
    </div>
  );
}

export default App;
