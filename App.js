import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,} from 'react-native';

const request = async(callback) =>{
  const response = await fetch('https://swapi.dev/api/people');
  const parsed = await response.json();
  callback(parsed.results);
}
export default function App() {
  const [registro, setResgistro] = useState([]);
  useEffect (()=>{
  request(setResgistro);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>StarWars ---- API</Text>
    <FlatList
    data={registro}
    numColumns={1}
    renderItem={({item}) =>
    <View style={styles.itens}>
    <Text>Nome:{item.name}</Text>
    <Text> Cor do olhos:{item.eye_color} </Text>
    </View>
    }
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'column',
    
  },
  itens: {
    flex: 1,
    backgroundColor: '#5656',
    marginBottom: 10 ,
    marginRight:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    textAlign: 'center',
  },
  titulo:{
    margin:40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#565656',
    alignSelf: 'center',
  }
});
