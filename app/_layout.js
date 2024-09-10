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
            </Stack>

        </MyThemeProvider>

    )
}