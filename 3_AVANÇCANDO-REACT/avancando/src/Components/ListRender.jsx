import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);
    
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age:31},
        {id: 2, name: "Maria", age:18},
        {id: 3, name: "Marcelo", age:60},
    ])


    const deleteRandom = () => {
        const randomNumber = parseInt(document.getElementById('num').value);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} / {user.age}</li>
            ))}
        </ul>
        <div>
            <input type="text" id='num'/>
        </div>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default ListRender