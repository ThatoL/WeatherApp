import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text,  ImageBackground} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <View style={styles.cardContainer}>
      <Text style={styles.headerText}>Added Location</Text>
        <ImageBackground source={require('./src/images/spring.jpg')}>
          <View style={styles.weatherCard}>
            <View style={styles.location}>
              <Text style={styles.city}>JohannesBurg</Text>
              <Text style={styles.country}>Republic of South Africa</Text>
            </View>
            <View style={styles.tempContainer}>
              <Text style={styles.tempText}>5 °C</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
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
  cardContainer : {
    margin: 20,
  },
  headerText : {
    fontSize: 15,
    color: 'grey',
    fontWeight: '500',
    marginBottom: 10,
  },
  weatherCard : {
    flexDirection: 'row',
    marginTop: 10,
    height: 90,
    //backgroundColor: 'pink',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 7,
    shadowOpacity: 0.7,
    borderRadius: 20,
  },
  location: {
    marginTop: 20,
    padding: 10,
  },
  city: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'

  }, 
  country: {
    fontSize: 15,
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
    color: 'white'
  }

 
});
