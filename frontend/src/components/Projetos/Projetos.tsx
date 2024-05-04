import image from '../../assets/image.png';
import './Projetos.css';

function Projetos() {
  const projetos = [
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
    {
      nome: 'App Prestige Manager',
      descricao: 'App Android - React Native',
      imagem: image,
      linkOnline: 'link_do_projeto_online_1',
      linkGithub: 'link_do_repositorio_github_1',
    },
  ];

  return (
    <section id="cards-div-mae">
      <h1>Projetos</h1>
      <div className="cards-div-mae">
        {projetos.map((projeto, index) => (
          <div key={ index } className="cards highlight highlight-cards">
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
        ))}
      </div>
    </section>
  );
}

export default Projetos;
