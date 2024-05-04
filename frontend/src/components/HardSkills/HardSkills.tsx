import { FaTerminal, FaGitAlt, FaHtml5,
  FaCss3Alt, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiJest, SiTypescript, SiJavascript,
  SiRedux, SiSequelize, SiMysql } from 'react-icons/si';
import { GiOctopus, GiPadlock } from 'react-icons/gi';
import { BsDatabaseFillDown, BsDatabaseUp } from 'react-icons/bs';
import { MdOutlineDataObject } from 'react-icons/md';
import StackItem from '../../utils/StackItem';
import './HardSkills.css';

function HardSkills() {
  return (
    <section id="hardskills">
      <h2>Minhas Stacks  💼</h2>
      <div className="hardskills-div-mae">
        <div className="cards">
          <h3>Fundamentos do Desenvolvimento Web</h3>
          <ul>
            <StackItem icon={ <FaTerminal /> } text="Unix & Shell" />
            <StackItem icon={ <FaGitAlt /> } text="Git" />
            <StackItem icon={ <FaHtml5 /> } text="HTML" />
            <StackItem icon={ <FaCss3Alt /> } text="CSS" />
            <StackItem icon={ <SiJest /> } text="Testes Automatizados" />
            <StackItem icon={ <SiJavascript /> } text="Javascript" />
            <StackItem icon={ <SiTypescript /> } text="Typescript" />
          </ul>
        </div>

        <div className="cards">
          <h3>Desenvolvimento Front-end</h3>
          <ul>
            <StackItem icon={ <BsDatabaseFillDown /> } text="Requisições a APIs" />
            <StackItem icon={ <FaReact /> } text="React.js" />
            <StackItem
              icon={ <GiOctopus /> }
              text="Testes automatizados com React Testing Library"
            />
            <StackItem icon={ <FaCss3Alt /> } text="CSS Modules" />
            <StackItem icon={ <SiRedux /> } text="Gerenciamento de estado com Redux" />
            <StackItem icon={ <FaReact /> } text="Context API" />
            <StackItem icon={ <FaBootstrap /> } text="Bootstrap" />
          </ul>
        </div>

        <div className="cards">
          <h3>Desenvolvimento Backend</h3>
          <ul>
            <StackItem icon={ <FaNodeJs /> } text="Node.js" />
            <StackItem icon={ <FaHtml5 /> } text="Express.js" />
            <StackItem icon={ <BsDatabaseUp /> } text="RESTful APIs" />
            <StackItem icon={ <SiMysql /> } text="MySql databases" />
            <StackItem icon={ <SiSequelize /> } text="Sequelize" />
            <StackItem icon={ <GiPadlock /> } text="Authentication and Authorization" />
            <StackItem
              icon={ <MdOutlineDataObject /> }
              text="Programação Orientada a Objetos"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HardSkills;
