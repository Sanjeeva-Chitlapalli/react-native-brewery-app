import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import AddToCartBtn from './src/basicElements/AddToCartBtn';

function App() {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  const product = {
    id: 1,
    name: 'Sample Product',
    price: 19.99,
    // Add other product details as needed
  };


  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.sectionTitle}>Brewery App</Text>
        <AddToCartBtn product={product}/>
      </View>
    </SafeAreaView>
    </Provider>
    
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
