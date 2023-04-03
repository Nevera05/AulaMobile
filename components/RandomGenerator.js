import React from 'react';
import { View, Text } from 'react-native';

const RandomGenerator = ({min, max}) => {
  // função para gerar um número aleatório dentro do range
  const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // gera cinco números aleatórios
  const numbers = Array.from({length: 5}, () => randomInRange(min, max));

  // renderiza os números na tela
  return (
    <View>
      <Text>Estes são os números aleatórios são:</Text>
      {numbers.map((num, index) => <Text key={index}>{num}</Text>)}
    </View>
  );
}

export default RandomGenerator;