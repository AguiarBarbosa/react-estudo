//Components
import FirstComponent from './components/FirstComponent'

import { useState } from 'react'
import './App.css'
import TemplateExpression from './components/TemplateExpression'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
    </>
  )
}

export default App
