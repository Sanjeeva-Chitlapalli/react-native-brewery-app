import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.sectionTitle}>Brewery App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
