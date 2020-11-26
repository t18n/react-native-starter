import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>You pressed {clickCount} times</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setClickCount(clickCount + 1)}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#123456',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
