import { CounterContext } from "../Funcoes/Buy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlus,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import pitem from "../../assets/Colecao/pitem.png";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

function MenuCheckout() {
  return (
    <main className="absolute right-0 w-96 h-full bg-white max-md:hidden">
      <section className="w-full h-28 bg-black flex items-center justify-between">
        <p className="text-white text-2xl">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-10 mr-16 cursor-pointer"
          />
          Carrinho
        </p>
      </section>
      <section className="flex">
        <section>
          <img src={pitem} className="w-24 h-20 ml-10 mt-10" />
        </section>
        <section className="flex flex-col mt-9 ml-5">
          <p className="text-gray-400">Sou um produto</p>
          <strong>
            <p>R$ 50,00</p>
          </strong>
          <div className="border border-black w-20 h-8 mt-1">
            <div className="flex items-center justify-between mx-2">
              <FontAwesomeIcon
                icon={faWindowMinimize}
                className="-mt-1 h-3 cursor-pointer"
              />
              <p className="mt-1">1</p>

              <FontAwesomeIcon icon={faPlus} className="mt-1 h-3 cursor-pointer" />
            </div>
          </div>
        </section>
      </section>
      <section className="ml-10 mt-44 text-2xl">
        <h1>Subtotal:</h1>
        <h1 className="mt-2">R$ 50,00</h1>
      </section>
      <section className="flex justify-center items-center mt-20">
        <button className="bg-principal text-white mx-10 px-24 py-3">Ver carrinho</button>
      </section>
    </main>
  );
}

export default MenuCheckout;
