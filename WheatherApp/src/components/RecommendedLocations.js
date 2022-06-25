import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import CardContainer from './CardContainer';

export default function RecommendedLocations(props) {
    const {data} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <CardContainer 
              city={item.city} 
              country={item.country}
              temp={item.temp}
              img={item.image}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
    
})