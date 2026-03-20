'use client'
import { useState } from "react";

function Autenticacao() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")



    function autenticar(e) {
        e.preventDefault()

        const objeto = {
            email: email,
            senha: senha
        }
        console.log(objeto)

        if (objeto.email.length < 3) {
            alert("email muito curto")
            return
        }

        if (objeto.email.length > 20) {
            alert("email muito longo")
            return
        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("o email deve ter um @ e um .")
            return
        }


        if (objeto.senha == ("1234") || objeto.senha == ("4321")) {
            alert("A senha não pode ser sequencial de 1234 nem 4321")
        }


        if (objeto.email == "admin@admin.com" && objeto.senha == "123123") {
            //alert("Parabéns! Você foi conectado com sucesso!")
            alteraAutenticado(true)
        } else {
            alert("Email ou senha inválidos...")
        }



        // ESTUDAR MANIPULAÇÃO DE STRING



    }
    return (
        <div>

            <h1> Login</h1>

            <form onSubmit={autenticar}>

                <p> Digite seu e-mail</p>
                <input type="email" onChange={e => alteraEmail(e.target.value)} />

                <p> Digite sua Senha</p>
                <input type="password" onChange={e => alteraSenha(e.target.value)} />

                <br />
                <br />
                <button > Entrar </button>

            </form>

            <hr />
            {
                //OPERADOR TERNÁRIO
                autenticado == true ?
                    <div>
                        <h1> Painel Administrativo </h1>
                        <p> você está logado lindamente</p>
                        <button onClick={()=> alteraAutenticado(false)}> Sair</button>
                       
                    </div>
                    :
                    <p> Você ainda não está logado </p>

            }



        </div>


    );
}

export default Autenticacao
