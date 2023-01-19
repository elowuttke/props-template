import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 = "Conway"
  const nome2 = "Labenu"

  const apresentaGaragem = (nomeNaGaragem) => {
    alert(`boas vindas à garagem de ${nomeNaGaragem}`)
  };
  const carro1 = {
    nome: "Gol",
    cor: "branco",
    ano: 2015,
    flex: true
  };
  const carro2 = {
    nome: "Fusca",
    cor: "amarelo",
    ano: 1989,
    flex: false
  };
  const carro3 = {
    nome: "Smart",
    cor: "branco",
    ano: 2012,
    flex: false
  };
  const carro4 = {
    nome: "Kombi",
    cor: "bege",
    ano: 1985,
    flex: false
  };
  const carro5 = {
    nome: "Celta",
    cor: "preto",
    ano: 2013,
    flex: true
  };
  return (
    <div className="App">
      <Garagem 
      nome={nome1} 
      apresentaGaragem={apresentaGaragem} 
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}
      />
      <Garagem nome={nome2}
      apresentaGaragem={apresentaGaragem}
      carro1={carro5}
      carro2={carro4}
      carro3={carro3}
      carro4={carro2}
      />
    </div>
  );
}
