import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SettingScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Settings Screen</Text>
			{/* <Link href={'/'}>Go to settings</Link> */}

			<Button
				title="Back to home"
				onPress={() => router.back()}></Button>

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
});
