import * as React from 'react';
import {View,Image,TextInput,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from './Styles';
import Components from './components';


const TopUP = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style = {styles.containerImage}>
            <Image
            source={require('../assets/OIUGYX01.png')}/>
            </View>
            <View style={styles.containerContent}>
               <TextInput
            secureTextEntry={true}
            style = {styles.textInputPrimary}
            placeholder = "Nominal Top UP"
            />
            <Components.ButtonPrimary title="SUBMIT" screenName="TopUPBerhasil"/>
            </View>

        </View>
    );     
};
const TopUPBerhasil = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style = {styles.containerImage}>
            <Image
            source={require('../assets/OIUGYX01.png')}/>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textTopUpHeader}>Top Up Berhasil</Text>
                <Text style={styles.textTopUpHeader}>Rp.60,000</Text>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Top Up Berhasil</Text>
                    <Text style={styles.cardText}>Rp.60,000</Text>                    
                </View>
                <Components.ButtonPrimary title="SELESAI" screenName="Home"/>
            </View>

        </View>
    );     
};

export {TopUP,TopUPBerhasil};