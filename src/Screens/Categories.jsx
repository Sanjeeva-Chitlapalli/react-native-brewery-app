import React from 'react'
import { View , TouchableOpacity, Text, StyleSheet} from 'react-native'
import CategoryItems from '../Components/CategoryItems'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Categories = () => {
  return (
    <View>
      <TouchableOpacity style={[styles.searchbar, styles.shadowProp]} onPress={()=>navigation.navigate('Search', {data:beer})}>
    <MaterialIcon name="search" size={30} color='#ED5A6B'/>
    <Text style={{color:"#6f6f6f",fontFamily:"Metropolis-Medium",marginHorizontal:12,fontSize:16}}>Search...</Text>
</TouchableOpacity>
<CategoryItems/>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Categories
