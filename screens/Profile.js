import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView, TouchableHighlight, Alert } from "react-native";
import colors from "../colors";
import { auth } from "../config/firebase";
import { updateProfile } from "firebase/auth";

const Profile = ({ navigation }) => {
    const [ displayName, setDisplayName ] = useState('');

    useEffect(() => {
        setDisplayName(auth?.currentUser?.displayName);
    }, [])

    const handleUpdateProfile = () => {
        if(!displayName) {
            Alert.alert('Failed', "displayName can not be empty!", [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            return;
        }
        updateProfile(auth?.currentUser, {
            displayName: displayName
        }).then(() => {
            navigation.navigate('Home');
            console.log("Updated");
        }).catch(err => {
            console.log(err);
            Alert.alert('Failed', "Couldn't update displayName", [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        });
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.form}>
                <Image style={styles.profilePic} source={{uri: 'https://i.pravatar.cc/300'}} />
                <TextInput 
                    style={styles.input}
                    placeholder="Enter Name"
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='name'
                    value={displayName}
                    onChangeText={(text) => setDisplayName(text)}
                />
                <TouchableHighlight style={styles.button} onPress={handleUpdateProfile}>
                    <Text style={{fontWeight:'bold', color:'#fff', fontSize:10}}>Save</Text>
                </TouchableHighlight>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    form: {
        flex: 1,
        marginHorizontal: 30
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    input: {
        backgroundColor: colors.mediumGray,
        height: 50,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    button: {
        width: '100%',
        backgroundColor: '#f57c00',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
})

export default Profile;