import React, {useState,useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardComponent from './src/Components/CardComponent';
import { request } from './utils/request';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import SlidingBanner from './src/Components/SlidingBanner';
import CartScreen from './src/Screens/CartScreen';

function App() {
  const [beer,setBeer]= useState()

  const getBeer = async () => {
    try {
      const response = await request('/beer'); 
      const beerData = await response?.json();
      console.log('RESPONSE--->', beerData);
      setBeer(beerData?.slice(1,10)); 
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  };
 
useEffect(()=>{
  getBeer()
},[])
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const bannerImages = [
  {source: require('./src/assets/images/beer_ad.png')},
  {source: require('./src/assets/images/beer_ad1.png')},
  {source: require('./src/assets/images/beer_ad2.png')},
];

  
  const renderItem=({item})=>(
    <CardComponent
    id={item._id}
    imageUrl={item.image_url}
    name={item.name}
    tagline={item.tagline} />
  )


  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
      <View>
      {/* <SlidingBanner images={bannerImages}/>
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        data={beer}
        renderItem={renderItem}s
        horizontal={true}
      />
      <Text style={styles.sectionTitle}>Most popular</Text>
      <FlatList
        data={beer}
        renderItem={renderItem}
        horizontal={true}
      /> */}
      <CartScreen/>
      </View>
    </SafeAreaView>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
