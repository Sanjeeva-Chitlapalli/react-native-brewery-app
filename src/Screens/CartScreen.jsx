import { View, Text, FlatList, StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import { selectCartItems } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../Components/CardComponent';

const CartScreen = () => {
  const [beer,setBeer]= useState()
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  

    const getBeer = async () => {
    try {
      const response = await request('/beer'); 
      const beerData = await response?.json();
    //   console.log('RESPONSE--->', beerData);
      setBeer(beerData?.slice(1,10)); 
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  };
 
useEffect(()=>{
  getBeer()
  console.log(beer);
},[])

  const renderItem=({item})=>(
    <CardComponent
    id={item._id}
    imageUrl={item.image_url}
    name={item.name}
    tagline={item.tagline} />
  )

    const renderCartItem=({item})=>(
    <CardComponent
    id={item.id}
    imageUrl={item.imageUrl}
    name={item.name}
    tagline={item.tagline} />
  )


  return (
    <View>
      <Text>CartScreen</Text>
      {/* <FlatList
        data={cartItems}
        renderItem={renderCartItem}
      /> */}
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        data={beer}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});

export default CartScreen