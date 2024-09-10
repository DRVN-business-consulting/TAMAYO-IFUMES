import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { userMyTheme } from '../../src/context/MyTheme';

export default function FavoriteScreen() {
    const { theme, toggleTheme } = userMyTheme();
    return (
        <View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
            <StatusBar style="auto" />
            <Text>Favorite Screen</Text>
            <Button
                title="Back to home"
                onPress={() => router.back()}>
            </Button>
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
    baseTextDark: {
        marginTop: 50,
        fontSize: 20,
        color: 'white',
    },
    baseTextLight: {
        marginTop: 50,
        fontSize: 20,
        color: 'black',
    },
});
