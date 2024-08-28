import { CounterContext } from "../Funcoes/Buy.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";

function MenuCheckout() {
  const { carrinho, adCarrinho, setAdCarrinho, abrirFechar, somar, setSomar, closeMenu } = useContext(CounterContext); 



  const ad = () => {
    setSomar(somar + 1);
    setAdCarrinho(adCarrinho + 1);
  };

  const sub = () => {
    if (adCarrinho > 0) {
      setSomar(somar - 1);
      setAdCarrinho(adCarrinho - 1);
    }
  };


  return (
    <main className={`absolute right-0 w-80 lg:w-96 h-screen bg-white md:hidden ${abrirFechar ? "" : "hidden"}`}>
      <section className="w-full h-32 bg-black flex items-center justify-between">
        <p className="text-white text-2xl">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-10 mr-16 cursor-pointer"
            onClick={closeMenu}
          />
          Carrinho
        </p>
      </section>

      {carrinho.map((item, index) => (
        <section className="flex" key={index}>
          <section>
            <img src={item.imagem} className="w-24 h-20 ml-5 lg:ml-10 mt-5 lg:mt-10" alt={item.nomeproduto}/>
          </section>
          <section className="flex flex-col mt-5 lg:mt-9 ml-5">
            <p className="text-gray-400">{item.nomeproduto}</p>
            <strong>
              <p>{item.preco}</p>
            </strong>
            <div className="border border-black w-16 h-6 mt-2 lg:mt-3" id="items">
              <div className="flex items-center justify-between mx-2">
                <FontAwesomeIcon
                  icon={faWindowMinimize}
                  className="-mt-2 h-3 cursor-pointer"
                  onClick={sub}
                />
                <p className="">{adCarrinho}</p>

                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-3 cursor-pointer"
                  onClick={ad}
                />
              </div>
            </div>
          </section>
        </section>
      ))}

      <section className="ml-10 mt-72 text-2xl text-black absolute top-60">
        <h1 >Subtotal:</h1>
        <h1 className="mt-2 text-gray-400">R$ 50,00</h1>
      </section>
      <section className="absolute top-3/4 flex justify-center items-center pt-10 mt-8 border-t">
        <button className="bg-principal hover:bg-btn text-white text-nowrap mx-12 px-16 py-3">
          Ver carrinho
        </button>
      </section>
    </main>
  );
}

export default MenuCheckout;