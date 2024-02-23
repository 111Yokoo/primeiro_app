import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Pessoa from "../../assets/pessoa.webp";
import Pessoa2 from "../../assets/pessoa2.webp";

export default function Stories() {
  return (
    <View>
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 8}} horizontal styles={styles.stories}>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa}/>
      <Image style={{ width: 100, height: 100, borderRadius: 50}} source={Pessoa2}/>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  stories: {
    flexDirection: "row", gap: 16,
  },
});