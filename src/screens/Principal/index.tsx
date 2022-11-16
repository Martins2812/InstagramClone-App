import React from "react";
import { View, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

import loja from '../../assets/loja.png'
import reels from '../../assets/reels.png'
import lucas from '../../assets/lucas.png'

import cyber from '../../assets/cyber.png'
import cyber2 from '../../assets/cyber2.png'
import cyber3 from '../../assets/cyber3.png'

import jojo from '../../assets/jojo.png'
import jojo2 from '../../assets/jojo2.png'
import jojo3 from '../../assets/jojo3.png'

import onePiece from '../../assets/onePiece.png'
import onePiece2 from '../../assets/onePiece2.png'
import onePiece3 from '../../assets/onePiece3.png'

import naruto from '../../assets/naruto.png'
import naruto2 from '../../assets/naruto2.png'
import naruto3 from '../../assets/naruto3.png'

import haikyuu from '../../assets/haikyuu.png'
import haikyuu2 from '../../assets/haikyuu2.png'
import haikyuu3 from '../../assets/haikyuu3.png'

import hunter from '../../assets/hunter.png'
import hunter2 from '../../assets/hunter2.png'
import hunter3 from '../../assets/hunter3.png'

import flu from '../../assets/flu.png'
import cano from '../../assets/cano.png'
import diniz from '../../assets/diniz.png'

import super11 from '../../assets/super11.png'
import super12 from '../../assets/super12.png'
import super13 from '../../assets/super13.png'

import man from '../../assets/man.png'
import man2 from '../../assets/man2.png'
import man3 from '../../assets/man3.png'

export const Principal = ({ navigation }) => {

    const voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        });
    };

    return (

        <View style={styles.container}>

            <View style={styles.containerConteudoImagens}>
                <ScrollView>
                    <View style={styles.containerPesquisar}>
                        <TextInput
                            placeholder="Pesquisar"
                            placeholderTextColor='#555'
                            style={styles.input}
                        />
                        <MaterialIcons
                            style={styles.iconePesquisar}
                            name="search"
                            color={"#555"}
                            size={25}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={hunter}
                        />
                        <Image
                            style={styles.jojo}
                            source={hunter2}
                        />
                        <Image
                            style={styles.jojo}
                            source={hunter3}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={haikyuu}
                        />
                        <Image
                            style={styles.jojo}
                            source={haikyuu2}
                        />
                        <Image
                            style={styles.jojo}
                            source={haikyuu3}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={cyber2}
                        />
                        <Image
                            style={styles.jojo}
                            source={cyber}
                        />
                        <Image
                            style={styles.jojo}
                            source={cyber3}
                        />
                    </View>

                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={onePiece3}
                        />
                        <Image
                            style={styles.jojo}
                            source={onePiece2}
                        />
                        <Image
                            style={styles.jojo}
                            source={onePiece}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={jojo}
                        />
                        <Image
                            style={styles.jojo}
                            source={jojo2}
                        />
                        <Image
                            style={styles.jojo}
                            source={jojo3}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={super12}
                        />
                        <Image
                            style={styles.jojo}
                            source={super11}
                        />
                        <Image
                            style={styles.jojo}
                            source={super13}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={naruto}
                        />
                        <Image
                            style={styles.jojo}
                            source={naruto2}
                        />
                        <Image
                            style={styles.jojo}
                            source={naruto3}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={man}
                        />
                        <Image
                            style={styles.jojo}
                            source={man2}
                        />
                        <Image
                            style={styles.jojo}
                            source={man3}
                        />
                    </View>
                    <View style={styles.fileira}>
                        <Image
                            style={styles.jojo}
                            source={cano}
                        />
                        <Image
                            style={styles.jojo}
                            source={flu}
                        />
                        <Image
                            style={styles.jojo}
                            source={diniz}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.containerIcones}>
                <View style={styles.icones}>
                    <TouchableOpacity
                        onPress={() => voltar()}
                    >
                        <MaterialIcons
                            style={styles.iconeHome}
                            name="home"
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MaterialIcons
                            style={styles.iconeSearch}
                            name="search"
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.loja}
                            source={loja}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.reels}
                            source={reels}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.lucas}
                            source={lucas}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}