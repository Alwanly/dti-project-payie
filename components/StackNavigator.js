import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login'
import Register from './Registration';
import Home from './Home';
import {HomeScreen} from './HomeScreen';
import {TopUP,TopUPBerhasil} from "./TopUpScreen";
import {QRpayment,KonfirmasiBayar,PaymentInfo} from './QRScreen';
import {Transfer,TransferBerhasil} from './TransferScreen';


const Stack = createStackNavigator();

const AppStack = () => {
  return (    
      <Stack.Navigator >

        <Stack.Screen                  
          name="Login"
          component={Login}          
          options={{headerShown: false}}/>

        <Stack.Screen 
          name="Registrasi" 
          component={Register}/>

        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown:false}}/> 
          
        <Stack.Screen 
          name="TopUP" 
          component={TopUP}
        />  
        <Stack.Screen
        name="TopUPBerhasil"
        component={TopUPBerhasil} 
        options={{headerShown:false}}/>

        <Stack.Screen
        name="QR Payment"
        component={QRpayment}/>
        
        <Stack.Screen
        name="Konfirmasi Bayar"
        component={KonfirmasiBayar}
        />
        <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Transfer"
        component={Transfer}/>
        <Stack.Screen
        name="TransferBerhasil"
        component={TransferBerhasil}
        options={{headerShown:false}}        
        />
      </Stack.Navigator>    
  );
};
export {AppStack}