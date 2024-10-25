import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Context from './Context/Context1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {
  function BottomTabs(){
    return(
      <Tab.Navigator>
        <Tab.Screen name='HomePage' component={Home} />
        <Tab.Screen name='CartPage' component={Cart} />
      </Tab.Navigator>
    )
  }
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='bottomNav' component={BottomTabs} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

const styles = StyleSheet.create({
  
});
