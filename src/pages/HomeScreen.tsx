import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useCart} from '../context/cart';

const DATA = [
  {
    id: '1',
    name: 'Lampada Led Violeta',
    price: 59,
  },
  {
    id: '2',
    name: 'Luminária florescente',
    price: 38.99,
  },
  {
    id: '3',
    name: 'Abajur incandecente',
    price: 25,
  },
];

const HomeScreen: React.FC = () => {
  const {add} = useCart();
  return (
    <>
      <Text style={{fontSize: 22, textAlign: 'center'}}>Home</Text>
      <FlatList
        contentContainerStyle={{flex: 1, width: '100%'}}
        data={DATA}
        renderItem={({item}) => {
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
                add(item);
              }}>
              <Text>Item: {item.name}</Text>
              <Text>Preço: R$ {item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default HomeScreen;
