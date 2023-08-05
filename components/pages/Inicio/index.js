import React, {useState} from 'react';
import { Text, View, TextInput,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import Buscador from '../Buscador';

export default function Inicio(){
  const [cep, setCep] = useState();
  const { getCep, bairro, update, city, state, codPostal, consulta } = Buscador();
  function obterCep(cep){
    getCep(cep);
  }   

    return(
        <View style={styles.container} >
            <Text style={styles.titulo}>Buscador de CEP</Text>
            <View>
                <TextInput
                style={styles.Textinput}
                value={cep}
                onChangeText={text => setCep(text)}
                maxLength={8}
                placeholder="Digite seu CEP"
                keyboardType="numeric"
                 />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => obterCep(cep)}>
                <Text style={styles.txtButton}>Enviar Dados</Text>
            </TouchableOpacity>
            {update ?
            <View style={styles.containerDados}>
              <View style={styles.containerInput}>
                <TextInput
                value={codPostal}
                editable={false}
                style={styles.InputApi}
                />
              </View>
              <View style={styles.containerInput}>
                <TextInput
                value={bairro}
                editable={false}
                style={styles.InputApi}
                />
              </View>
              <View style={styles.containerInput}>
                <TextInput
                value={city}
                editable={false}
                style={styles.InputApi}
                />
              </View>
              <View style={styles.containerInput}>
                <TextInput
                value={state}
                editable={false}
                style={styles.InputApi}
                />
              </View>
            </View>
            :
            <View />
            }
            <ScrollView>
            <Text style={styles.titulo}>Pesquisas anteriores</Text>
            <FlatList
              style={styles.consultaDados}
              data={consulta.slice().reverse()}
              renderItem={({item}) => {
                return(
                  <View style={styles.containerConsulta}>
                    <View style={styles.containerRegistros}>
                      <Text style={styles.consultaRegistros}>{item.registrosCEP}</Text>
                    </View>
                    <View style={styles.containerRegistros}>
                      <Text style={styles.consultaRegistros}>{item.registrosBAIRRO}</Text>
                    </View>
                    <View style={styles.containerRegistros}>
                      <Text style={styles.consultaRegistros}>{item.registrosCITY}-{item.registrosSTATE}</Text>
                    </View>
                  </View>
                )
              }}
              keyExtractor={(item) => {
                item.id;
              }}
            />
            </ScrollView>
        </View>
    );
}