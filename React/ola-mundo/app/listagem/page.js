import "./listagem.css"

function Listagem() {

    const listaAves = [
        {
            nome: "Arara Azul",
            cor: "Azul e amarelo",
            especie: "Ara ararauna",
            habitat: "Florestas tropicais da América do Sul",
            alimentacao: "Frutas, sementes e castanhas"
        },
        {
            nome: "Tucano",
            cor: "Preto com bico laranja",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas, insetos e pequenos animais"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagos e lagoas salinas",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com manchas brancas",
            especie: "Athene cunicularia",
            habitat: "Campos e áreas abertas",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Pinguim-imperador",
            cor: "Preto, branco e amarelo",
            especie: "Aptenodytes forsteri",
            habitat: "Antártica",
            alimentacao: "Peixes, lulas e krill"
        },
        {
            nome: "Águia-real",
            cor: "Marrom-escuro",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e áreas abertas",
            alimentacao: "Pequenos mamíferos e aves"
        },
        {
            nome: "Beija-flor",
            cor: "Verde iridescente",
            especie: "Trochilidae",
            habitat: "Jardins e florestas",
            alimentacao: "Néctar de flores e pequenos insetos"
        },
        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas e rios",
            alimentacao: "Peixes e pequenos anfíbios"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Áreas arborizadas e doméstico",
            alimentacao: "Sementes e frutas"
        },
        {
            nome: "Papagaio",
            cor: "Verde",
            especie: "Amazona aestiva",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas, sementes e brotos"
        },
        {
    nome: "Arara Azul",
    cor: "Azul e amarelo",
    especie: "Ara ararauna",
    habitat: "Florestas tropicais da América do Sul",
    alimentacao: "Frutas, sementes e castanhas"
  },
  {
    nome: "Tucano",
    cor: "Preto com bico laranja",
    especie: "Ramphastos toco",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas, insetos e pequenos animais"
  },
  {
    nome: "Flamingo",
    cor: "Rosa",
    especie: "Phoenicopterus roseus",
    habitat: "Lagos e lagoas salinas",
    alimentacao: "Algas e pequenos crustáceos"
  },
  {
    nome: "Coruja-buraqueira",
    cor: "Marrom com manchas brancas",
    especie: "Athene cunicularia",
    habitat: "Campos e áreas abertas",
    alimentacao: "Insetos e pequenos roedores"
  },
  {
    nome: "Pinguim-imperador",
    cor: "Preto, branco e amarelo",
    especie: "Aptenodytes forsteri",
    habitat: "Antártica",
    alimentacao: "Peixes, lulas e krill"
  },
  {
    nome: "Águia-real",
    cor: "Marrom-escuro",
    especie: "Aquila chrysaetos",
    habitat: "Montanhas e áreas abertas",
    alimentacao: "Pequenos mamíferos e aves"
  },
  {
    nome: "Beija-flor",
    cor: "Verde iridescente",
    especie: "Trochilidae",
    habitat: "Jardins e florestas",
    alimentacao: "Néctar de flores e pequenos insetos"
  },
  {
    nome: "Garça-branca",
    cor: "Branca",
    especie: "Ardea alba",
    habitat: "Áreas alagadas e rios",
    alimentacao: "Peixes e pequenos anfíbios"
  },
  {
    nome: "Canário",
    cor: "Amarelo",
    especie: "Serinus canaria",
    habitat: "Áreas arborizadas e doméstico",
    alimentacao: "Sementes e frutas"
  },
  {
    nome: "Papagaio",
    cor: "Verde",
    especie: "Amazona aestiva",
    habitat: "Florestas tropicais",
    alimentacao: "Frutas, sementes e brotos"
  }
    ];

    console.log(listaAves);


    {


    }

    return (
        <div>

            <h1> Listagem de aves bonitas</h1>
            <hr />
            {
                listaAves.map(
                    item =><p> {item.nome} da espécie {item.especie}, sua cor é, {item.cor} seu habitat {item.habitat}, e sua alimentação {item.alimentacao}.</p>
                )
            }


        </div>
    );
}

export default Listagem;