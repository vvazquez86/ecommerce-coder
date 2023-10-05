import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categorias from '../components/Categorias'
import { colors } from '../themes/colors'
import CategoriasItem from '../components/CategoriasItem'
import { useSelector } from 'react-redux'
import { useGetCategoriasQuery } from '../servicios/ecApi'
import { ActivityIndicator } from 'react-native'
const Home = ({ navigation }) => {

  //const categorias = useSelector(state => state.homeSlice.allCategories)

  const {data: categorias, isLoading} = useGetCategoriasQuery();

  return (
    <SafeAreaView style={styles.container}>

      {isLoading ? (
      <ActivityIndicator style={styles.spinner} size="large" color= {colors.marronFuerte} />
      ):(
      <View>
        <Header title="Categorias" navigation={navigation} />
      <View style={styles.containerLista}>
        <FlatList
          data={categorias}
          keyExtractor={(key) => key}
          renderItem={({ item }) => <CategoriasItem navigation={navigation} item={item} />}
        />
      </View>
      </View>
      )}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grisTono,
    flex: 1,
  },

  texto: {
    color: colors.marronSuave,
  },
  containerLista: {
    backgroundColor: colors.grisTono,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoLista: {
    fontSize: 20,
    marginVertical: 2,
    fontWeight: "300",
    color: colors.marronFuerte,
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home