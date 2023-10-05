import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import Header from './src/components/Header';
import Categorias from './src/components/Categorias';
import Home from './src/screms/Home';
import { textFont } from './src/themes/textFont';
import Buscador from './src/components/Buscador';
import Productos from './src/screms/Productos';
// import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import ProductDetail from './src/screms/ProductDetail';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AuthNav from './src/navigation/AuthNav';
import MainNav from './src/navigation/MainNav';

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   Roboto: require("./assets/Fonts/Roboto-Medium.ttf"),
  //   Josefin: require("./assets/Fonts/JosefinSans-VariableFont_wght.ttf"),
  // })

  // if (!fontsLoaded) {
  //   return;
  //   console.log("cargando letra")
  // }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.marronSuave
  },

})


