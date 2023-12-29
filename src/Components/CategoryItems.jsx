import React from 'react'
import { View, FlatList,Text, Image, StyleSheet,TouchableOpacity, } from 'react-native';
import pale from '../assets/paleAle.png';
import lager from '../assets/lagerBeer.png';
import wheat from '../assets/wheatBeer.png';
import popular from '../assets/popular.png';
import food from '../assets/food.png'
import bottle from '../assets/bottle.png'
import pizza from '../assets/pizzaIcon.png'

const categoryData = [
    { category: 'CRAFT', image: pale, text: 'Craft' },
    { category: 'DRAUGHT', image: lager, text: 'Draught' },
    { category: 'DOMESTIC', image: bottle, text: 'Domestic' },
    { category: 'IMPORTED', image: popular, text: 'Imported' },
    { category: 'PIZZA', image: pizza, text: 'Pizza' },
    { category: 'APPETIZERS', image: food, text: 'Appetizers' },
  ];


const CategoryItems = () => {
    
    const renderItem = ({ item }) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('CategorySpecific', { category: item.category })}
        >
          <Image source={item.image} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{item.text}</Text>
        </TouchableOpacity>
      );

  return (
    <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
        horizontal={true}
        contentContainerStyle={styles.categoryContainer}
      />
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
    margin: 5,
  },
  headingContainer: {
    marginTop: 5,
  },
  categoryImage: {
    width: 60,
    height: 70,
    margin: 0,
    resizeMode: 'contain',
  },
  categoryText: {
    fontFamily: 'Metropolis-SemiBold',
    color: '#8f8f8f',
    fontSize: 12,
  },
  category: {
    alignItems: 'center',
    backgroundColor: '#F4F2F2',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#F8F3F8',
    marginHorizontal: 5,
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default CategoryItems
