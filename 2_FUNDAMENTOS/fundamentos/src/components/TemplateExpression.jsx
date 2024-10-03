const TemplateExpression = () =>{
    
    const name = "Lucas";
    const data = {
        age: 31,
        job: "Desenvolvedor"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p><b>Você atua como: {data.job}</b></p>
            {console.log("JSX REACT")}
        </div>

    )

}

export default TemplateExpression;