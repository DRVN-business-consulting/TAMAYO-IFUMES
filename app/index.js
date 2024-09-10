import React from 'react';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Switch, TextInput, Image, Alert } from 'react-native';
import axios from 'axios';
import { userMyTheme } from '../src/context/MyTheme';

export default function Index() {
	const { theme, toggleTheme } = userMyTheme();

	const [idValue, setValue] = React.useState('');
	const [pwValue, setpwValue] = React.useState('');
	const [switchValue, setSwitchValue] = React.useState('');
	const trainerId = '107438';
	const password = 'pokemaster';

	const validateLogin = () => {

		if (
			idValue !== trainerId ||
			pwValue !== password
		) {
			Alert.alert('Login Failed', 'Invalid Trainer ID or Password.');
			return;
		}
		router.push('/(tabs)');


	};


	React.useEffect(() => {
		// axios
		// 	.get('https://dummyjson.com/posts')
		// 	.then(response => console.log('data.length', response.data['posts'].length));

		// axios.post('https://dummyjson.com/posts/add', JSON.stringify({
		// 	title: 'I am in love with someone.',
		// 	userId: 5,
		// }), {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	}
		// })
		// 	.then(response => console.log('data', response.data));
	});

	return (

		<View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
			<StatusBar style="auto" />

			<Image
				source={require('../assets/Pokédex_logo.png')}
				style={{ width: '100%', height: 130, marginTop: 50, }}
			/>
			<TextInput
				value={idValue}
				placeholder='Trainer ID'
				onChangeText={newValue => setValue(newValue)}
				style={{
					paddingHorizontal: 24,
					paddingVertical: 12,
					marginTop: 50,
					borderColor: 'black',
					borderWidth: 1,
					borderRadius: 16,
					width: '80%',

				}}
			/>

			<TextInput
				value={pwValue}
				placeholder='Password'
				secureTextEntry
				onChangeText={newValue => setpwValue(newValue)}
				style={{
					paddingHorizontal: 24,
					paddingVertical: 12,
					marginTop: 10,
					marginBottom: 50,
					borderColor: 'black',
					borderWidth: 1,
					borderRadius: 16,
					width: '80%',

				}}
			/>
			<Button
				color="#3d7c9d"
				title='Login'
				onPress={validateLogin}>
				marginTop='50%'
			</Button>

			{/* <Text
				style={[styles.baseTextLight, (theme === "light" ? styles.baseTextLight : styles.baseTextDark)]}
			>Dark Theme
			</Text>

			<Switch
				value={theme === "dark"}
				onValueChange={toggleTheme}
				thumbColor='grey'
				trackColor={{
					true: 'yellow',
					false: 'silver'
				}}
			/> */}

			{/* <Link style={styles.linkMargin} href={'/settings'}>Settings</Link>
			<Link style={styles.linkMargin} href={'/settings'}>Profile</Link>
			<Link style={styles.linkMargin} href={'/settings'}>Update Profile</Link>
			<Link style={styles.linkMargin} href={'/settings'}>Tabs</Link> */}

			{/* <Button
				title='Go to settings'
				color="#152a35"
				onPress={() => router.push('/settings')}>
			</Button>
			<Button
				color="#264d61"
				title='Go to Profile'
				onPress={() => router.push('/profile')}>
			</Button>
			<Button
				color="#3d7c9d"
				title='Go to update Profile'
				onPress={() => router.push('/profile/update-profile')}>
			</Button>
			<Button
				color="#56addb"
				title='Go to Tabs'
				onPress={() => router.push('/(tabs)')}>
			</Button> */}
		</View>
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
