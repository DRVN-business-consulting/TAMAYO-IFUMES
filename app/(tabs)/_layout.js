
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "All Pokemon",
                    headerStyle: {
                        backgroundColor: "#2e99d3"
                    },
                    headerTintColor: 'white'
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favorites",
                    headerStyle: {
                        backgroundColor: "#2e99d3"
                    },
                    headerTintColor: 'white',
                }}
            />
            <Tabs.Screen
                name="app_settings"
                options={{
                    title: "App Settings",
                    headerStyle: {
                        backgroundColor: "#2e99d3"
                    },
                    headerTintColor: 'white',
                }}
            />
        </Tabs>
    );
}