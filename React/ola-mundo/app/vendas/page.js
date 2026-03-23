'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import "./vendas.css"

supabase

function Vendas() {

    const [usuario, alteraUsuario] = useState()
    const [livro, alteraLivro] = useState()
    const [quantidade, alteraQuantidade] = useState()
    const [pagamento, alteraPagamento] = useState()
    const [observacao, alteraObservacao] = useState()

    const [listavendas, alteraListaVendas] = useState([])
    const [listausuarios, alteraListaUsuarios] = useState([])
    const [listalivros, alteraListaLivros] = useState([])

    const [inputPesquisaPagamento, alteraInputPesquisaPagamento] = useState()
    const [inputPesquisaObservacao, alteraInputPesquisaObservacao] = useState()
    const [inputPesquisaData, alteraInputPesquisaData] = useState()
    const [inputPesquisaUsuario, alteraInputPesquisaUsuario] = useState()
    const [inputPesquisaIdProduto, alteraInputPesquisaUsuarioIdProduto] = useState()

    async function buscaUsuarios() {

        const { data, error } = await supabase
            .from('usuarios')
            .select()
        alteraListaUsuarios(data)
    }

    async function buscaLivros() {

        const { data, error } = await supabase
            .from('livros')
            .select()
        alteraListaLivros(data)
    }


    async function buscaTodos() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
              *,
                 id_usuario (*),
                 id_livro (*)
  `)

        console.log(data)
        alteraListaVendas(data)

    }

    async function Excluir(id) {

        const opcao = confirm("Tem certeza que deseja excluir?")
        if (opcao == false) {
            return
        }
        const response = await supabase.from('vendas').delete().eq('id', id)

    }

    function formataData(data) {
        let data_formatada = new Date(data)
        data_formatada = data_formatada.toLocaleDateString()
        return data_formatada
    }

    function formataHoras(horas) {
        let horas_formatada = new Date(horas)
        horas_formatada = horas_formatada.toLocaleTimeString()
        return horas_formatada
    }

    function formataPagamento(pagamento) {
        if (pagamento == "pix") {
            return <span class="badge rounded-pill text-bg-primary">PIX</span>
        }

        if (pagamento == "crédito") {
            return <span class="badge rounded-pill text-bg-success">crédito</span>
        }
        if (pagamento == "cartao") {
            return <span class="badge rounded-pill text-bg-secondary">cartao </span>
        }
        if (pagamento == "boleto") {
            return <span class="badge rounded-pill text-bg-dark">boleto</span>
        }

    }

    async function salvar(e) {
        e.preventDefault()

        const objeto = {
            id_usuario: usuario,
            id_livro: livro,
            quantidade: quantidade,
            pagamento: pagamento,
            observacao: observacao
        }
        console.log(objeto)

        const { error } = await supabase.from('vendas').insert(objeto)
        console.log(error)
    }

    //funções de pesquisa
    async function pesquisaPagamento() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_usuario(*), id_livro(*)')
            .eq('pagamento', inputPesquisaPagamento)
        alteraListaVendas(data)
    }
    async function pesquisaObservacao() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_usuario(*), id_livro(*)')
            .ilike('observacao', '%' + inputPesquisaObservacao + '%')
         alteraListaVendas(data)

    }
    async function pesquisaData() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_usuario(*), id_livro(*)')
            .gt('created_at',inputPesquisaData+"00:00:00+00")
            .lt('created_at',inputPesquisaData+"23:59:00+00")
        alteraListaVendas(data)

    }
    async function pesquisaIdUsuario() {
        

    }
    async function pesquisaIdProduto() {

    }
    async function pesquisaMaiorVendas() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_usuario(*), id_livro(*)')
            .order ('quantidade', {ascending:false})
            .limit(1)
        alteraListaVendas(data)

    }
    async function pesquisaVendasHoje() {
         const { data, error } = await supabase
            .from('vendas')
            .select('*, id_usuario(*), id_livro(*)')
            .gt('created_at',new data().toISOString().split("T")+"00:00:00+00")
            .lt('created_at',inputPesquisaData+"23:59:00+00")
        alteraListaVendas(data)


    }


    useEffect(() => {
        buscaTodos();
        buscaUsuarios();
        buscaLivros()
    }, [])






    return (
        <div>

            <h1>Vendas</h1>
            <hr />

            <form onSubmit={salvar}>
                <p>Selecione o usuário</p>
                <select onChange={e => alteraUsuario(e.target.value)}>
                    <option> Selecione... </option>
                    {
                        listausuarios.map(
                            item => <option value={item.id}>{item.nome}</option>
                        )
                    }
                </select>
                <p>Selecione o Livro</p>

                <select onChange={e => alteraLivro(e.target.value)}>
                    {
                        listalivros.map(
                            item => <option value={item.id}>{item.nome}</option>
                        )
                    }
                </select>

                <p>Digite a quantidade</p>
                <input onChange={e => alteraQuantidade(e.target.value)} />
                <p>Digite o pagamento</p>
                <input onChange={e => alteraPagamento(e.target.value)} />
                <br></br>
                <br></br>
                <button onClick={() => buscaTodos}>Salvar</button>

            </form>

            <hr></hr>

            <h2>Filtro</h2>
            <p>Pesquisa pagamento<input onChange={e => alteraInputPesquisaPagamento(e.target.value)} /><button onClick={pesquisaPagamento}> Pesquisar </button></p>
            <p>Pesquisa observacao <input onChange={e => alteraInputPesquisaObservacao(e.target.value)} /><button onClick={pesquisaObservacao}> Pesquisar </button></p>
            <p>Pesquisa data <input onChange={e => alteraInputPesquisaData(e.target.value)} type="date" /> <button onClick={pesquisaData}> Pesquisar </button></p>
            <p>Pesquisa pelo ID do usuario<input onChange={e => alteraInputPesquisaUsuario(e.target.value)} /><button onClick={pesquisaIdUsuario}> Pesquisar </button></p>
            <p>Pesquisa pelo ID do produto<input onChange={e => alteraInputPesquisaUsuarioIdProduto(e.target.value)} /><button onClick={pesquisaIdProduto}> Pesquisar </button></p>
            <p>Filtrar por maiores vendas<button onClick={pesquisaMaiorVendas}> Pesquisar </button></p>
            <p>Ver vendas de hoje<button onClick={pesquisaVendasHoje}> Pesquisar </button></p>

            <table class="table table-hover ">
                <tr>
                    <td>#</td>
                    <td>Nome</td>
                    <td>Livro</td>
                    <td>Quantidade</td>
                    <td>Forma de pagamento</td>
                    <td>Data</td>
                    <td>Observação</td>
                    <td>Ações</td>
                </tr>

                {
                    listavendas.length == 0 ?
                        <p>Carregando..</p>
                        :
                        listavendas.map(
                            (item, index) => <tr >
                                <td>{index}</td >
                                <td onClick={() => location.href = "/vendas/" + item.id}> {item.id_usuario.nome} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id}> {item.id_livro.titulo} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id}> {item.quantidade}</td>
                                <td onClick={() => location.href = "/vendas/" + item.id}>{formataPagamento(item.pagamento)}</td>
                                <td onClick={() => location.href = "/vendas/" + item.id}>{formataData(item.created_at)} às {formataHoras(item.created_at)}</td>
                                <td onClick={() => location.href = "/vendas/" + item.id}>{item.observacao}</td>
                                <td> <button onClick={() => location.href = "/vendas/" + item.id}> ver</button><button onClick={() => Excluir(item.id)}> EXCLUIR </button></td>

                            </tr>
                        )
                }


            </table>




        </div>
    );
}


export default Vendas;