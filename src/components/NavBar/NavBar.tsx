import { useEffect } from 'react';
import { Link } from 'react-scroll';
import handleScroll from '../../utils/scrollHandler';
import './NavBar.css';

function Header() {
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <header className="sticky-header">
      <nav>
        <ul>
          <li>
            <Link to="sobre" smooth duration={ 500 }>
              SOBRE
            </Link>
          </li>
          <li>
            <Link to="contato" smooth duration={ 500 }>
              CONTATO
            </Link>
          </li>
          <li>
            <Link to="projetos" smooth duration={ 500 }>
              PROJETOS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
