import imghome from "../assets/Conteudo/fundo.png";
import Cards from "../Componentes/Cards/Cards";
import Colecao from "../Componentes/Colecao/Colecao";
import CardsColecao from "../Componentes/CardsColecao/CardsColecao";
import Footer from "../Componentes/ConteudoFooter/Footer";
import Header from "../Componentes/Header/Header";


function Home() {

  return (
    <main className="relative w-full h-meio lg:h-screen animate-[fadeIn_1.3s_linear]">
      <Header />
      <img
        src={imghome}
        className="absolute -z-50 object-cover w-full h-meio lg:h-full"
      />
      <div className="absolute bg-black opacity-50 -z-40"></div>
      <section className="flex flex-col justify-center items-center h-meio lg:h-full">
        <h1 className="text-white text-4xl lg:text-8xl">ESPAÇO CERÂMICA</h1>
        <p className="text-white text-2xl lg:text-3xl font-sans mt-3">
          Cerâmica artesanal
        </p>
        <a href="#products">
          <button className="text-white mt-20 bg-black px-12 py-3 duration-500 hover:bg-hover">
            Compre agora
          </button>
        </a>
      </section>
      <Cards />
      <Colecao />
      <CardsColecao />
      <Footer />
    </main>
  );
}

export default Home;
