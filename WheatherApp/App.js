import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text,  ImageBackground} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CardContainer from './src/components/CardContainer';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <CardContainer />
      
      
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
  
 
});
