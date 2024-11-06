import React from 'react';
import { View, StyleSheet } from 'react-native';
import Buttons from './buttons';
import Calculator from './calculator';

function App() {
  const { input, result,calculation } = Calculator(); 

  return (
    <View style={styles.container}>
      <Buttons input={input} result={result} calculation={calculation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 0,

  },
});

export default App;
