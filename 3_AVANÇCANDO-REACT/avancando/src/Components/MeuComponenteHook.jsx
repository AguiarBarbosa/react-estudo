const MeuComponenteHook = ({handleSaida,saida}) => {
    const vetor = ["Saida 1", "Saida 2","Saida 3","Saida 4"]
  return (
    <div>
        <h3>A saída é a: {saida}</h3>

        <button onClick={() => handleSaida(vetor[0])}>1</button>
        <button onClick={() => handleSaida(vetor[1])}>2</button>
        <button onClick={() => handleSaida(vetor[2])}>3</button>
        <button onClick={() => handleSaida(vetor[3])}>4</button>
    </div>
  )
}

export default MeuComponenteHook