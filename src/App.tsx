import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const instancia = axios.create({
  baseURL: "http://localhost:3090",
});

async function getRotaPadrao() {
  const res = await instancia.get("/");
  return res.data;
}

async function portRotaPadrao(numero: number) {
  const res = await instancia.post(`/teste?parametro=${numero}`);

  return res;
}

function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState<Array<string>>([]);

  useEffect(() => {
    getRotaPadrao().then((res) => {
      console.log(res);
      const texto = res.texto;
      setMensagem(texto);
    });
  }, []);

  return (
    <>
      {mensagem.map((texto, index) => {
        return (
          <div className="card" key={index}>
            <h1>{texto}</h1>
          </div>
        );
      })}
      <button
        className="botao"
        onClick={() => {
          setCount(count + 10);
          console.log(count);
        }}
      >
        {count}
      </button>
      <button className="botao">sdadsasdasdasd</button>
      <button className="botao">sdadsasdasdasd</button>
      <button className="botao">sdadsasdasdasd</button>
      <button
        className="botao"
        onClick={() => {
          portRotaPadrao(count).then((res) => {
            console.log(res);
          });
        }}
      >
        sdadsasdasdasd
      </button>
    </>
  );
}

export default App;
