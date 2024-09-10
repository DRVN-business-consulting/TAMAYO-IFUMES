import { Link, router } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, SectionList, Alert, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { userMyTheme } from '../../src/context/MyTheme';
import axios from 'axios';

export default function AllPokemonScreen() {

	// const api = 'http://10.95.98.78:8000/';
	const api = 'https://pokemon-api-nssw.onrender.com/';

	React.useEffect(() => {
		fetchAllPokemons();
	});

	async function fetchAllPokemons() {

		await axios
			.get(`${api}pokemon`)
			.then(response => setPokemonList(response.data)
			);
	};

	async function fetchPokemonData(id) {
		// await axios
		// 	.get(`${api}pokemon/${id}`)
		// 	.then(response => customAlert(response.data[0])
		// 	);
		router.push('/details/' + id);


	};

	const [pokemonList, setPokemonList] = React.useState('');
	const [chosenPokemon, setChosenPokemon] = React.useState('');


	const { theme, toggleTheme } = userMyTheme();

	const customAlert = (item) => {
		Alert.alert(item.id + ' - ' + item.name.english,
			'Type: ' + item.type + "\n" +
			'Species: ' + item.species + "\n\n" +
			'Description: ' + item.description + "\n\n" +
			'Evolution: ' + item.evolution.prev + "\n\n" +
			'HP: ' + item.base.HP + "\n" +
			'Attack: ' + item.base.Attack + "\n" +
			'Defense: ' + item.base.Defense + "\n" +
			'Sp. Attack: ' + item.base['Sp. Attack'] + "\n" +
			'Sp. Defense: ' + item.base['Sp. Defense'] + "\n" +
			'Speed: ' + item.base.Speed + "\n"
		);
	};

	state = {
		isLoading: false,
	}

	return (
		<View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
			<StatusBar style="auto" />
			<View>
				{state.isLoading && (
					<ActivityIndicator size="large" color="white" />
				)}
			</View>

			<FlatList
				style={{ marginTop: '5%', width: '100%' }}
				data={pokemonList}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => fetchPokemonData(item.id)}
					>
						<Image
							source={{
								uri: item.image.hires,
							}}
							style={{ width: 100, height: 100, marginTop: 30, marginLeft: 50 }}

						/>
						< Text
							style={[styles.baseTextLight, (theme === "light" ? styles.baseTextLight : styles.baseTextDark)]}
						> {item.name.english}

						</Text>


					</TouchableOpacity>
				)}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
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
	baseTextLight: {
		fontWeight: 'bold',
		fontSize: 30,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		width: '100%',
		textAlign: 'right',
	},
	baseTextDark: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		width: '100%',
		textAlign: 'right',
	}
});

