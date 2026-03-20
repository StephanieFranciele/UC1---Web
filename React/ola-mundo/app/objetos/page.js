'use client'

function Objetos() {

    const listaNumeros = [3, 10, 9, 7, 821, -9999]
    const listaNomes = ["Kyle", "Bernadete ", "Joanna", "Saray"]


    const usuario = {
        nome: "Stephanie",
        dataNascimento: "30/03/1999",
        idade: 26,
        admin: true
    }

    const listaUsuarios = [
        {
            id: 7,
            nome: "Sete",
            email: "quati.voador@patinete.br"
           
        },
        {
            id: 32,
            nome: "Joaneete",
            email: "labelia@batatinha.uk"
        },
        {
            id: 99,
            nome: "Bernadete",
            email: "bernadete@dotrompete.com"
        }

           ]

     console.log(listaUsuarios)

    return (
        <div>
            <h1>Objetos em JavaScript</h1>
            <p> Conhecendo o famoso JSON, a estrutura mais usada da programação</p>

            <p>Seja bem-vindo, {usuario.nome} você nasceu em {usuario.dataNascimento} e tem {usuario.idade} anos.</p>
            <p> Top 5 melhores números: {listaNumeros[1]}</p>
            <p>Top 3 bichos: {listaUsuarios[1].nome}</p>



        </div>



    );
}

export default Objetos;