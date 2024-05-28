import './app.css';
import * as components from './utils/imports';

function App() {
  return (
    <div
      className="app-background"
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
