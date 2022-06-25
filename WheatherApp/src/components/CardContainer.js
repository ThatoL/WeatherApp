import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function CardContainer(props) {
    const {city, temp, country, img} = props
  return (
    <View style={styles.cardContainer}>
        <ImageBackground source={img} imageStyle= {{opacity:2}}>
          <View style={styles.weatherCard}>
            <View style={styles.location}>
              <Text style={styles.city}>{city}</Text>
              <Text style={styles.country}>{country}</Text>
            </View>
            <View style={styles.tempContainer}>
              <Text style={styles.tempText}>{temp}°C</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
    cardContainer : {
        margin: 20,
        shadowColor: 'red',
        shadowOffset: {width: 5, height: 5},
        elevation: 7,
        shadowOpacity: 1,
        borderRadius: 20,
        height: 90
      },

      weatherCard : {
        flexDirection: 'row',
        //marginTop: 10,

      },
      location: {
        marginTop: 20,
        padding: 10,
      },
      city: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    
      }, 
      country: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
      },
      tempContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      tempText: {
        fontSize: 25,
        marginTop: 25,
        color: 'white',
        fontWeight: '900',
      }
    
    
})