import { IconContext } from 'react-icons';
import './Contatos.css';
import {
  RiMailLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

function Contato() {
  return (
    <section id="contato">
      <h1>Contato</h1>
      <div className="icon">
        <a
          href="mailto:rafaelcolares.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Enviar e-mail para Rafael Colares"
        >
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiMailLine />
          </IconContext.Provider>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5538988477728"
          target="_blank"
          rel="noreferrer"
          aria-label="Enviar mensagem pelo WhatsApp para Rafael Colares"
        >
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiWhatsappLine />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-colares/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar o perfil de Rafael Colares no LinkedIn"
        >
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiLinkedinLine />
          </IconContext.Provider>
        </a>
        <a
          href="https://github.com/devRafaelColares"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar o perfil de Rafael Colares no GitHub"
        >
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiGithubLine />
          </IconContext.Provider>
        </a>
      </div>
    </section>
  );
}

export default Contato;
