import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  // addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  // cette ligne au dessus gere un cumul d'articles
  // mais si un article est deja present
  // on aura art + art et non 2 x art <= pas bien !

  addItem: (item) => {
    set((state) => {
      const itemIndex = state.items.findIndex(
        (ItemInItems) => ItemInItems.productName === item.productName
      );

      if (itemIndex !== -1) {
        //  on peut cmder 10 de shaque max
        if (state.items[itemIndex].quantity === 10) {
          alert("Vous ne pouvez pas commander plus de 10 articles identiques");
          return state;
        }
        const newItems = [...state.items];
        newItems[itemIndex].quantity++;
        return { ...state, items: newItems };
      } else {
        return { ...state, items: [...state.items, { ...item, quantity: 1 }] };
      }
    });
  },
}));
