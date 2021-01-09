import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/routes/Router';
import CartProvider from './src/context/cart';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
};

export default App;
