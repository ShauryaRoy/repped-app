import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { name as appName } from './app.json';
import SwiperComponent from './src/SwiperComponent';
import ExploreScreen from './src/ExploreScreen';
import CartScreen from './src/CartScreen'; // Ensure this path is correct
import AccountScreen from './src/AccountScreen';
import { CartProvider } from './src/CartContext'; // Import CartProvider

const Tab = createBottomTabNavigator();

function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={SwiperComponent} />
                    <Tab.Screen name="Explore" component={ExploreScreen} />
                    <Tab.Screen name="Cart" component={CartScreen} />
                    <Tab.Screen name="Account" component={AccountScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}

AppRegistry.registerComponent(appName, () => App);
