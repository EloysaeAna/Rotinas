import React from 'react';
import { Text, StyleSheet, View, Image, FlatList} from 'react-native';
import Header from './components/header';
import Card from './components/card'
import ROTINAS from './data';

export default function App() {
  return (
    <View > 

      <Header></Header>
      <View>
      <FlatList
        data = {ROTINAS}
        horizontal = {true}
        keyExtractor ={(item)=>item.id}
        renderItem = {({item}) => (
          <Card
          titulo = {item.titulo}
          porcentagem= {item.porcentagem}
          imagem= {item.imagem}
          descricao={item.descricao}
          
          />

        )}>
      </FlatList>
      </View>
</View>

  )}