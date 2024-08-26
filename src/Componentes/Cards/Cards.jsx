import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

function Cards() {
  const destaque = [
    { titulo: "FRETE GRÁTIS", description: "Confira Condições", icone: faTruckFast },
    { titulo: "ENVIAMOS", description: "para todo Brasil", icone: faLocationDot },
    { titulo: "ATÉ 12X SEM JUROS", description: "10% off no boleto", icone: faCreditCard},
    { titulo: "100% SEGURO", description: "Certificado SSL", icone: faShieldHalved },
  ];

  return (
    <main className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {destaque.map((destaques, index) => (
        <section
          className="flex flex-col items-center mt-5 bg-white w-full h-52"
          key={index}
        >
          <FontAwesomeIcon icon={destaques.icone} className="h-14 mt-10" />
          <h1 className="mt-3 text-xl font-semibold">{destaques.titulo}</h1>
          <p className="mt-1 text-lg">{destaques.description}</p>
        </section>
      ))}
    </main>
  );
}

export default Cards;
