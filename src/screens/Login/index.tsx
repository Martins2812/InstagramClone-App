import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import facebook from '../../assets/facebook.png'
import logo from '../../assets/logo.png'

export const Login = ({ navigation }) => {

    const [input, setInput] = useState('');

    const [ocultarSenha, setOcultarSenha] = useState(true);

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerIdioma}>

                <Text style={styles.titulo}>
                    português (Brasil)
                </Text>

                <MaterialIcons style={styles.iconIdioma}
                    name="keyboard-arrow-down"
                    color={"white"}
                    size={25}
                />

            </View>
            <View style={styles.containerConteudo}>
                <Image style={styles.logo} source={logo} />

                <TextInput
                    placeholder="Número de telefone, email ou nome de usuário"
                    placeholderTextColor='#555'
                    style={styles.input}
                />
                <View style={styles.containerSenha}>

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor='#555'
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={ocultarSenha}
                    />

                    <TouchableOpacity
                        onPress={() => setOcultarSenha(!ocultarSenha)}
                    >
                        {ocultarSenha ?
                            <MaterialIcons
                                style={styles.iconSenha}
                                name="visibility-off"
                                color={"#555"}
                                size={25}
                            />
                            :
                            <MaterialIcons
                                style={styles.iconSenha}
                                name="visibility"
                                color={"#555"}
                                size={25}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}
                    onPress={() => entrar()}
                >
                    <Text
                        style={styles.buttonEntrar}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <Text style={styles.ajuda}>
                    Esqueceu seus dados de login? <Text style={styles.textoBold}>Obtenha ajuda para entrar.</Text>
                </Text>

                <View style={styles.divisor}></View>
                <View style={styles.divisorLinha}></View>
                <Text style={styles.textoOU}>OU</Text>
                <View style={styles.divisorLinha}></View>

                <TouchableOpacity
                    style={styles.buttonFace}
                    activeOpacity={0.75}
                >
                    <Image style={styles.image} source={facebook} />

                    <Text style={styles.TextFace}>
                        Continuar como Lucas Martins
                    </Text>
                </TouchableOpacity>

                <Text style={styles.cadastrar}>
                    Não tem uma conta? <Text style={styles.textoBold}>Cadastre-se.</Text>
                </Text>

            </View>
        </View>



    )








}