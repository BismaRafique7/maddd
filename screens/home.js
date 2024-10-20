import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Using FontAwesome for icons

export default function home({ navigation }) {  // Corrected function declaration
  return (
    <View style={styles.container}>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
        <Icon name="search-outline" size={25} style={styles.searchIcon} />
      </View>

      {/* Four Boxes */}
      <View style={styles.boxContainer}>
        {/* Box 1 */}
        <View style={styles.box}>
          <Icon name="home-outline" size={30} style={styles.icon} />
          <Text style={styles.title}>Home</Text>
          <Text style={styles.subtitle}>This is the home subtitle</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About1')}
            color="#007BFF"
          />
        </View>

        {/* Box 2 */}
        <View style={styles.box}>
          <Icon name="information-circle-outline" size={30} style={styles.icon} />
          <Text style={styles.title}>Info</Text>
          <Text style={styles.subtitle}>This is the info subtitle</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About1')}
            color="#007BFF"
          />
        </View>

        {/* Box 3 */}
        <View style={styles.box}>
          <Icon name="bell" size={30} style={styles.icon} />
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>This is the settings subtitle</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About1')}
            color="#007BFF"
          />
        </View>

        {/* Box 4 */}
        <View style={styles.box}>
          <Icon name="google" size={30} style={styles.icon} />
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>This is the profile subtitle</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About1')}
            color="#007BFF"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    padding: 5,
    color: '#333',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '45%',
    backgroundColor: '#f8f8f8',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
