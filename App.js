import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
 
export default function App() {
 
  const [lembrete, setLembrete] = useState(''); 
  const capturarLembrete = (digitado) => {
    setLembrete(digitado);
  }
 
  const adicionarLembrete = () => {
    console.log(lembrete);
  }
 
  return (
    <View style={styles.telaPrincipalView}>
 
      <View style = {styles.lembreteView}>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput
          placeholder = "Lembrar..."
          style = {styles.lembreteTextInput}
          onChangeText = {capturarLembrete} // capturarLembrete() já chama ao renderizar o componente.
          value = {lembrete}
        />
        <Button title="+" onPress={adicionarLembrete}/>
      </View>
 
      <View>
        {/* aqui será exibida a lista de lembrentes */}
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
 
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteTextInput: {
    borderBottomColor: 'black',
    width: '80%',
    borderBottomWidth: 1,
    padding: 2
  }
 
});