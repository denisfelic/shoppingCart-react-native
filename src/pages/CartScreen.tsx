import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useCart} from '../context/cart';

// import { Container } from './styles';

const CartScreen: React.FC = () => {
  const {cart, totalValue, remove} = useCart();

  return (
    <>
      <Text style={{fontSize: 22, textAlign: 'center'}}>Cart</Text>
      <Text style={{fontSize: 22, textAlign: 'center'}}>
        Total: {totalValue}
      </Text>
      <FlatList
        contentContainerStyle={{flex: 1, width: '100%'}}
        data={cart}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '100%',
                borderWidth: 2,
                marginVertical: 3,
                padding: 5,
                height: 90,
              }}
              onPress={() => {
                remove(index);
              }}>
              <Text>Item: {item.name}</Text>
              <Text>Preço: R$ {item.price}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default CartScreen;
