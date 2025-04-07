import "../styles/About.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Sobre | PraPets";
  }, []);

  return (
    <div className="about-container">
      <div className="about-box">
        <img src="/logo.png" alt="Logo PraPets" className="about-logo" />
        <h1 className="about-title">Sobre o PraPets</h1>

        <p className="about-text">
          O <strong>PraPets</strong> nasceu da paixão pelos animais e do desejo de facilitar a vida de tutores que querem o melhor para seus companheiros. Criamos uma plataforma que conecta cuidados essenciais com praticidade e carinho.
        </p>

        <div className="mission-section">
          <h2 className="section-title">Nossa Missão</h2>
          <p>
            Facilitar o cuidado com os pets, promovendo bem-estar animal por meio da tecnologia. Queremos tornar o acesso à saúde, adoção e informações algo simples, rápido e acessível para todos.
          </p>
        </div>

        <div className="features-section">
          <h2 className="section-title">O que oferecemos</h2>
          <ul>
            <li>📍 Localização de clínicas veterinárias próximas</li>
            <li>🛁 Agendamento de vacinas, banhos e tosas</li>
            <li>🐶 Adoção de pets e integração com ONGs</li>
            <li>📋 Gerenciamento de informações dos pets</li>
          </ul>
        </div>

        <p className="closing-text">
          Com o PraPets, seu pet está sempre em boas patas! 🐾
        </p>
      </div>
    </div>
  );
};

export default About;
