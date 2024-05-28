import image from './me.jpeg';
import './Sobre.css';

function Sobre() {
  return (
    <main id="sobre">
      <div id="img-sobre">
        <img src={ image } alt="minha imagem" />
      </div>
      <div className="descricao-sobre highlight">
        <h1>Oii, eu sou Rafael Colares! 👋</h1>
        <div>
          <h3>Desenvolvedor Web 💻</h3>
        </div>
        <div>
          <h3>Idiomas</h3>
          <span>🇧🇷 Pt-Br - Nativo</span>
          <span>🇺🇸 En - Intermediário</span>
        </div>
        <p>
          Minha jornada profissional começou como gerente,
          onde adquiri uma visão abrangente de liderança e
          gestão de equipes. No entanto, meu amor pelo mundo
          da tecnologia me levou a expandir meus horizontes
          para o desenvolvimento web. Atualmente, estou
          imerso em um conjunto diversificado de tecnologias,
          incluindo JavaScript, TypeScript, bem como frameworks
          como React, Node e Express.js. Minha experiência
          prática com Git me permite gerenciar eficientemente
          projetos e colaborar de forma eficaz com minha equipe.
          Além das habilidades técnicas, trago comigo uma forte
          base em resolução de problemas, colaboração em equipe,
          comunicação assertiva, além de trabalhar com metas e metodologias ágeis.
        </p>
      </div>
    </main>
  );
}

export default Sobre;
