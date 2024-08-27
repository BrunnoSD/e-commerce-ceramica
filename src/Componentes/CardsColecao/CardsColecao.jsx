import umimg from "../../assets/Colecao/pitem.png";
import doisimg from "../../assets/Colecao/sitem.png";
import tresimg from "../../assets/Colecao/titem.png";
import quatroimg from "../../assets/Colecao/qitem.png";
import quintoimg from "../../assets/Colecao/qqitem.png";
import sextoimg from "../../assets/Colecao/ssitem.png";
import setimoimg from "../../assets/Colecao/sssitem.png";
import oitavoimg from "../../assets/Colecao/oitem.png";
import nonoimg from "../../assets/Colecao/nitem.png";
import { CounterContext } from "../Funcoes/Buy";
import { useContext } from "react";

function CardsColecao() {
  const { contador } = useContext(CounterContext);
  const produto = [
    {
      sku: "0001",
      imagem: umimg,
      nomeproduto: "Conjunto de Tigelas",
      preco: "R$ 85,00",
      situacao: "Novo",
    },
    {
      sku: "0002",
      imagem: doisimg,
      nomeproduto: "Vaso Cerâmico Preto",
      preco: "R$ 50,00",
    },
    {
      sku: "0003",
      imagem: tresimg,
      nomeproduto: "Vaso Cerâmico Branco",
      preco: "R$ 40,00",
    },
    {
      sku: "0004",
      imagem: quatroimg,
      nomeproduto: "Caneca Vulcânica",
      preco: "R$ 25,00",
    },
    {
      sku: "0005",
      imagem: quintoimg,
      nomeproduto: "Caneca Texturizada",
      preco: "R$ 38,00",
      situacao: "Mais vendido",
    },
    {
      sku: "0006",
      imagem: sextoimg,
      nomeproduto: "Caneca Serenity",
      preco: "R$ 18,00",
    },
    {
      sku: "0007",
      imagem: setimoimg,
      nomeproduto: "Jarro Minimalista",
      desconto: "R$ 130,00",
      preco: "R$ 100,00",
      situacao: "Promoção",
    },
    {
      sku: "0008",
      imagem: oitavoimg,
      nomeproduto: "Conjunto de Bowls",
      preco: "R$ 45,00",
    },
    {
      sku: "0009",
      imagem: nonoimg,
      nomeproduto: "Conjunto de Bowls Rústicos",
      preco: "R$ 85,00",
    },
  ];

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mx-5">
      {produto.map((produtos, index) => (
        <section
          key={index}
          className="relative group cursor-pointer lg:duration-500 lg:hover:scale-102"
        >
          <div className="absolute bg-black text-white px-2">
            <p>{produtos.situacao}</p>
          </div>
          <img src={produtos.imagem} className="w-full" />
          <section className="flex justify-center mt-5">
            <p>{produtos.nomeproduto}</p>
          </section>
          <section className="flex justify-center">
            <p className="text-gray-400 line-through">{produtos.desconto}</p>
            <p className="text-gray-400 ml-4">{produtos.preco}</p>
          </section>
          <button
            className="w-full mt-2 mb-5 p-2 bg-black text-white lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:group-hover:translate-y-0 lg:translate-y-3 lg:transition-all lg:duration-300"
            onClick={contador}
          >
            Adicionar ao carrinho
          </button>
        </section>
      ))}
    </main>
  );
}

export default CardsColecao;
