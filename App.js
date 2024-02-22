import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Pessoa from "./src/assets/pessoa.webp";
import Pessoa2 from "./src/assets/pessoa2.webp";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 8}} horizontal style={{flexDirection: "row", gap: 16}}>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
          <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 16,
  },
});
