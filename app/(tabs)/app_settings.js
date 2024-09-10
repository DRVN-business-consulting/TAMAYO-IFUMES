import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Switch } from 'react-native';
import { userMyTheme } from '../../src/context/MyTheme';
import { useNavigation } from '@react-navigation/native';

export default function AppSettingScreen() {

    const navigation = useNavigation();
    const { theme, toggleTheme } = userMyTheme();
    return (
        <View style={[styles.container, (theme === "light" ? styles.light : styles.dark)]}>
            <StatusBar style="auto" />
            <Button
                title="Logout"
                onPress={() => navigation.popToTop()}>
            </Button>
            <Text
                style={[styles.baseTextLight, (theme === "light" ? styles.baseTextLight : styles.baseTextDark)]}
            >Current Theme: {theme}
            </Text>

            <Switch
                value={theme === "dark"}
                onValueChange={toggleTheme}
                thumbColor='grey'
                trackColor={{
                    true: 'yellow',
                    false: 'silver'
                }}
            />
        </View >
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
