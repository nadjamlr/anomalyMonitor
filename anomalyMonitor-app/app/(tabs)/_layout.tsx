// Author: Nadja Müller


import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Colors } from '../../constants/colors';


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
                backgroundColor: Colors.primary03,
                borderTopColor: Colors.primary02,
            },
            tabBarActiveTintColor: Colors.primary01,
            tabBarInactiveTintColor: Colors.muted,
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
                name="Add"
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
                name="Anomalies"
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

