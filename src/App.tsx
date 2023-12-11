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

type bodyPost = {
  numero: number;
  texto: string;
};

async function portRotaPadrao(body: bodyPost) {
  const res = await instancia.post(`/`, body);

  return res;
}

function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState<
    Array<{
      id: number;
      nome: string;
      idade: number;
    }>
  >([]);

  useEffect(() => {
    getRotaPadrao().then((res) => {
      console.log(res);
      setMensagem(res);
    });
  }, []);

  return (
    <>
      {mensagem.map(({ id, idade, nome }, index) => {
        return (
          <div className="card" key={index}>
            <h1>
              {id} {nome} {idade}
            </h1>
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
          portRotaPadrao({
            numero: count,
            texto: "SLA",
          }).then((res) => {
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
