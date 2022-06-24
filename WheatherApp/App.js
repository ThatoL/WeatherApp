import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , FlatList, Text} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CardContainer from './src/components/CardContainer';




export default function App() {
  const Data = [
    {
      city: "Johannesburg",
      country: "South Africa",
      temp: 5,
      image: require('./src/images/yo.jpg'),
    },
    {
      city: "Capetown",
      country: "South Africa",
      temp: 21,
      image: require('./src/images/winter.jpg'),
    },
    {
      city: "London",
      country: "United Kingdom",
      temp: -5,
      image: require('./src/images/spring.jpg'),
    },
    {
      city: "Miami",
      country: "United States",
      temp: 20,
      image: require('./src/images/summer.jpg'),
    },

  ]
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Text style={[styles.headerText]}>Added Location</Text>
      <CardContainer
        city={"Durban"}
        country={'South Africa'}
        temp={20}
      />
      <Text style={styles.headerText}>Recommended Locations</Text>
      <FlatList
        data={Data}
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
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText : {
    fontSize: 15,
    color: 'grey',
    fontWeight: '500',
    marginBottom: 10,
    marginLeft: 20
  },

  
 
});
