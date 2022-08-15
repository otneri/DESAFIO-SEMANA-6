import { Secao } from './components/Secao/secao' 
import {Rodape} from './components/footer/rodape'
import { Header } from './components/header/header'
import produtos from './components/produtos/produtos.json'
import "./App.module.css";


function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

  
  return (
    <div className="">
      <Header/>
      <main className="">
        <Secao
          nome = "Entradas"
          produtos = {produtos.entradas}
          subSecoes={Array.from(subSecoesEntradas)}
        />,
        <Secao
          nome = "Principais"
          produtos = {produtos.principais}
          subSecoes = {Array.from(subSecoesPrincipais)}
        />,
        <Secao nome='Bebidas' produtos={produtos.bebidas}/>


      </main>

    
      
      <Rodape/>

    </div>
    
  )
}

export default App;
