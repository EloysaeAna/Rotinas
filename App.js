import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from './components/header';
import Card from './components/card'
export default function App() {
  return (
    <View > 

      <Header></Header>
      
      <Card 
      porcentagem = '28%' 
      titulo= 'Leitura'
      imagem='https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg'
      descricao= 'Todos os dias indo e voltando da escola eu leio '>
      </Card>

      
      <Card
      porcentagem = '28%' 
      titulo= 'Ir Para a Escola'
      imagem='https://www.creativefabrica.com/wp-content/uploads/2022/12/31/Kawaii-School-Yellow-Bus-Cartoon-55505931-1.png'
      descricao= 'Meu percurso até a escola'>
      </Card>

      <Card
      porcentagem = '28%' 
      titulo= 'Estudar'
      imagem='https://static.vecteezy.com/ti/vetor-gratis/p3/18807788-criancas-estudando-no-de-desenhos-animados-de-mesa-vetor.jpg'
      descricao= 'Eu estudo para o Enem'>
      </Card>
      
      <Card
      porcentagem = '28%' 
      titulo= ' Atividade'
      imagem='https://static.vecteezy.com/ti/vetor-gratis/p3/2290099-uma-garota-fazendo-licao-de-casa-doodle-personagem-de-desenho-animado-gratis-vetor.jpg'
      descricao= 'Eu faço as atividades escolares'>
      </Card>

<Card
porcentagem = '28%' 
titulo= 'Jantar'
imagem='https://i.pinimg.com/736x/8d/38/21/8d38218352886d4daafceafc954d01c5.jpg'
descricao= 'Todos os dias quando eu chego da escola, eu janto'>
</Card>

<Card
porcentagem = '28%' 
titulo= 'Almoçar'
imagem='https://static.vecteezy.com/ti/vetor-gratis/p1/1847431-comida-jantar-menu-cartoon-fresco-bife-bife-e-ovos-fritos-no-prato-gratis-vetor.jpg'
descricao= 'Todos os dias antes de ir a escola, eu almoço'>
</Card>

</View>
  )}