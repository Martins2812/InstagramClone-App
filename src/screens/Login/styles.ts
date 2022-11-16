import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 70,
        paddingHorizontal: 20
    },
    containerIdioma: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 110
    },
    iconIdioma: {
        marginTop: 2,
    },
    containerConteudo: {
        marginTop: 100
    },
    titulo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 12,
        borderRadius: 6,
        width: '100%'
    },
    containerSenha: {
        flexDirection: 'row',
        alignItems: "center",
    },
    iconSenha: {
        marginLeft: -40,
        marginTop: 9
    },
    button: {
        backgroundColor: '#0084E9',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 18
    },
    buttonEntrar: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    ajuda: {
        fontSize: 12.3,
        padding: 15,
        paddingBottom: 20,
        textAlign: 'center'
    },
    buttonFace: {
        backgroundColor: '#0084E9',
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 68,
        marginTop: 20
    },
    TextFace: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    image: {
        width: 30,
        height: 30,
    },
    cadastrar: {
        textAlign: 'center',
        fontSize: 12.5,
        paddingTop: 125
    },
    textoBold: {
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 110,
        marginHorizontal: 80,
        marginBottom: -14
    },
    divisor: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divisorLinha: {
        width: '100%',
        height: 2,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textoOU: {
        marginHorizontal: '47%',
        color: '#fff'
    }
})