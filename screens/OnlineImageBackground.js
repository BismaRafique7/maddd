import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const OnlineImageBackground = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://example.com/your-image.jpg' }} // Replace with your online image URL
        style={styles.image}
        resizeMode="cover" // Optional: Use 'cover' to scale the image to cover the whole background
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Your Text on Image</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnlineImageBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Adjust the size as needed
    height: '100%', // Adjust the size as needed
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a transparent overlay for better text visibility
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white', // Set text color to contrast with the image
    fontSize: 24,
    fontWeight: 'bold',
  },
});
