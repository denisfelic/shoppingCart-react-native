import React, {createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext();

const CartProvider: React.FC = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  // Atualiza toda vez que o array "cart" é alterado
  useEffect(() => {
    updateTotalValue();
  }, [cart]);

  function add(item: any) {
    const newCart = cart;
    newCart.push(item);
    setCart([...newCart]);
  }

  function remove(index) {
    const newCart = cart.filter((item, i) => i !== index);
    setCart([...newCart]);
  }

  function updateTotalValue() {
    let totalValueOfCart = 0;
    cart.map((item) => {
      totalValueOfCart += item.price;
    });
    setTotalValue(totalValueOfCart);
  }

  const store = {
    cart,
    totalValue,
    add,
    remove,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export default CartProvider;

export function useCart() {
  const context = useContext(CartContext);
  const {cart, totalValue, add, remove} = context;
  return {cart, totalValue, add, remove};
}
