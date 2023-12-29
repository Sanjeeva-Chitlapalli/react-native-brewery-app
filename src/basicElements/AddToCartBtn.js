// AddToCartBtn.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem, removeFromCart } from '../redux/cartSlice'; // Update the path
import { selectCartItems } from '../redux/cartSlice'; // Update the path
import Icon from 'react-native-vector-icons/AntDesign'

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Find the item in the cart based on the product id
  const cartItem = cartItems.find(item => item.product.id === product.id);

  // Define the count based on whether the item is in the cart
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
    <View style={styles.container}>
        <View style={styles.button}>
            {count > 0 && (
        <TouchableOpacity style={styles.buttonElements} onPress={handleAddToCart}>
          {/* <Icon name="minuscircleo" size={25} color='#ED5A6B' /> */}
          <Text>+</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity  onPress={handleAddToCart}>
        <Text style={styles.buttonText}>{count === 0 ? 'Add to Cart' : `${count}`}</Text>
      </TouchableOpacity>
      {count > 0 && (
        <TouchableOpacity style={styles.buttonElements} onPress={handleRemoveFromCart}>
          {/* <Icon name="pluscircleo" size={25} color='#ED5A6B' /> */}
          <Text>-</Text>
        </TouchableOpacity>
      )}
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:10,
  },
  button: {
    backgroundColor: '#FFCA2A',
    padding: 10,
    borderRadius: 15,
    flexDirection:'row',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonElements:{
    margin:1,
    padding:2,
    width:15,
  },

});

export default AddToCartBtn;
