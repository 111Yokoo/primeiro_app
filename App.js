import { StyleSheet, View} from 'react-native';
import InfoProfile from './src/components/InfoProfile';
import PessoaProfile from "./src/assets/pessoa.webp";

export default function App() {
  return (
    <View style={styles.container}>
      <InfoProfile 
      image={PessoaProfile}
      publi={2}
      followers={200}
      following={200}
      descricao={"Matheus Yokoo"}
      />
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
