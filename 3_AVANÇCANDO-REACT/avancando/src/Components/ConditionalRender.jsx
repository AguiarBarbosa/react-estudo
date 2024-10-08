import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
  
    const [name, setName] = useState("Matheus")



    return (
    <div>
        <h1>Isso será exibido?</h1>
        {!x && <p>Se x for false, sim!</p>}
        {x && <p>Se x for true, sim!</p>}


        <h3>If ternário</h3>
        {name  === "João" ? (
            <div><p>O nome é João!</p></div>

        ) : (
            <div>Nome não é encontrado!</div>
        )}
        <button onClick={() => setName("João")}>Mude para João</button>
    </div>
  )
}

export default ConditionalRender