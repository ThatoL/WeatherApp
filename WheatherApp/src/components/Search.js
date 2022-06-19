import { View, TouchableOpacity, TextInput , StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

export default function Search() {
  return (
    <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => {console.log('pressed search')}}
        >
          <FontAwesome name="search" style={styles.icon} size={24} color="grey" />
        </TouchableOpacity>
      
        <TextInput
          placeholder='Search City...'
          style={styles.searchTool}
        />
      </View>
  )
}


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 30,
        height: 40,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        elevation: 7,
        shadowOpacity: 0.7,
      },
      icon: {
        marginRight: 15,
        marginLeft: 10
      },
      searchTool: {
        fontSize: 18,
      }  
})