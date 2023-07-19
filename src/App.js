import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import './app.css'


function App() {
  return (
    <div className="container-principal">
      <Header/>
      <Sobre/>
      <Skills/>
      <Projetos/>
      <Contato/>
      <Footer/>
      
    </div>
  );
}

export default App;
