import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
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