import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [adCarrinho, setAdCarrinho] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [somar, setSomar] = useState(1);

  const adicionarAoCarrinho = (produto) => {

    const produtoExistente = carrinho.find(item => item.sku === produto.sku);

    if (produtoExistente) {

      setCarrinho(
        carrinho.map(item =>
          item.sku === produto.sku
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {

      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }


    setAdCarrinho(adCarrinho + 1);
  };

  const [abrirFechar, setAbrirFechar] = useState(false);

  const toggleCheck = () => {
    setAbrirFechar(!abrirFechar);
  };

  const closeMenu = () => {
    setAbrirFechar(abrirFechar === 'hidden')
  }

  return (
    <CounterContext.Provider
      value={{ somar, setSomar, adCarrinho, setAdCarrinho, carrinho, adicionarAoCarrinho, abrirFechar, toggleCheck, closeMenu }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };