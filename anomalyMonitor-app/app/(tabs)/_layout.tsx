import { Tabs } from 'expo-router';
import { Image } from 'react-native';

// @assets/icons/index.ts
export const TabIcons = {
  home: require('../../assets/icons/home.png'),
  anomalies: require('../../assets/icons/list.png'),
  newAnomaly: require('../../assets/icons/add.png'),
  search: require('../../assets/icons/search.png'),
};

export default function TabsLayout () {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#050A25',
                borderTopColor: '#1a1f3a',
            },
            tabBarActiveTintColor: '#ABDFFF',
            tabBarInactiveTintColor: '#555',
        }}>
            <Tabs.Screen

                name="index"
                options={{ 
                    title: 'Home',     
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={TabIcons.home}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="myAnomalies"
                options={{ 
                    title: 'Anomalies',     
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={TabIcons.anomalies}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="newAnomaly"
                options={{ 
                    title: 'New',     
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={TabIcons.newAnomaly}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Search"
                options={{ 
                    title: 'Search',     
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={TabIcons.search}
                            style={{ width: size, height: size, tintColor: color }}
                        />
                    )
                }}
            />
        </Tabs>
    )
}

