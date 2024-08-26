import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile.jsx";
import Hamburger from "hamburger-react";
import useCarrinhoStore from "../Funcoes/Buy.jsx";

function CompHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const adCarrinho = useCarrinhoStore((state) => state.adCarrinho)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden")
  };

  return (
    <main className="max-sm:h-36 h-24 w-full bg-segundo">
      <section className={` md:hidden z-20 ${isOpen ? '' : 'hidden'}`}>
        <MenuMobile />
      </section>
      <section className="mx-5 md:ml-0">
        <section className="flex md:justify-between items-center pt-8">
          <section className="md:hidden">
          <svg
              className="h-6 flex cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
              viewBox="0 0 197.7 166"
              preserveAspectRatio="xMinYMax meet"
              data-hook="svg-icon-2"
            >
              <path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
              <circle cx="143.8" cy="153" r="13"></circle>
              <circle cx="90.8" cy="153" r="13"></circle>
              <text
                data-hook="items-count"
                x="85"
                y="35"
                dy=".48em"
                className="text-8xl"
              >
                {adCarrinho}
              </text>
      </svg>
          </section>
          <span className="ml-12 md:mx-10 text-lg md:text-2xl 2xl:text-2xl 3xl:text-3xl cursor-pointer">
            ESPAÇO - CERÂMICA
          </span>
          <nav className="max-md:hidden">
            <ul className="flex gap-14 2xl:text-lg 3xl:text-xl">
              <li>
                <a href="/" className="duration-300 hover:text-hover">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="duration-300 hover:text-hover">
                  Loja
                </a>
              </li>
              <li>
                <a href="/about" className="duration-300 hover:text-hover">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#final" className="duration-300 hover:text-hover">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <input
            type="text"
            id=""
            className="bg-segundo border-b border-black text-black placeholder:text-black pl-3 2xl:pr-20 pb-3 outline-none max-lg:hidden"
            placeholder="Pesquisar..."
          />
        </section>
        <section className="absolute right-3 top-20 sm:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </section>
      </section>
      <section className="flex justify-center mt-7 sm:hidden">
        <input
          type="text"
          id=""
          className="bg-segundo border-b border-black text-black placeholder:text-black pl-3 pb-3 w-80 outline-none"
          placeholder="Pesquisar..."
        />
      </section>
    </main>
  );
}

export default CompHeader;