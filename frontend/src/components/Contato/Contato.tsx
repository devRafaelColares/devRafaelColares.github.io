import { IconContext } from 'react-icons';
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
      <div>
        <h3>Redes Sociais</h3>
        <div className="icon">
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiMailLine />
          </IconContext.Provider>
          <a
            href="mailto:rafaelcolares.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            E-mail

          </a>
        </div>
        <div className="icon">
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiWhatsappLine />
          </IconContext.Provider>
          <a
            href="https://api.whatsapp.com/send?phone=5538988477728"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp

          </a>
        </div>
        <div className="icon">
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiLinkedinLine />
          </IconContext.Provider>
          <a
            href="https://www.linkedin.com/in/rafael-colares/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn

          </a>
        </div>
        <div className="icon">
          <IconContext.Provider value={ { size: '1.5em' } }>
            <RiGithubLine />
          </IconContext.Provider>
          <a
            href="https://github.com/devRafaelColares"
            target="_blank"
            rel="noreferrer"
          >
            GitHub

          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
