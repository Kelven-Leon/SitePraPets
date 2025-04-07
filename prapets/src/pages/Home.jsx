import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">Bem-vindo ao <span>PraPets</span>!</h2>
        <p className="home-description">
          Cuide do seu pet com praticidade! Encontre clínicas, acompanhe vacinas e muito mais.
        </p>
        <div className="home-buttons">
          <a href="/login" className="btn primary">Entrar</a>
          <a href="/register" className="btn secondary">Criar Conta</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
