import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    Textinput: {
        width: '100%',
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        marginVertical: 20,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        padding: 20,
        width: '50%',
        backgroundColor: '#000',
        borderRadius: 20,

    },
    txtButton: {
        color: '#fff'
    },
    containerDados: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 25,
    },
    containerInput: {
        paddingHorizontal: 8,
        color: '#fff',
        backgroundColor: '#000',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 10,
    },
    InputApi: {
        color: '#fff'
    },
    consultaDados: {
        flex: 1,
    },
    containerConsulta: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    containerRegistros: {

    }

})

export default styles;