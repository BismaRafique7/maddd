import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const aboutus = ({ navigation }) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff'); // Default background color

  // Function to change background color based on the button pressed
  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Press a button to change the background color:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Red" onPress={() => changeColor('red')} color="red" />
        <Button title="Green" onPress={() => changeColor('green')} color="green" />
        <Button title="Blue" onPress={() => changeColor('blue')} color="blue" />
        <Button title="Yellow" onPress={() => changeColor('yellow')} color="yellow" />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('Remove')}
            color="#007BFF"
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default aboutus;
