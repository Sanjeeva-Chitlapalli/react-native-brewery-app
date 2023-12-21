import React, {useState,useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardComponent from './src/Components/CardComponent';
import { request } from './utils/request';

function App() {
  const [beer,setBeer]= useState()

  const getBeer = async () => {
    try {
      const response = await request('/beer'); 
      const beerData = await response.json();
      console.log('RESPONSE--->', beerData);
      setBeer(beerData.slice(1,10)); 
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
  const renderItem=({item})=>(
    <CardComponent
    id={item._id}
    imageUrl={item.image_url}
    name={item.name}
    tagline={item.tagline} />
  )
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
    <FlatList
    data={beer}
    renderItem={renderItem}
    horizontal={true}
    />
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
