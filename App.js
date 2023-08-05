import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import Inicio from './components/pages/Inicio';
import Buscador from './components/pages/Buscador';

export default function App() {
  return (
    <View style={styles.containerBG}>
      <Pressable onPress={()=> Keyboard.dismiss()}>
        <Inicio />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBG: {
    flex: 1,
    backgroundColor: '#f000',
    marginVertical: 50,
  },
});
