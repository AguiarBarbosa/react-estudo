import './App.css'
import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'


const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, SetName] = useState("")
  const [price, SetPrice] = useState("")
  const {data: items, httpConfig, loading } = useFetch(url)


  // RESGATANDO DADOS
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }

  //   fetchProducts()
  // }, [])
//ADIÇÃO DE PRODUTOS
const handleSubmit = async (e) => {
  e.preventDefault()
  const product = {
    name,
    price,
  }


  // const res = await fetch(url, {
  //   method: "POST",
  //   headers:{
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(product)
  // })

  // const addedProduct = await res.json()


  // setProducts((prevProducts) => [...prevProducts, addedProduct])

  httpConfig(product, "POST")


  SetName("")
  SetPrice("")
}
//CARREGAMENTO DINÂMICO
  

  return (
    <>
      <div className="app">
        <h1>Lista de Produtos</h1>
        {loading && <p>Carregando dados...</p>}
        {!loading && <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>}
          <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" value={name} name='name' onChange={(e) => SetName(e.target.value)}/>
              </label>
              <label>
                Preço:
                <input type="number" value={price} name='price' onChange={(e) => SetPrice(e.target.value)}/>
              </label>
              
              {!loading && <input type="submit" value="criar"/>}              
            </form>
          </div>

      </div>
    </>
  )
}

export default App
