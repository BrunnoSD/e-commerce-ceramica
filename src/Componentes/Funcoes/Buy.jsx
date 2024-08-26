import { create } from 'zustand';

const useCarrinhoStore = create((set) => ({
  adCarrinho: 0,
  adicionarCarrinho: () => set((state) => ({ adCarrinho: state.adCarrinho + 1 })),
}));

export default useCarrinhoStore;