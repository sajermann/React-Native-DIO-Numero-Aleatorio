import React, { useState } from 'react';
import {
  Text, SafeAreaView, TouchableOpacity,
  StyleSheet
} from 'react-native';

const App = () => {
  const [valor, setValor] = useState(0);
  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 10)
    setValor(novo_numero);
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{valor}</Text>
      <TouchableOpacity
        style={style.botao}
        onPress={handleNumero}
      >
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numero: {
    fontSize: 38,
    color: '#FFF',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#FFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
})

export default App;