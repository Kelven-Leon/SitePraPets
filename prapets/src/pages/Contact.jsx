// src/pages/Contact.jsx
import React, { useEffect } from "react";
import "../styles/Contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contato | PraPets";
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="title">Entre em Contato</h2>

        <form>
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome completo" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Seu email" />
          </div>

          <div className="input-group">
            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem" rows="5" />
          </div>

          <button type="submit" className="send-btn">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
