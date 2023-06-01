import { Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { savedPlaces } from '../../../SavedReducer'


const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Confirmation Booking',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      headerStyle: {
        backgroundColor: 'white',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  }, []);

  const dispatch = useDispatch();
  
  return (
    <View>
      <Text>ConfirmationScreen</Text>
    </View>
  )
}

export default ConfirmationScreen

