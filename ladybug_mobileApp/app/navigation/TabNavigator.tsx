import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native';
import { TabIcon } from './TabIcon';
import Search from '../screens/Search';
import HotTours from '../screens/HotTours';
import Contacts from '../screens/Contacts';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName='search'
            screenOptions={{
                tabBarStyle: { paddingHorizontal: 20, overflow: 'hidden' },
                tabBarIconStyle: { flex: 1 },
                headerShown: false,
                animation: 'shift'
            }}
        >
            <Tab.Screen
                name="index2"
                component={HotTours}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons name='hotel' size={25} color={focused ? '#29f' : '#000a'} />,
                    tabBarLabel: 'Предложения',
                }}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons name='search' size={25} color={focused ? '#29f' : '#000a'} />,
                    tabBarLabel: 'Поиск',
                }}
            />
            <Tab.Screen
                name="index5"
                component={Contacts}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons name='schedule' size={25} color={focused ? '#29f' : '#000a'} />,
                    tabBarLabel: 'График',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
