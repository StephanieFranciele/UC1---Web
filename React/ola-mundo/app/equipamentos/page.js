function Equipamentos() {

    const listaEquipamentos = [
        {
            id: 1,
            nome: "Chave de Fenda",
            valor: 8.5,
            descricao: "(Serve para por em fendas)"
           
        },
        {
            id: 2,
            nome: "Serrote",
            valor: 29.9,
            descricao: "(Serra coisas que terminam com\"ote\")"
           
        },
        {
            id: 3,
            nome: "Martelo",
            valor: 12.25,
            descricao: "(Martela o martelão)"
           
        },


    ]
    return (
<div>

<h1> Listagem de equipamentos </h1>
<ul>
    <li><strong>Item:</strong> Chave de de fenda R$ {listaEquipamentos[0].valor} {listaEquipamentos[0].descricao}</li>
    <li><strong>Item:</strong> Serrote R$ {listaEquipamentos[1].valor} {listaEquipamentos[1].descricao}</li>
    <li><strong>Item:</strong> Martelo R$ {listaEquipamentos[2].valor} {listaEquipamentos[2].descricao}</li>
</ul>


            

       

</div>


      );
}

export default Equipamentos;