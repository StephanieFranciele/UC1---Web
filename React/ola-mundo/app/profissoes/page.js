'use client'
import { useEffect, useState } from "react";

function Profissoes() {

    const [autenticado, alteraAutenticado] = useState(false)
    const [exibelistagem, alteraExibeListagem] = useState(true)

    const [nome, alteraNome] = useState("");
    const [especializacao, alteraEspecializacao] = useState("");
    const [formacao, alteraFormacao] = useState("");

    const [listaTrabalhos, alteralistaTrabalhos] = useState([
        { nome: "Desenvolvedor de Software", especializacao: "Full Stack", nivelFormacao: "Ensino Superior" },
        { nome: "Médico", especializacao: "Cardiologia", nivelFormacao: "Ensino Superior" },
        { nome: "Engenheiro Civil", especializacao: "Infraestrutura", nivelFormacao: "Ensino Superior" },
        { nome: "Advogado", especializacao: "Direito Trabalhista", nivelFormacao: "Ensino Superior" },
        { nome: "Designer Gráfico", especializacao: "Identidade Visual", nivelFormacao: "Ensino Superior" },
        { nome: "Analista de Dados", especializacao: "Business Intelligence", nivelFormacao: "Ensino Superior" },


        { nome: "Administrador", especializacao: "Gestão Empresarial", nivelFormacao: "Ensino Superior" },
        { nome: "Contador", especializacao: "Auditoria", nivelFormacao: "Ensino Superior" },
        { nome: "Farmacêutico", especializacao: "Farmácia Hospitalar", nivelFormacao: "Ensino Superior" },
        { nome: "Veterinário", especializacao: "Clínica de Pequenos Animais", nivelFormacao: "Ensino Superior" },
        { nome: "Publicitário", especializacao: "Marketing Digital", nivelFormacao: "Ensino Superior" },
        { nome: "Jornalista", especializacao: "Jornalismo Investigativo", nivelFormacao: "Ensino Superior" }

    ]);

    function salvar(e) {
        e.preventDefault()

        const item = {
            nome: nome,
            especializacao: especializacao,
            nivelFormacao: formacao
        }
        //listaTrabalhos.push(objeto)
        alteralistaTrabalhos(listaTrabalhos.concat(item))
    }

    //  function mostrarlistagem(){
    //      alteraExibeListagem (false)
    // }// Se for fazr desse jeito, precisa chamar no botão: onClick(mostrarListagem)

    useEffect(() => {
        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            alteraAutenticado(true)
        }

    }, [])

    return (
        <div>

            <h1 className="text-center"> Lista de Profissões</h1>


            <hr />
            <button onClick={() => alteraExibeListagem(true)} className="btn btn-primary "> Listagem </button>
            {
                autenticado == true ?

                    <button onClick={() => alteraExibeListagem(false)} className="btn btn-success - mx-4 "> Cadastro </button>

                    :
                    <div>
                    </div>
            }



            
            {
                exibelistagem == true ?
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Profissão</th>
                                <th scope="col">Especialização</th>
                                <th scope="col">Nível de Formação</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                listaTrabalhos.map(
                                    item =>
                                        <tr>

                                            <td>{item.nome}</td>
                                            <td>{item.especializacao}</td>
                                            <td>{item.nivelFormacao}</td>

                                        </tr>
                                )
                            }

                        </tbody>
                    </table>

                    :

                    <form onSubmit={salvar}>

                        <p> Digite o nome da Profissão</p>
                        <input onChange={e => alteraNome(e.target.value)} />
                        <p> Digite a especialização da Profissão</p>
                        <input onChange={e => alteraEspecializacao(e.target.value)} />
                        <p> Digite o nível de Formação da Profissão</p>
                        <input onChange={e => alteraFormacao(e.target.value)} />


                        <br />
                        <button>Salvar</button>
                        <br /><br />
                    </form>


            }







        </div >
    )
}
export default Profissoes;

