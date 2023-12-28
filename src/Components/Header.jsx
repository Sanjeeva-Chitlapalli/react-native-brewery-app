import React from 'react'
import { View, FlatList,Text, Image, StyleSheet,TouchableOpacity, } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  return (
    <View>
        <View style={styles.navbar}>
    <View style={styles.location}>
    <MaterialIcon name="location-on" size={40} color='tomato'></MaterialIcon>
    <View style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    <Text numberOfLines={1} style={styles.locationName}>Bob's bar</Text>
    <Text numberOfLines={1} style={styles.locationDesc}> Ground Floor, Raheja Arcade, 7th Block, Koramangala, Bengaluru, Karnataka 560095</Text>
    {/* <Location/> */}
    </View>
</View>
<TouchableOpacity>
                <FontAwesome name="shopping-cart" color='tomato' size={30} style={styles.profileImage}/>
            </TouchableOpacity>
            </View>
    <TouchableOpacity style={[styles.searchbar, styles.shadowProp]} onPress={()=>navigation.navigate('Search', {data:beer})}>
    <MaterialIcon name="search" size={30} color='#ED5A6B'/>
    <Text style={{color:"#6f6f6f",fontFamily:"Metropolis-Medium",marginHorizontal:12,fontSize:16}}>Search...</Text>
</TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
    location: {
        // marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop:8,
        marginBottom:5
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
    profileImage: {       
        marginRight: 10,
        
    },
    location: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width:"80%"
    },
    locationName: {
        fontSize: 15,
        color: 'black',
        fontFamily:"Metropolis-Medium",   
        fontWeight:'bold'    

    },
    locationDesc: {
        fontSize: 12,
        color: 'black',
        fontFamily:"Metropolis-Medium",   
        fontWeight:'100',
        textAlign:"left",
        color:"gray"    

    },
  })

export default Header
