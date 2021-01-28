
import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';
import CoinDetailsScreen from './CoinDetailsScreen';

const Stack = createStackNavigator();



const CoinsStack = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen   
            name="CoinsScreen"  
            component={CoinsScreen}
            />

            <Stack.Screen 
            name="CoinDetailsScreen"  
            component={CoinDetailsScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;