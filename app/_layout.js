import { Stack } from "expo-router";
import { MyThemeProvider } from "../src/context/MyTheme";


export default function AppLayout() {
    return (
        <MyThemeProvider>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        title: "Home",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='settings'
                    options={{
                        title: "App Settings",
                        headerStyle: {
                            backgroundColor: "green"
                        },
                        headerTintColor: 'white'
                    }}
                />
                <Stack.Screen
                    name='details'
                    options={{
                        title: "Details",
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: "#449a9a"
                        },
                        headerTintColor: 'black'
                    }}
                />
                <Stack.Screen
                    name='(tabs)'
                    options={{
                        title: "My Tabs",
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: "#449a9a"
                        },
                        headerTintColor: 'black'
                    }}
                />
            </Stack>

        </MyThemeProvider>

    )
}