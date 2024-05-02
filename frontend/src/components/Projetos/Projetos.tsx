import image from '../../assets/react.svg';
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
      nome: 'App Salão',
      descricao: 'App Android - React Native',
      imagem: 'link_da_imagem_2',
      linkOnline: 'link_do_projeto_online_2',
      linkGithub: 'link_do_repositorio_github_2',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projetos">
      <h1>Projetos</h1>
      {projetos.map((projeto, index) => (
        <div key={ index } className="projeto-card">
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
          <a href={ projeto.linkOnline } target="_blank" rel="noopener noreferrer">
            <img src={ projeto.imagem } alt={ projeto.nome } />
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projetos;
