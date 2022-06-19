import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Awesome Wheather App!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
    
})