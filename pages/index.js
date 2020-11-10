import { useState } from "react";

function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bem-Vindo</title>
      </head>
      <body>Teste página</body>
    </html>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function addContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      {" "}
      {contador}
      <button onClick={addContador}> Adicionar contador</button>
    </div>
  );
}
export default Home;
