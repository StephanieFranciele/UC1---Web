'use client'
import { useState } from "react";

function Estados() {

    //const nome = "Stephanie"
    const [nome, alteraNome] = useState("")
    const [senha, alteraSenha] = useState("")
    const [email, alteraEmail] = useState("")

function salvar(){
    alert(`O nome é ${nome} e senha ${senha} e seu email ${email}`)
}

    return (
        <div>
            <h1>Programação em React com estados</h1>
            <p><strong> Digite o seu nome </strong></p>
            <input onChange={e => alteraNome(e.target.value)} />

            <br />

            <p > <strong>Digite sua senha </strong></p>
            <input type="password" onChange={e => alteraSenha(e.target.value)} />

            <br />

            <p > <strong>Digite seu email </strong></p>
            <input type="Email" onChange={e => alteraEmail(e.target.value)} />



            <button onClick={salvar}>Salvar </button>
            

        </div>
    );
}

export default Estados;