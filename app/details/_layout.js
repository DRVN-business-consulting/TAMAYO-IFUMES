import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='[id]'
                options={{
                    title: "Pokemon Details",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#2e99d3"
                    },
                    headerTintColor: 'white'
                }}
            />
        </Stack>
    )
}