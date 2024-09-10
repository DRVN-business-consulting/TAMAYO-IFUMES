import { useLocalSearchParams } from "expo-router";
import { View, Alert, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import React from 'react';
import axios from 'axios';
import { userMyTheme } from '../../src/context/MyTheme';

export default function viewDetails() {
    const { theme, toggleTheme } = userMyTheme();

    // const api = 'http://10.95.98.78:8000/';
    const api = 'https://pokemon-api-nssw.onrender.com/';
    const { id } = useLocalSearchParams();
    React.useEffect(() => {
        fetchPokemonData(id);
    });
    async function fetchPokemonData(id) {
        await axios
            .get(`${api}pokemon/${id}`)
            .then(response => transpose(response.data[0])
            );
    };

    async function addToFavorites(id) {

        await axios
            .get(`${api}pokemon/${id}`)
            .then(response => console.log(response.data[0])
            );
        Alert.alert('Success', 'Added to Favorites' + id);
    };

    const [chosenPokemon, setChosenPokemon] = React.useState({});

    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [hp, setHP] = React.useState('');
    const [attack, setAttack] = React.useState('');
    const [defense, setDefense] = React.useState('');
    const [spAttack, setSpAttack] = React.useState('');
    const [spDefense, setSpDefense] = React.useState('');
    const [speed, setSpeed] = React.useState('');
    const [species, setSpecies] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [photo, setPhoto] = React.useState('photo');


    const transpose = (item) => {
        setName(item.name.english);
        setType(item.type);
        setHP(item.base.HP);
        setAttack(item.base.Attack);
        setDefense(item.base.Defense);
        setSpAttack(item.base['Sp. Attack']);
        setSpDefense(item.base['Sp. Defense']);
        setSpeed(item.base.Speed);
        setSpecies(item.species);
        setDescription(item.description);
        setPhoto(item.image.hires);
    };

    return (
        <ScrollView>
            <View style={[styles.container,
            type.includes("Electric") && styles.elecType,
            type.includes("Psychic") && styles.psyType,
            type.includes("Dark") && styles.darkType,
            type.includes("Fighting") && styles.fightType,
            type.includes("Bug") && styles.poisonType,
            type.includes("Ground") && styles.rockType,
            type.includes("Flying") && styles.flyType,
            type.includes("Poison") && styles.poisonType,
            type.includes("Rock") && styles.rockType,
            type.includes("Fire") && styles.fireType,
            type.includes("Water") && styles.waterType,
            type.includes("Grass") && styles.grassType,
            ]}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                    <Image
                        source={{
                            uri: photo,
                        }}
                        style={{
                            width: 300,
                            height: 300,
                            marginTop: 30,
                        }}

                    />

                </View>
                <Button
                    color="#3d7c9d"
                    title='Add to Favorites'
                    onPress={() => addToFavorites(id)}
                    marginTop='50%'
                >
                </Button>
                <View style={{ alignItems: 'left', marginLeft: 20, marginBottom: 20, justifyContent: 'center', }}>

                    <Text style={styles.baseTextLight}>
                        ID: {id}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Name: {name}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Type: {type}
                    </Text>

                    <Text style={[styles.baseTextLight, styles.topOfGroup]}>
                        Species: {species}
                    </Text>
                    <Text style={[styles.baseTextLight, styles.topOfGroup]}>
                        Description: {description}
                    </Text>
                    <Text style={[styles.baseTextLight, styles.topOfGroup]}>
                        HP: {hp}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Attack: {attack}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Defense: {defense}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Sp. Attack: {spAttack}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Sp. Defense: {spDefense}
                    </Text>
                    <Text style={styles.baseTextLight}>
                        Speed: {speed}
                    </Text>

                </View>
            </View>


        </ScrollView >

    );
}

const styles = StyleSheet.create({
    detailsText: {
        fontSize: 20,
        textAlign: 'left'
    },
    topOfGroup: {
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    light: {
        flex: 1,
        backgroundColor: '#7dccf7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dark: {
        flex: 1,
        backgroundColor: '#08496c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseTextDark: {
        fontSize: 20,
        textAlign: 'left',
        color: 'white',
    },
    baseTextLight: {
        fontSize: 20,
        textAlign: 'left',
        color: 'black',
    },
    grassType: {
        backgroundColor: 'green',
    },
    fireType: {
        backgroundColor: 'orange',
    },
    waterType: {
        backgroundColor: '#346beb',
    },
    poisonType: {
        backgroundColor: '#ae21ff',
    },
    rockType: {
        backgroundColor: 'silver',
    },
    flyType: {
        backgroundColor: '#9dc7e3',
    },
    fightType: {
        backgroundColor: '#e06063',
    },
    psyType: {
        backgroundColor: '#cbf748',
    },
    darkType: {
        backgroundColor: '#4a4f80',
    },
    elecType: {
        backgroundColor: 'yellow',
    },

});