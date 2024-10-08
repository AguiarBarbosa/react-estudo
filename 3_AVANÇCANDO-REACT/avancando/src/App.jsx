import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragments from './Components/Fragments';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';
import MeuComponenteHook from './Components/MeuComponenteHook';
import UserDetails from './Components/UserDetails';




function App() {
  const [count, setCount] = useState(0)
  //const name = "Joaquim"
  const [userName] = useState("Maria")
  const cars = [
    {id:1, brand: "ferrari", color: "amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "branco", newCar: false, km: 10000},
    {id:3, brand: "renault", color: "azul", newCar: true, km: 0}
  ]


  function showMessage(){
    console.log("Evento do componente pai!")
  }

const [message, setMessage] = useState("")

const handleMessage = (msg) =>{
  setMessage(msg);
}

const [saida, setSaida] = useState("")

const handleSaida = (saida) =>{
  setSaida(saida);
}

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
      <CarDetails brand="VW" km={200000} color="Azul" newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Toyota" km={50000} color="Preto" newCar={false}/>
      {cars.map((car) =>(
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.brand}
        km={car.km}
        newCar={car.newCar}/>
      ))}
      <Fragments />
      <Container>
        <p>teste de conteudo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      <MeuComponenteHook handleSaida={handleSaida} saida={saida}/>
      <UserDetails/>
    </>
  )
}

export default App
