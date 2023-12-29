import React,{useState} from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem, removeFromCart } from '../redux/cartSlice'; // Update the path
import { selectCartItems } from '../redux/cartSlice';
import DetailModal from './DetailModal';

const CardComponent = ({product, id, name, imageUrl, tagline, rating,price, size_ml }) => {
  const [isDetailModalVisible, setDetailModalVisible] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const product={id, name, imageUrl, tagline, rating,price, size_ml };
  const cartItem = cartItems.find(item => item.product.id === product.id);
  const count = cartItem ? cartItem.count : 0;

  const handleAddToCart = () => {
    if (count === 0) {
      // If count is 0, add the item to the cart
      dispatch(addToCart({ product, count: 1 }));
    } else {
      // If count is more than 0, update the count
      dispatch(updateCartItem({ productId: product.id, count: count + 1 }));
    }
  };

  const handleRemoveFromCart = () => {
    if (count > 0) {
      // If count is more than 0, update the count
      dispatch(updateCartItem({ productId: product.id, count: count - 1 }));
    } else {
      // If count is 0, remove the item from the cart
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <View style={styles.cardContainer}>
        <View  style={{ flexDirection: 'row' }}>
     <Image style={styles.cardImage} source={{ uri: imageUrl }} />
     <View style={styles.content}>
      <View>
                        <Text numberOfLines={1} style={styles.title}>{name}</Text>
                        <Text numberOfLines={1} style={styles.tagline}>{tagline}</Text>
                        {/* <View style={styles.rating}>
                            <Icon name="star" color="#18983E" size={15} />
                            <Text style={styles.ratingText}>{rating}</Text>
                        </View > */}
                        {/* <View style={styles.pricing}>
                            <RIcon name="currency-rupee" color="#2f2f2f" size={16} />
                            <Text style={styles.price}>{item.pricings[0].price} - </Text>
                            <RIcon name="currency-rupee" color="#2f2f2f" size={16} />
                            <Text style={styles.price}>{item.pricings[3].price}</Text>
                        </View> */}
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity onPress={() => setDetailModalVisible(true)}>
                                <Text style={styles.more}>More Details {">"}</Text>
                            </TouchableOpacity>
                            <AddToCartBtn product={product}/>
                            {/* {count>0 ? (
                                <View style={styles.counterButton}>
                                    <TouchableOpacity  onPress={handleRemoveFromCart}>
                                        <Icon name="minuscircleo" size={25} color='#ED5A6B' />
                                    </TouchableOpacity>
                                    <Text style={styles.couterButtonText}>{count}</Text>
                                    <TouchableOpacity onPress={handleAddToCart}>
                                        <Icon name="pluscircleo" size={25} color='#ED5A6B' />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                            )} */}


                        </View>
                    </View>
     </View>
     <DetailModal
                isVisible={isDetailModalVisible}
                name={product.name}
                abv={product.abv}
                ibu={product.ibu}
                ph={product.ph}
                brewers_tips={product.brewers_tips}
                imageUrl={product.image_url}
                onClose={() => setDetailModalVisible(false)}
                isDetailModalVisible={isDetailModalVisible}
            />
    </View>
    
  )
}
const styles= StyleSheet.create({
    cardContainer:{
      height: 160,
      marginHorizontal: 10,
      marginVertical:5 ,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
      padding: 8,
      justifyContent: 'center',
      flex:1,
      width:300
    },
    text:{
        color:"black"
    },
    cardImage: {
      height: 130,
      width: '30%',
      resizeMode: 'contain', 
  },
  content: {
    width: '70%',
    flexDirection:"column",
    justifyContent:"space-between"
},
title: {
    color: 'black',
    fontFamily: "Metropolis-Bold",
    fontSize: 15,
    marginBottom: 5,
    fontWeight:"700",
},
tagline: {
  color: '#4f4f4f',
  fontFamily: "Metropolis-Light",
  // marginTop: 5
},
button: {
  backgroundColor: '#FC3839',
  paddingHorizontal: 15,
  paddingVertical: 5,
  borderRadius: 5,
  marginRight: 10,
},
buttonText: {
  fontFamily: 'Metropolis-SemiBold',
  color: 'white',
  textTransform: 'uppercase'
},
footer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  justifyContent: 'space-between'
},
more: {
  color: '#7f7f7f',
  fontFamily: 'Metropolis-Medium',
  borderWidth: 0.6,
  borderColor: '#9f9f9f',
  paddingHorizontal: 5,
  paddingVertical: 3,
  fontSize: 12,
  borderRadius: 15

},
counterButton: {
  flexDirection: 'row',
  alignItems: 'center'
  // backgroundColor: '#ED5A6B',
},
couterButtonText: {
  color: '#4f4f4f',
  fontFamily: 'Metropolis-SemiBold',
  margin: 10
},
})

export default CardComponent
