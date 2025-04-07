import "../styles/Pets.css";
import { useState, useEffect } from "react";

export default function Pets() {
  const [petData, setPetData] = useState({
    foto: "",
    especie: "",
    raca: "",
    nome: "",
    sexo: "",
    nascimento: "",
    cor: "",
    info: ""
  });

  useEffect(() => {
    document.title = "Pet | PraPets";
  }, []);

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Pet:", petData);
    alert("Informações salvas com sucesso!");
  };

  return (
    <div className="pets-container">
      <div className="pets-box">
        <h1 className="title">Informações do Pet</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Foto</label>
            <input type="file" accept="image/*" />
          </div>

          <div className="input-group">
            <label>Espécie</label>
            <input type="text" name="especie" placeholder="Cachorro, Gato, etc." onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Raça</label>
            <input type="text" name="raca" placeholder="Raça do pet" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Nome</label>
            <input type="text" name="nome" placeholder="Nome do pet" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Sexo</label>
            <input type="text" name="sexo" placeholder="Macho ou Fêmea" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Data de Nascimento</label>
            <input type="date" name="nascimento" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Cor</label>
            <input type="text" name="cor" placeholder="Cor do pet" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Informações Opcionais</label>
            <textarea name="info" placeholder="Algo mais sobre o pet" rows="3" onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="save-btn">SALVAR</button>
        </form>
      </div>
    </div>
  );
}
