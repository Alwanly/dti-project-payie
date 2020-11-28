import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../activities/auth/LoginActivity';
import Register from '../activities/auth/RegistrationActivity';
import BottomNav from '../activities/home/BottomNav'; 
import TopUp from '../activities/topUp/TopUpActivity';
import TopUpBerhasil from '../activities/topUp/TopUpBerhasilActivity';
import QRPayment from '../activities/payment/QRPayConfrimasiActivity';
import QRPayConfirmasi from '../activities/payment/KonfirmasiBayar';
import PaySuccess from '../activities/payment/PaySuccessActitvity';
import Transfer from '../activities/transfer/TransferActivity';
import TransferBerhasil from '../activities/transfer/TransferSuccessActivity';
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
          component={Register}
          options={{
            title:"Registrasi",
            headerStyle:{
              backgroundColor: "#005690"
            },
            headerTintColor: 'white'
          }}          
          />
        <Stack.Screen 
          name="Home" 
          component={BottomNav}
          options={{headerShown:false}}/> 
                
        <Stack.Screen 
          name="TopUP" 
          component={TopUp}
          options={{
            title:"Top Up",
            headerStyle:{
              backgroundColor: "#005690"
            },
            headerTintColor: 'white'
          }}
        />        
        <Stack.Screen
        name="TopUpBerhasil"
        component={TopUpBerhasil} 
        options={{headerShown:false}}/>

        <Stack.Screen
        name="QRPayment"
        component={QRPayment}
        options={{
          title:"QR Payment",
          headerStyle:{
            backgroundColor: "#005690"
          },
          headerTintColor: 'white'
        }}
        />
         
        <Stack.Screen
        name="QRPayConfirmasi"
        component={QRPayConfirmasi}
        options={{
          title:"Konfrimasi Bayar",
          headerStyle:{
            backgroundColor: "#005690"
          },
          headerTintColor: 'white'
        }}
        />
        
        <Stack.Screen
        name="PaySuccess"
        component={PaySuccess}
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