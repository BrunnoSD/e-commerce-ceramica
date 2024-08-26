import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

function MenuMobile() {



  return (
    <div className="absolute top-0 right-0 w-4/5 h-screen bg-white">
        <section className="flex flex-col mt-24 ml-10">
            <a href="" className="flex items-center text-lg">
                <FontAwesomeIcon icon={faUserCircle} className="mr-3 h-6" />
                Login
            </a>
            <nav className="mt-10">
                <ul className="gap-8 flex flex-col">
                    <a href="/">Home</a>
                    <a href="#products">Loja</a>
                    <a href="/about">Sobre</a>
                    <a href="">Contato</a>
                </ul>
            </nav>
      </section>
      <section className="absolute right-5 top-44 gap-6 flex flex-col">
        <FontAwesomeIcon icon={faFacebook} className="h-5"/>
        <FontAwesomeIcon icon={faInstagram} className="h-5"/>
        <FontAwesomeIcon icon={faTwitter} className="h-5"/>
        <FontAwesomeIcon icon={faPinterest} className="h-5"/>
      </section>
    </div>
  );
}

export default MenuMobile;
