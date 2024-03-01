import { StyleSheet, View} from 'react-native';
import InfoProfile from './src/components/InfoProfile';
import MyPosts from './src/components/MyPosts';
import PessoaProfile from "./src/assets/pessoa.webp";
import Post from "./src/assets/Post.jpg";

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
      <MyPosts image={Post}/>
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
