
import './App.css';
import Habilidade from './components/Habilidade';
import Projeto from './components/Projeto';

function App() {
  return (
    <div>
  <header>
  <img
    src="/perfil.jpg"
    alt="Foto de Gabriel Ferreira"
    className="foto-perfil"
  />
  <div>
    <h1>Gabriel Ferreira</h1>
    <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
  </div>
</header>

      <section>
        <h2>Sobre mim</h2>
        <p>
          Sou estudante de ADS e tenho interesse na área de
          tecnologia e desenvolvimento de sistemas.
        </p>
      </section>

      <section>
        <h2>Minhas habilidades</h2>
        <Habilidade nome="HTML" />
        <Habilidade nome="CSS" />
        <Habilidade nome="JavaScript" />
        <Habilidade nome="React" />
      </section>

      <section>
        <h2>Meus projetos</h2>
        <Projeto
          nome="Meu primeiro portfólio"
          descricao="Projeto desenvolvido utilizando React e Vite."
        />
      </section>
      
<section>
  <h2>Contato</h2>
  <p>Entre em contato comigo!</p>
  <p>
    GitHub: <a href="https://github.com/Gabrieltedy" target="_blank">
      Meu perfil no GitHub
    </a>
  </p>
  <p>
    LinkedIn: <a href="https://www.linkedin.com/in/gabriel-ferreira-600233384/" target="_blank">
      Meu perfil no LinkedIn
    </a>
  </p>
</section>
    </div>
  );
}
export default App;
