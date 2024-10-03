import MyComponent from "./MyComponent";

const FirstComponent = () => {
//Esse comentário não fica oculto ao usuário
    return(
        //Esse comentário não fica oculto ao usuário
        <div>
            //Esse comentário não funciona
            {/*Esse comentário fica oculto para o usuário*/}
            
            <h1>Meu Primeiro Componente</h1>
            <MyComponent/>
        </div>
    )

}

export default FirstComponent;