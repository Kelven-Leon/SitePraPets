import "../styles/Services.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Serviços | PraPets";
  }, []);

  const services = [
    {
      title: "Clínicas Veterinárias",
      description: "Encontre clínicas próximas para cuidar do seu pet com facilidade.",
      icon: "/icons/vet.png",
    },
    {
      title: "Vacinas e Banhos",
      description: "Agende vacinas, banhos e tosas de forma rápida e segura.",
      icon: "/icons/bath.png",
    },
    {
      title: "Adoção e ONGs",
      description: "Descubra animais disponíveis para adoção e ONGs parceiras.",
      icon: "/icons/adoption.png",
    },
    {
      title: "Informações do Pet",
      description: "Gerencie o histórico de saúde, vacinas e cuidados do seu pet.",
      icon: "/icons/pet-info.png",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-box">
        <h1 className="title">Nossos Serviços</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
