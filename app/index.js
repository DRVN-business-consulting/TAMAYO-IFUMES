import React from 'react';
import { Link, router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Switch, TextInput, TouchableOpacity, Image, Alert, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { userMyTheme } from '../src/context/MyTheme';

export default function Index() {
	const { theme, toggleTheme } = userMyTheme();

	const [showPlay, setShowPlay] = React.useState(false);
	const [selected, setSelected] = React.useState({});

	const [playing, setPlaying] = React.useState(false);

	const DATA = [
		{ id: 1, title: 'Let it Be', img: 'https://www.thebeatles.com/sites/default/files/2024-04/LetItBe_KA_4x5_032624.jpg' },
		{ id: 2, title: 'Yesterday', img: 'https://static.qobuz.com/images/covers/20/44/8028980704420_600.jpg' },
		{ id: 3, title: 'Here comes the Sun', img: 'https://withjustahintofmayhem.blog/wp-content/uploads/2021/12/poster504x498f8f8f8-pad600x600f8f8f8.jpg' },
		{ id: 4, title: "Don't let me down", img: 'https://m.media-amazon.com/images/M/MV5BZGI4ZmEzYTctYzRhNC00NDVlLWFjNDAtMTkxZDQ3MmJlMThkXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg' },
		{ id: 5, title: 'The long and winding road', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkP3s5xYWprgk69Hm_PIzEOP00Y3ocNWtKbw&s' },
		{ id: 6, title: 'Hey Jude', img: 'https://i.pinimg.com/originals/0a/0f/82/0a0f82092a148f521a2fcb09c5e01894.jpg' },
	];

	React.useEffect(() => {

	});

	function playMusic(item) {

		setPlaying(true);
		setSelected(item);
		setShowPlay(true);
	};

	function playStop() {

		if (playing) {
			setPlaying(false)
		} else {
			setPlaying(true)
		}
	};

	function backToList() {

		setShowPlay(false);
	};
	return (

		<View style={{ height: '100%' }}>
			{!showPlay && <View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
				<StatusBar style="auto" />
				< Text
					style={[{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic', marginTop: 50 }, styles.baseTextLight, (theme === "light" ? styles.baseTextLight : styles.baseTextDark)]}
				> IFumes

				</Text>
				<FlatList
					style={{ marginTop: 10, padding: 20, width: '100%', flex: 1 }}
					data={DATA}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => playMusic(item)}
						>
							<Image
								source={{
									uri: item.img,
								}}
								style={{ width: 80, height: 80 }}

							/>
							< Text
								style={[{
									borderBottomWidth: 1,
									borderBottomColor: 'silver',
									fontSize: 20

								}, styles.baseTextLight, (theme === "light" ? styles.baseTextLight : styles.baseTextDark)]}
							> {item.title}

							</Text>


						</TouchableOpacity>
					)}
				/>
			</View>}
			{
				showPlay && <View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
					<StatusBar style="auto" />
					<Image
						source={{
							uri: selected.img,
						}}
						style={{ width: 300, height: 300 }}

					/>
					<Text style={{ fontSize: 20 }}>
						{selected.title}

					</Text>
					<TouchableOpacity
						style={{ marginTop: 50 }}
						onPress={playStop}
					>
						{!playing && <Image
							source={
								require('../assets/play.png')
							}
							style={{ width: 60, height: 60 }}
						/>}
						{playing && <Image
							source={
								require('../assets/pause.png')
							}
							style={{ width: 60, height: 60 }}
						/>}
					</TouchableOpacity>

					<TouchableOpacity
						onPress={backToList}
						style={{
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderRadius: 10,
							backgroundColor: '#3d7c9d',
							width: '80%',
							marginTop: 50
						}}>
						<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Back To List</Text>
					</TouchableOpacity>
				</View>
			}

		</View >


	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	linkMargin: {
		marginTop: 10,
		marginBottom: 10
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
		color: 'white',
	},
	baseTextLight: {
		color: 'black',
		textAlign: 'right',
		justifyContent: 'center',
	},
	titleTextDark: {
		color: 'white',
		fontSize: 30,
	},
	titleTextLight: {
		color: 'black',
		fontSize: 30,
	}
});
