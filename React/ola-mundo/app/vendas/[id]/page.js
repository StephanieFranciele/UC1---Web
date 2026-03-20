'use client'
import supabase from "@/app/conexao/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


function ConsultaVendas() {
    const params = useParams()

    const [listaVendas, alteraListaVendas] = useState([])

    async function buscaVendas() {

        const { data, error } = await supabase
            .from('vendas')
            .select(`
              *,
                 id_usuario (*),
                 id_livro (*)
  `)
            .eq("id", params.id)
        console.log(error)
        alteraListaVendas(data)
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



    useEffect(() => {
        buscaVendas();

    }, [])




    return (
        <div>
            <h1> Consulta de Vendas </h1>
            <hr />

            {
                listaVendas.map(
                    (item) => <div>

                        <p> <strong>O ID é: </strong> {item.id} </p>
                        <p> <strong>Comprador: </strong> {item.id_usuario.nome} </p>
                        <p><strong>O Livro: </strong> {item.id_livro.nome} </p>
                        <p> <strong>Quantidade: </strong>{item.quantidade}</p>
                        <p><strong>Pagamento: </strong> {item.pagamento}</p>
                        <p><strong>Emitido em: </strong>{formataData(item.created_at)} às {formataHoras(item.created_at)}</p>
                    </div>
                )

            }
        </div>

    );
}

export default ConsultaVendas;