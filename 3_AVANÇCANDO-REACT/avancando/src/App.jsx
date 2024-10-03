import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em Public */}
        <img src="/img1.jpg" alt="Paisagem com Sol" />
      </div>
      <div>
        {/* Imagem em Asset*/}
        <img src={City} alt="Cyber City" />
      </div>
    </>
  )
}

export default App
