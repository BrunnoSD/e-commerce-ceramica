import Header from "../Componentes/Header/Header"
import fundoabout from '../assets/About/fundoabout.png'
import Footer from "../Componentes/ConteudoFooter/Footer"
import 'animate.css';

function About() {
  return (
    <main className="w-full h-about animate-[fadeIn_1.3s_linear]">
      <Header />
      <section className="py-14 px-14 lg:px-72 bg-white">
        <h1 className="text-3xl text-center">NOSSA HISTÓRIA E FILOSOFIA</h1>
        <p className="text-center mt-10 text-sm 2xl:text-base">Nossa loja de cerâmica surgiu da paixão pela arte e pelo valor da tradição artesanal. Desde o começo, buscamos criar peças que não apenas decoram, mas também contam histórias e refletem a singularidade de cada espaço. Valorizamos o trabalho manual e a atenção aos detalhes, oferecendo produtos que combinam qualidade, autenticidade e design, sempre respeitando a individualidade de nossos clientes.</p><br></br>
        <p className="text-center text-sm 2xl:text-base">Ao longo dos anos, ampliamos nossa coleção, mantendo firme nosso compromisso com a excelência e a inovação. Cada peça que produzimos é concebida para integrar tradição e modernidade, trazendo sofisticação e calor aos ambientes. Nossa equipe de artesãos dedica-se a criar produtos únicos, que não apenas embelezam os espaços, mas também os transformam, proporcionando uma experiência estética que eleva o dia a dia.</p>
      </section>
      <section className="lg:mx-40 mb-10">
            <img src={fundoabout} className=" mt-10 lg:mt-20 object-cover w-full" />
        </section>
        <Footer />
    </main>
  )
}

export default About
