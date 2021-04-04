import {createStackNavigator} from 'react-native-gesture-handler/sta'
import {createAppContainer} from '@react-navigation/native'
import About from '../screens/about'
import Home from '../screens/home'

const screens ={
    Home:{
        screen:Home
    },
    About:{
        screen:About
    }
}
const HomeStack =createStackNavigator(screens)

export default createAppContainer(HomeStack)