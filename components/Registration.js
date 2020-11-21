import * as React from 'react';
import {View,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';


const Register = ()=>{
 const navigation = useNavigation();
    return(
        <View style = {styles.container}>
        <TextInput
        style = {styles.input}
        placeholder="Email"/>
        <TextInput
        style = {styles.input}
        placeholder = "Password"/>
        <TextInput
        style = {styles.input}
        placeholder = "Nama"/>
        <TextInput
        style = {styles.input}
        placeholder = "No HandPhone"/>     
        <Button
            style = {styles.button}
            title = "SUBMIT"
            onPress = {() =>
                navigation.navigate('Login')
            }            
        />   
    </View>
    );
};
export default Register;