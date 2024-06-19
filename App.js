import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import Home from './components/Home.js'
import About from './components/About.js'
import Search from './components/Search.js'
import Result from './components/Result.js'
import style from './style.js'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeScreen(){
  return(
    <View style={style.container} >
      <Home />
    </View>
  )
}

function AboutScreen({route}){
  const {message} = route.params
  return(
    <View style={style.container} >
      <About message={message} />
    </View>
  )
}

function ThirdScreen({navigation, route}){
  return(
    <Stack.Navigator initialRouteName='Search'>
      <Stack.Screen name='Search'
      component={SearchScreen}
      />
      <Stack.Screen name='Result'
      component={ResultScreen}
      />
    </Stack.Navigator>
  )
}

function SearchScreen({route, navigation}){
  return(
    <View style={style.container}>
      <Search navigation={navigation} route={route} />
    </View>
  )
}

function ResultScreen({route, navigation}){
  return(
    <View style={style.container}>
      <Result navigation={navigation} route={route} />
    </View>
  )
}


// Dans le name mettre toujours une icone de base au cas ou on rajoute une route et on oublie de lui mettre un icone
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions= {({route}) => ({
        tabBarIcon : ({focused, color, size}) => {

          let name = 'asterisk'

          if(route.name === 'Home')
            name='home'
          else if(route.name === 'About')
            name = 'question'
          else if(route.name === 'Search')
            name = 'search'

          return <FontAwesome name={name} size={24} color={color} />
        },
        tabBarActiveTintColor : '#ba0d7b',
        tabBarInactiveColor : '#333333',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} initialParams={{message : 'Allons-y'}} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}