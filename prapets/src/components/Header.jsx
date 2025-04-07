import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">PraPets</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/Pets">Pets</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
      </nav>
    </header>
  );
};

export default Header;
