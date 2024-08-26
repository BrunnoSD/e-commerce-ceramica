function Footer() {
  return (
    <main className="flex flex-col md:flex-row w-full h-about lg:h-pfooter 3xl:h-meio bg-white" id="final">
      <section className="lg:w-1/2 ml-5 lg:ml-32 flex flex-col">
          <h1 className="mt-10 md:mt-20 mb-10 text-2xl font-bold">ESPAÇO-CERÂMICA</h1>
          <p className="mt-4 text-lg">End: Av. Bernardino de Campos, 98</p>
          <p className="mt-4 text-lg">São Paulo, SP CEP: 12345-678</p>
          <p className="mt-4 text-lg">Tel: (11) 3456-7890</p>
          <p className="mt-4 text-lg">Email: info@meusite.com</p>
        <section className="md:1/2 mt-10">
          <p className="mt-4 text-lg">SEG - SEX:  8:00 - 18:00</p>
          <p className="mt-4 text-lg">SÁBADO:   9:00 - 15:00</p>
          <p className="mt-4 text-lg">DOMINGO:   FECHADO</p>
        </section>
      </section>
      <section className="md:w-1/2 mt-10 md:mt-20 mx-5 lg:mr-32 md:ml-10 bg-white">
        <form>
          <div className="flex flex-col">
            <label htmlFor="">Nome</label>
            <input type="text" className="border-b hover:border-b-2 focus:border-b-2 border-black outline-none mt-2 px-1 pb-2 text-sm"/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Sobrenome</label>
            <input type="text" className="border-b hover:border-b-2 focus:border-b-2 border-black outline-none mt-2 px-1 pb-2 text-sm"/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Telefone</label>
            <input type="tel" name="" id="" className="border-b hover:border-b-2 focus:border-b-2 border-black outline-none mt-2 px-1 pb-2 text-sm"/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="">Email *</label>
            <input type="email" name="" id="" className="border-b hover:border-b-2 focus:border-b-2 border-black outline-none mt-2 px-1 pb-2 text-sm"/>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="mensagem" className="text-xs">Deixe nos uma mensagem...</label>
            <textarea name="mensagem" id="mensagem" className="mt-5 h-20 border-b hover:border-b-2 focus:border-b-2 border-black outline-none resize-none text-sm"></textarea>
          </div>
          <div className="flex justify-center py-10">
            <button type="submit" className="bg-black text-white px-10 py-2">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Footer;
