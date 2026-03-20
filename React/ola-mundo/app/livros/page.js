'use client'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
const supabase = createClient('https://vywrmyywtcscgodrbdnb.supabase.co', 'sb_publishable_7pdmffDR4YyBbyXg9N7CKA_70Wk5HUh')

function Livros() {

    const [livros, alteraLivros] = useState([])
    const [nome, alteraNome] = useState("")
    const [preco, alteraPreco] = useState()
    const [autor, alteraAutor] = useState("")


    async function buscar() {

        const { data, error } = await supabase
            .from('livros')
            .select()
        console.log(data)
        alteraLivros(data)

    }

    async function salvar() {
        const objeto = {
            nome: nome,
            preco: preco.replace(",", "."),
            autor: autor
        }

        const { error } = await supabase
            .from('livros')
            .insert(objeto)

        console.log(error)

        if(error == null){
            alert("Livro Cadastrado com sucesso! ")
            alteraNome("")
            alteraPreco("")
            alteraAutor ("")
        }else{
            alert("Dados Invalidos, verifique o campos e tente novamente...")
        }

    }

    return (
        <div>
            <h1> Livros </h1>
            <p> Dados dos livros que vieram do banco</p>
            <hr />
            <p>Digite o nome do livro:</p>
            <input value={nome}   onChange={e => alteraNome(e.target.value)} />
            <br />
            <p>Digite o preço do livro:</p>
            <input value={preco}  type='number' onChange={e => alteraPreco(e.target.value)} />
            <br />
            <p>Digite o autor do livro:</p>
            <input  value={autor}  onChange={e => alteraAutor(e.target.value)} />
            <br />
            <br />

            <button onClick={salvar}> salvar</button>
            <br />
            <br />

            <button onClick={buscar}>Carregar livros</button>

            <ul>
                {
                    livros.map(
                        item => <li>Titulo: {item.nome} escrito por {item.autor}</li>
                    )


                }
            </ul>
        </div>
    );
}

export default Livros;