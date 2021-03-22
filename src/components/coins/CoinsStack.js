
import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';
import CoinDetailsScreen from './CoinDetailsScreen';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
const Stack = createStackNavigator();



const CoinsStack = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen   
            name="CoinsScreen"  
            component={CoinsScreen}
            />

            <Stack.Screen 
            name="CategoryScreen"  
            component={CategoryScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;