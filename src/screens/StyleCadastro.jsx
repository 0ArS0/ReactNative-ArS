import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flex: 0.12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    criar: {
        color: '#fff',
        fontSize: 20,
    },
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    containerLogo: {
        flex: 0.3,
        justifyContent: 'flex-end',
        marginBottom: 7,
        alignItems: 'center',
        width: '100%'
    },
    imgLogo: {
        width: '44%',
        height: 32,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 15,
    },
    checkbox: {
        flexDirection: 'row',
        marginTop: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        marginBottom: 20,
    },
    textoCheckbox: {
        marginLeft: 8,
        fontSize: 12,
        color: '#fff'
    },
    containerTextoCadastro: {
        width: '100%',
        paddingHorizontal: 5,
        paddingBottom: 3,
    },
    textoCadastro: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 12,
    },
    textoEspecial: {
        color: '#f67828'
    },
    input: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 6,
        paddingHorizontal: 15,
        marginBottom: 12,
        backgroundColor: '#141519',
        color: '#fff',
        borderBottomColor: '#5a5b5d',
        borderBottomWidth: 3,
        fontSize: 16
    },
    btnCriarConta: {
        backgroundColor: '#000',
        borderWidth: 2,
        borderColor: '#5a5a5a',
        width: '100%',
        height: 35,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoCriarConta: {
        fontSize: 16,
        fontWeight: 'light',
        color: '#5a5a5a'
    },
    extra: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    btnExtra: {
        marginTop: 10,
    },
    texto: {
        color: '#fff'
    },

}) 