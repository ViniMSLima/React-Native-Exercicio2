import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Calculator from './Calculator';
import Historico from './Historico';
import { UtilsContext } from './Context'


export default function App() {
  const [ utils, setUtils ] = useState({});
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>

          <Stack.Screen name = "Calculator" options={{ headerShown: false }} component = { Calculator }/>
          <Stack.Screen name = "Historico" component = { Historico }/>

        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  )   
}