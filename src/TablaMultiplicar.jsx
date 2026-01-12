import { useState } from "react";

function TablaMultiplicar() {
  const [numero, setNumero]=useState("");
  const [limite, setLimite]=useState("");

  const resultados = [];

  for (let i = 1; i <= limite; i++) {
    resultados.push(
      <li key={i}>
        {numero} x {i} = {numero * i}
      </li>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Tabla de multiplicar</h2>

      <input
        type="number"
        placeholder="Número base"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hasta"
        value={limite}
        onChange={(e) => setLimite(e.target.value)}
        className="ms-2"
      />

      <ul className="mt-3">
        {numero > 0 && limite > 0 && resultados}
      </ul>
    </div>
  );
}

export default TablaMultiplicar;
