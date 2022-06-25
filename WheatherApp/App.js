import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , FlatList, Text} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CardContainer from './src/components/CardContainer';
import RecommendedLocations from './src/components/RecommendedLocations';




export default function App() {
  const Data = [
    {
      city: "Johannesburg",
      country: "South Africa",
      temp: 5,
      image: require('./src/images/Hot.jpg'),
    },
    {
      city: "Capetown",
      country: "South Africa",
      temp: 11,
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
      image: require('./src/images/breezy.jpg'),
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
        img={require('./src/images/autumn.jpg')}
      />
      <Text style={styles.headerText}>Recommended Locations</Text>
      <RecommendedLocations data={Data}/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText : {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,

  },
});
