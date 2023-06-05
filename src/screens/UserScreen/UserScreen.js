import { Alert, Pressable, Text, TouchableHighlight, Image,  View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import UserPermission from '../../../utilities/UserPermission'
import * as ImagePicker from 'expo-image-picker'


const UserScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
   

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: 'Personal Info',
          headerTitleStyle: {
           fontSize: 22, 
           fontWeight: 'bold',
           color: '#010B13'
          },
          headerStyle: {
            height: 120,
            backgroundColor: 'white',
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
          },
        });
      }, []);

    const [firstName, setFirstName] = useState("");
    
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    
    // console.log(firstName)
    const finalStep = () => {
        if(!firstName || !lastName || !email || !phoneNo) {
            Alert.alert(
                "Invalid Details!",
                "Please insert all your infos",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: 'cancel',
                    },
                    {
                        text: "OK", onPress: () => console.log("OK Pressed"),
                    }
                ],
                { cancelable: false }
            );
        }
        if(firstName && lastName && email && phoneNo && profilePic) {
            navigation.navigate("Confirmation", {
                oldPrice: route.params.oldPrice,
                nowPrice: route.params.nowPrice,
                name: route.params.name,
                children: route.params.children,
                adults: route.params.adults,
                rating: route.params.rating,
                startDate: route.params.startDate,
                endDate: route.params.endDate,
                selected:route.params.selected,
                room: route.params.room,
                address:route.params.address,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNo: phoneNo,
            });
        }  
    };
   

 
    
    handlePickerAvatar = async () => {
        UserPermission.getCameraPermission()

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)

        if (!result.canceled) {
            setProfilePic(result.uri);
        }
    }

  return (
    <>
        <ScrollView style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.avatarPlaceholder}>
                    {profilePic && <Image source={{uri: profilePic}} style={styles.avatar} />}  
                </TouchableOpacity>
                <Pressable 
                    onPress={() => handlePickerAvatar()}
                    style={styles.imgPickerBox}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#095086'}}>Edit profile picture</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <TextInput
                    label="First Name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                    style={styles.inputContainer}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    label="Last Name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                    style={styles.inputContainer}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    label="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.inputContainer}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    label="Phone Number"
                    value={phoneNo}
                    onChangeText={(number) => setPhoneNo(number)}
                    style={styles.inputContainer}
                    keyboardType='numeric'
                />
            </View>
        </ScrollView>

        <Pressable style={styles.confirmContainer}>
            <View >
                <View style={styles.confirmBox}>
                    <Text style={{fontSize: 18, fontWeight: '400'}}> Total Price:</Text>
                    <Text style={{color: '#EF066F', fontSize: 18, textDecorationLine: 'line-through'}}>
                       $ {route.params.oldPrice * route.params.adults}
                    </Text>
                    <Text style={{fontSize: 20, fontWeight: '600'}}>$ {route.params.nowPrice * route.params.adults}</Text>
                </View>
                
            </View>
            <Text style={{paddingRight: 10, fontSize: 18, color: '#095086', fontWeight: '600'}}>
                You saved $ {route.params.oldPrice - route.params.nowPrice}
            </Text>
        </Pressable>

        <Pressable
                onPress={finalStep}
                style={{backgroundColor: '#EF066F', padding: 20}}
            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '600'}}>
                    Confirm Your Booking
                </Text>
        </Pressable>
    </>
  )
}

export default UserScreen

