import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Awesome Wheather!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: 'grey'
  }
    
})