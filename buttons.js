import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function buttons({ input, result, calculation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        <Button value="C" onPress={calculation} />
        <Button value="+/-"  />
        <Button value="%" onPress={calculation} />
        <Button value="/" onPress={calculation} />
      </View>
      <View style={styles.row}>
        <Button value="7" onPress={calculation} />
        <Button value="8" onPress={calculation} />
        <Button value="9" onPress={calculation} />
        <Button value="X" onPress={() => calculation('*')} /> 
      </View>
      <View style={styles.row}>
        <Button value="4" onPress={calculation} />
        <Button value="5" onPress={calculation} />
        <Button value="6" onPress={calculation} />
        <Button value="-" onPress={calculation} />
      </View>
      <View style={styles.row}>
        <Button value="1" onPress={calculation} />
        <Button value="2" onPress={calculation} />
        <Button value="3" onPress={calculation} />
        <Button value="+" onPress={calculation} />
      </View>
      <View style={styles.row}>
      
        <Button value="0" onPress={calculation} />
        <Button value="." onPress={calculation} />
        <Button value="=" onPress={calculation} />
        
      
      </View>
    </View>
  );
}

const Button = ({ value, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => onPress(value)}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  input: {
    fontSize: 36,
    textAlign: 'right',
    marginBottom: 10,
    color:'white'
  },
  result: {
    fontSize: 24,
    textAlign: 'right',
    color: 'white',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5A5A5A',
    padding: 20,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 190,
   
  },
  buttonText: {
    fontSize: 20,
    color:'white'
  },
  clearButton: {
    backgroundColor: '#f88',
  },
});

export default buttons;
