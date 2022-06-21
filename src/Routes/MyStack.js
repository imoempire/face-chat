import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Settings from '../Screens/Settings';

const Stack = createStackNavigator();

const MyStack =()=>{
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )};

  export default MyStack;
