import { useState } from "react";

const UserDetails = () => {
    const [users] = useState([
        { id: 1, nome: "Abraão", idade: 52, profissao: "Motorista" },
        { id: 2, nome: "Kelly", idade: 29, profissao: "Pedreira" },
        { id: 3, nome: "Nicolas", idade: 10, profissao: "Estudante" }
    ]);

    const logicaCarterira = (idade) => {
        return idade >= 18 ? "É possível tirar carteira" : "Não é possível tirar carteira";
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.nome} & {user.idade} & {user.profissao} <br />
                        {logicaCarterira(user.idade)} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;
