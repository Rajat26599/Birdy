import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export default function Signup({ navigation }){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const onHandleSignup = () => {
        if(email != "" && password != ""){
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => console.log("Signup Successful"))
                .catch((err) => Alert.alert("Signup error", err.message));
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Signup</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
     
                <TextInput 
                    style={styles.input}
                    placeholder="Enter password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <Text style={{fontWeight:'bold', color:'#fff', fontSize:10}}>Signup</Text>
                </TouchableOpacity>
                <View style={{marginTop:20, flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
                    <Text style={{color:'gray', fontWeight:'600', fontSize:14}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{color:'#f57c00', fontWeight:'600', fontSize:14}}> Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24
    },
    input: {
        backgroundColor: "f6f7fb",
        height: 50,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#f57c00',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
}) 