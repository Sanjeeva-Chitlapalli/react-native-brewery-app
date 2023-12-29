import React, { useState, useEffect } from 'react';
import { SafeAreaView,ScrollView,TouchableOpacity, Text, View, StyleSheet, FlatList } from 'react-native';
import CardComponent from '../Components/CardComponent';
import SlidingBanner from '../Components/SlidingBanner';
import { request } from '../../utils/request';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Header from '../Components/Header';
import CategoryItems from '../Components/CategoryItems';

const Home = () => {

  const [beer, setBeer] = useState()

  const getBeer = async () => {
    try {
      const response = await request('/beer');
      const beerData = await response?.json();
      console.log('RESPONSE--->', beerData);
      setBeer(beerData?.slice(1, 10));
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  };

  useEffect(() => {
    getBeer()
  }, [])
  const bannerImages = [
    { source: require('../assets/images/beer_ad6.jpg') },
    { source: require('../assets/images/beer_ad.png') },
    { source: require('../assets/images/beer_ad4.jpg') },
    { source: require('../assets/images/beer_ad1.png') },
    { source: require('../assets/images/beer_ad5.jpg') },
    { source: require('../assets/images/beer_ad2.png') },
  ];

  const renderItem = ({ item }) => (
    <CardComponent
    product={item}
      id={item._id}
      imageUrl={item.image_url}
      name={item.name}
      tagline={item.tagline} />
  )

  return (
    <ScrollView>
      <Header/>
      <SlidingBanner images={bannerImages} />
      <View style={styles.topHeadingContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.line} />
          <View>
            <Text style={styles.heading}>What's on your mind?</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <CategoryItems/>
      <View style={styles.headingContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.line} />
          <View>
            <Text style={styles.heading}>In the spotlight</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <FlatList
        data={beer}
        renderItem={renderItem}
        horizontal={true}
      />
      <View style={styles.headingContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.line} />
          <View>
            <Text style={styles.heading}>Chef's Delight</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <FlatList
        data={beer}
        renderItem={renderItem}
        horizontal={true}
      />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#9f9f9f',
  },
  heading: {
    textTransform: 'uppercase',
    width: 250,
    textAlign: 'center',
    fontFamily: 'Metropolis-Medium',
    color: '#8f8f8f',
    letterSpacing: 1,
  },
  topHeadingContainer: {
    marginBottom: 10,
  },
  headingContainer: {
    marginBottom: 10,
    marginTop:15
  },
  searchbar:{
    backgroundColor:'white',
    margin:10,
    borderRadius:10,
    padding:7,
    marginTop:10,
    flexDirection:"row",
    alignItems:"center"
},
shadowProp: {
    elevation: 5,
shadowColor: '#171717',
  },
})

export default Home
