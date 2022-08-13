import { Card } from "./components/cards/cards" 
import { Navbar }  from './components/navbar/navbar'
import { Rodape } from './components/footer/rodape'
// import lanche1 from '../../assets/lanche1.jpg'
// import lanche2 from '../../assets/lanche2.jpg'
// import lanche3 from '../../assets/lanche3.jpg'
import "./App.css";

function App() {
  return (
    <div className="conteiner">
      <Navbar/>,
      
      <section className="secao">
        <Card 
          titulo = 'X-Tudo'
          descricao = 'lasckas asdasdkaskc asckaskcsa sacasjcsac asc scasi'
          // foto = {lanche1}
          valor = {35}
          preparo = {15}
        />

        <Card 
          titulo = 'X-Bacon'
          descricao = 'lasckas asdasdkaskc asckaskcsa sacasjcsac asc scasi'
          // foto = {lanche2}
          valor = {35}
          preparo = {15}
        />

        <Card 
          titulo = 'X-Salada'
          descricao = 'lasckas asdasdkaskc asckaskcsa sacasjcsac asc scasi'
          // foto = {lanche3}
          valor = {35}
          preparo = {15}
        />
      </section>,
      <Rodape/>
     


    </div>
    
  )
}

export default App;
