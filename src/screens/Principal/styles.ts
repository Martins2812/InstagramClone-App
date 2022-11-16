import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 45
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 15 : 5,
        marginTop: 5,
        borderRadius: 9,
        width: '100%',
        paddingHorizontal: 66
    },
    iconePesquisar: {
        marginLeft: -340,
        marginTop: 6
    },
    containerPesquisar: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom: 8
    },
    containerIcones: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        width: '100%',
    },
    iconeHome: {
        paddingRight: 42
    },
    iconeSearch: {
        paddingRight: 35
    },
    loja: {
        width: 50,
        height: 50,
        marginRight: 30
    },
    reels: {
        width: 48,
        height: 48,
        marginRight: 35
    },
    lucas: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    containerConteudoImagens: {
        width: 400,
        marginRight: -50,
        marginTop: 13,
        backgroundColor: 'black',
        marginBottom: 58,

    },
    jojo: {
        width: 130,
        height: 135,
        marginTop: 2.5,
        marginRight: 2.5
    },
    icones: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    fileira: {
        flexDirection: 'row',
        marginRight: 5
    }
})