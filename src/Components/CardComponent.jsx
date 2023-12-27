import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, useWindowDimensions,Image, TouchableOpacity } from 'react-native'
import { request } from '../../utils/request'
import Icon from 'react-native-vector-icons/AntDesign'

const CardComponent = ({ id, name, imageUrl, tagline, rating,price, size_ml }) => {
  const [itemButton, setItemButton] = useState(false)

  const addItemToBasket = () => {
     setItemButton(true)
}

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
                            <TouchableOpacity>
                                <Text style={styles.more}>More Details {">"}</Text>
                            </TouchableOpacity>
                            {itemButton ? (
                                <View style={styles.counterButton}>
                                    <TouchableOpacity  onPress={()=>{}}>
                                        <Icon name="minuscircleo" size={25} color='#ED5A6B' />
                                    </TouchableOpacity>
                                    <Text style={styles.couterButtonText}>0</Text>
                                    <TouchableOpacity onPress={()=>{}}>
                                        <Icon name="pluscircleo" size={25} color='#ED5A6B' />
                                    </TouchableOpacity>
                                </View>
                            ) : (

                                <TouchableOpacity style={styles.button} onPress={()=>setItemButton(true)}>
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                            )}


                        </View>
                    </View>
     </View>
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
