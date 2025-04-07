import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} PraPets. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
