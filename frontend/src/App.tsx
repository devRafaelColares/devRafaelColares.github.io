import backgroundImage from './assets/image.png';
import * as components from './utils/imports';

function App() {
  return (
    <div
      style={ { backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh' } }
    >
      <div id="navbar">
        <components.NavBar />
      </div>
      <div id="sobre">
        <components.Sobre />
      </div>
      <div id="contato">
        <components.Contato />
      </div>
      <div id="hardskills">
        <components.HardSkills />
      </div>
      <div id="projetos">
        <components.Projetos />
      </div>
      <div id="footer">
        <components.Footer />
      </div>
    </div>
  );
}

export default App;
