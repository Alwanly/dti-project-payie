import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import Home from './HomeActivity';
import Transaksi from './TransaksiActivity';
import Profile from './ProfileActivity';
const MenuBottom = createBottomTabNavigator();
  
const MenuHome = ()=>{  
    return (
        <MenuBottom.Navigator>
            <MenuBottom.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({size,color})=>(<MaterialIcon name="home-outline" size={size} color={color}/>)
            }}
            />
            <MenuBottom.Screen 
            name="Transaksi"
            component={Transaksi}
            options={{
                tabBarLabel:'Transaksi',
                tabBarIcon: ({size,color})=>(
                    <MaterialIcon name="swap-vertical" size={size} color={color}/>),
                    tabBarBadge:5
            }}/>
            <MenuBottom.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:'Profile',
                    tabBarIcon: ({size,color})=>(
                        <MaterialIcon name="person-outline" size={size} color={color}/>)
                }}
                />
        </MenuBottom.Navigator> 
    )
}

export default MenuHome;