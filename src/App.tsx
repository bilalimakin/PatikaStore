import React from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, TextInput, ScrollView, } from "react-native";
import PatikaStore from "./components/PatikaStore";
import PatikaStore_data from "./PatikaStore_data.json";

//Uygulama içeriği
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.patikastore_title}>PATİKASTORE</Text>
      <TextInput inlineImageLeft='search_icon' style={styles.search_input} placeholder="Ara..." />
      <View style={styles.flastlist}>
        <FlatList
        data={PatikaStore_data}// data verimizin uzantısı,

        //listelemek için basmasını istiyoruz
        renderItem={({item}) => <PatikaStore product={item}/>} 
        numColumns={2}

        />
      </View>
    </SafeAreaView>
  )
}


//Style içeriği
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  patikastore_title: {
    fontFamily: "Nunito",
    fontSize: 35,
    color: "#800080",
    fontWeight: "bold",
    marginLeft:10,
    marginRight:10,
  },
  search_input: {
    backgroundColor: "#eceff1",
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    margin:10,
  },
  flastlist:{
    backgroundColor:"white",
    alignItems:"center"
  }
  

})

export default App;