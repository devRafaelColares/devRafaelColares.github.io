import trybeTunes from '../../assets/imgs/trybeTunes.png';
import appdereceitas from '../../assets/imgs/appdereceitas.png';
import starwarsplanets from '../../assets/imgs/starwarsplanets.png';
import trybewallet from '../../assets/imgs/trybewallet.png';
import onlinestore from '../../assets/imgs/onlinestore.png';
import passwordmanager from '../../assets/imgs/passwordmanager.png';
import './Projetos.css';

function Projetos() {
  const gitHubLink = 'https://github.com/devRafaelColares';

  const projetos = [
    {
      id: 1,
      nome: 'app de musicas TrybeTunes',
      descricao: 'Front-end',
      imagem: trybeTunes,
      linkOnline: 'https://github.com/devRafaelColares/app-de-musicas-TrybeTunes',
      linkGithub: 'https://github.com/devRafaelColares/app-de-musicas-TrybeTunes',
    },
    {
      id: 2,
      nome: 'app Recipes',
      descricao: 'Front-end',
      imagem: appdereceitas,
      linkOnline: 'https://github.com/devRafaelColares/app-de-receitas-em-grupo',
      linkGithub: 'https://github.com/devRafaelColares/app-de-receitas-em-grupo',
    },
    {
      id: 3,
      nome: 'app Serach Starwars Planets',
      descricao: 'Front-end',
      imagem: starwarsplanets,
      linkOnline: 'https://github.com/devRafaelColares/app-serach-starwars-planets',
      linkGithub: 'https://github.com/devRafaelColares/app-serach-starwars-planets',
    },
    {
      id: 4,
      nome: 'app Financas Trybewallet',
      descricao: 'Front-end',
      imagem: trybewallet,
      linkOnline: 'https://github.com/devRafaelColares/app-financas-trybewallet',
      linkGithub: 'https://github.com/devRafaelColares/app-financas-trybewallet',
    },
    {
      id: 5,
      nome: 'app Online Store ',
      descricao: 'Front-end',
      imagem: onlinestore,
      linkOnline: 'https://github.com/devRafaelColares/app-em-grupo-online-store',
      linkGithub: 'https://github.com/devRafaelColares/app-em-grupo-online-store',
    },
    {
      id: 6,
      nome: 'app Password Manager',
      descricao: 'Front-end',
      imagem: passwordmanager,
      linkOnline: 'https://github.com/devRafaelColares/app-password-manager',
      linkGithub: 'https://github.com/devRafaelColares/app-password-manager',
    },
    {
      nome: 'Conheça meu GitHub',
      descricao: '',
      imagem: '',
      linkOnline: gitHubLink,
      linkGithub: gitHubLink,
    },
  ];

  return (
    <section id="projetos">
      <h1>Projetos</h1>
      <div className="cards-div-mae">
        {projetos.map((projeto, index) => (
          projeto.id ? (
            <div key={ projeto.id } className="cards highlight highlight-cards">
              <h3>
                <a href={ projeto.linkOnline } target="_blank" rel="noopener noreferrer">
                  {projeto.nome}
                </a>
              </h3>
              <h3>
                <a href={ projeto.linkGithub } target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </h3>
              <p>{projeto.descricao}</p>
              <a href={ projeto.linkOnline } target="_blank" rel="noopener noreferrer">
                <img src={ projeto.imagem } alt={ projeto.nome } />
              </a>
            </div>
          ) : (
            <div
              key={ `semId-${index}` }
              className="cards highlight highlight-cards"
              style={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' } }
            >
              <h3>
                <a href={ projeto.linkGithub }>
                  Em breve novos projetos!
                </a>
              </h3>
            </div>
          )
        ))}
      </div>
    </section>
  );
}

export default Projetos;
