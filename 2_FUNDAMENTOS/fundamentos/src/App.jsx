//Components
import FirstComponent from './components/FirstComponent'

import { useState } from 'react'
import './App.css'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <button onClick={Challenge}>Clique pra somar a + b</button>
    </>
  )
}

export default App
