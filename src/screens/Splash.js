import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome To</Text>
      <Text style={styles.blonk}>Blonk</Text>
      <Text style={styles.challenge}>Challenge App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#293241',
    flex: 1,
  },
  welcome: {
    fontSize: 50,
    color: '#ee6c4d',
    textAlign: 'center',
    marginTop: 100,
  },
  blonk: {
    fontSize: 80,
    color: '#ee6c4d',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  challenge: {
    fontSize: 50,
    color: '#ee6c4d',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Splash;
