import CompHeader from "../CompHeader/CompHeader";
import MenuCheckout from "../MenuCheckout/MenuCheckout.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { CounterContext } from "../Funcoes/Buy.jsx";
import { useContext } from "react";

function Header() {
  
  const {adCarrinho, toggleCheck} = useContext(CounterContext)

  return (
    <header className="bg-white">
      <MenuCheckout />
      <nav className="lg:flex justify-between py-5 md:mx-10">
        <ul className="flex justify-evenly max-sm:text-sm md:gap-10">
          <li>
            <a href="" className="flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 md:h-5" />
              Fale pelo Whatsapp
            </a>
          </li>
          <li>
            <a href="" className="flex items-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="mr-2 md:h-5"
              />
              Tire suas dúvidas
            </a>
          </li>
        </ul>
        <ul className="flex max-lg:hidden md:gap-14">
          <li>
            <a href="" className="flex items-center">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2 md:h-5" />
              Login
            </a>
          </li>
          <li>
            <svg
              className="h-6 flex cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
              viewBox="0 0 197.7 166"
              preserveAspectRatio="xMinYMax meet"
              data-hook="svg-icon-2"
              onClick={toggleCheck}
            >
              <path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
              <circle cx="143.8" cy="153" r="13"></circle>
              <circle cx="90.8" cy="153" r="13"></circle>
              <text
                data-hook="items-count"
                x="85"
                y="35"
                dy=".48em"
                className="text-8xl font-wix"
              >
                {adCarrinho}
              </text>
            </svg>
          </li>
        </ul>
      </nav>
      <CompHeader />
    </header>
  );
}

export default Header;
