import { Text, TextInput, View, ScrollView, Pressable, Modal, Alert, Button, Image } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { EvilIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';

import Header from '../../components/Header/Header'

import DatePicker from 'react-native-neat-date-picker';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';


const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);


  const [showDatePickerRange, setShowDatePickerRange] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  
  const openDatePickerRange = () => setShowDatePickerRange(true)

  const onCancelRange = () => {
    setShowDatePickerRange(false)
  }

  const onConfirmRange = (output) => {
    setShowDatePickerRange(false)
    setStartDate(output.startDateString)
    setEndDate(output.endDateString)
    
   
  } 
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Roomvago',
      headerTitleStyle: {
       fontSize: 25,
       fontWeight: 'bold',
       color: '#010B13'
      },
      headerStyle: {
        height: 90,
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    })
  }, []);

  const imgLogo = require('../../../assets/Roomvago.png')
 
  const searchPlaces = (place) => {
    
    if(!route.params || !(startDate , endDate) ) {
      Alert.alert(
        "Invalid Details",
        "Please enter all your application details!",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: "OK", onPress: () => console.log("OK Pressed")}
        ],
        { cancelable: false}
      );
    }
    if(route.params && (startDate , endDate)) {
      navigation.navigate('Places', {
        rooms: rooms,
        adults: adults,
        children: children,
        startDate: startDate,
        endDate: endDate,
        place: place
      })
    }
  }


  return (
    <>
      <View style={{backgroundColor: '#F5F5F5'}}>
        <Header />
        <DatePicker modalStyles={{paddingTop: 0, margin: 0, width: '100%', height: '88%'}} withoutModal={false}
                  isVisible={showDatePickerRange}
                  mode={'range'}
                  onCancel={onCancelRange}
                  onConfirm={onConfirmRange}
                  colorOptions={{backgroundColor: 'white', headerColor: '#095086', dateTextColor: 'black', 
                  confirmButtonColor: '#EF066F', selectedDateBackgroundColor: '#EF066F', fontWeight: '600'}}
                  
                
        />
        <ScrollView style={{height: '100%'}}>
          
        
          <View style={styles.mainContainer}>
            {/* destination */}
            <Pressable 
              style={styles.fieldContainer}
              onPress={() => navigation.navigate('Search')}
            >
              <EvilIcons name="location" size={24} color="grey" />
              <TextInput placeholder='Where do you want to stay?' placeholderTextColor={'grey'} editable={false} />
            </Pressable>
            
            {/* Dates */}
            <Pressable style={styles.fieldContainer} onPress={openDatePickerRange}>
              <EvilIcons name="calendar" size={24} color="grey" />
              {/* <Button style={{color: 'grey', fontSize: 14}} title='date' color={'grey'}  /> */}
              <TextInput placeholder='How long?' placeholderTextColor={'grey'} editable={false} />

            </Pressable>

            {/* Nbr of guests  + Rooms */}
            <Pressable style={styles.fieldContainer} onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name="person-outline" size={22} color="grey" />
              {/* <TextInput placeholder={` ${rooms} room + ${adults} adults + ${children} children`} placeholderTextColor={'grey'}
                editable={false}
              /> */}
              <TextInput placeholder='How many rooms, adults and children?'  placeholderTextColor={'grey'} />
            </Pressable>
            <View style={styles.currentContainer}>
              <Text style={styles.currentTitle}>Current Inputs</Text>  
              <View style={styles.searchOutputs}>
                <View style={styles.outputBubble}>
                  <Text style={styles.txtOupt}>{route?.params ? route.params.input: 'destination?'}</Text>
                  {/* <TextInput placeholder={route?.params ? route.params.input: 'destination?'}/> */}
                </View>
                <View style={styles.outputBubble}>
                  <Text style={styles.txtOupt}>{(startDate && `${startDate} ~ ${endDate}`) || 'How long?'}   </Text>
                </View>   
                
              </View>
              <View  style={styles.searchOutputs}>
                <View style={styles.outputBubble}>
                  <Text style={styles.txtOupt}>{rooms} rooms</Text>
                </View>
                <View style={styles.outputBubble}>
                  <Text style={styles.txtOupt}>{adults} Adults</Text>
                </View>
                <View style={styles.outputBubble}>
                  <Text style={styles.txtOupt}>{children} children</Text>
                </View>
              </View>
            
            </View>

            {/* Search Btn */}
            <Pressable 
              onPress={() => searchPlaces(route?.params.input)}
              style={styles.searchContainer}
            >
              <Text style={{fontSize: 18, textAlign: 'center', color:'white', fontWeight: '700'}}>
                create application
              </Text>
            </Pressable>

          </View>

          <Pressable style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={imgLogo}
            />
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal 
        
        swipeThreshold={200} 
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={<ModalFooter>
            <ModalButton text='Apply' textStyle={{color: 'white', fontSize: 22, fontWeight: '700'}}
              style={{marginBottom: 20, color: 'white', backgroundColor: '#095086', padding: 5,
                      marginHorizontal: 50, borderRadius: 20}}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title='Select rooms & guests' 
                        textStyle={{fontSize: 20, color: 'black', fontWeight: '700'}} 
                    />
        }
        modalAnimation={
          new SlideAnimation({
          slideFrom: 'bottom'
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{width: '100%', height: 320, backgroundColor: '#F5F5F5'}}>
          {/* Rooms */}
          <View style={styles.selectionContainer}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Rooms</Text>
            <Pressable style={styles.modalPressable}>
              <Pressable style={styles.symbolContainer}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <Text style={styles.symboleTxt}>-</Text>
              </Pressable>

              <Pressable>
                <Text 
                  style={{
                    textAlign: 'center', 
                    fontSize: 20,
                    fontWeight: '600',
                    paddingHorizontal: 6}}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable style={styles.symbolContainer}
                onPress={() => setRooms((c) => c + 1 )}
              >
                <Text style={styles.symboleTxt}>+</Text>
              </Pressable>

            </Pressable>
          </View>
          {/* Adults */}
          <View style={styles.selectionContainer}>
            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Adults</Text>
              <Text style={{color: 'grey', fontSize: 14, paddingVertical: 3}}>after 12</Text>
            </View>
            
            <Pressable style={styles.modalPressable}>
              <Pressable style={styles.symbolContainer}
                onPress={() => setAdults(Math.max(1, adults - 1))}
              >
                <Text style={styles.symboleTxt}>-</Text>
              </Pressable>

              <Pressable>
                <Text 
                  style={{
                    textAlign: 'center', 
                    fontSize: 20,
                    fontWeight: '600',
                    paddingHorizontal: 6}}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable style={styles.symbolContainer}
                onPress={() => setAdults((c) => c +1)}
              >
                <Text style={styles.symboleTxt}>+</Text>
              </Pressable>

            </Pressable>
          </View>
          {/* Children */}
          <View style={styles.selectionContainer}>
            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Children</Text>
              <Text style={{color: 'grey', fontSize: 14, paddingVertical: 3}}>0-12 years</Text>
            </View>
            
            <Pressable style={styles.modalPressable}>
              <Pressable style={styles.symbolContainer}
                onPress={() => setChildren(Math.max(0, children - 1))}
              >
                <Text style={styles.symboleTxt}>-</Text>
              </Pressable>

              <Pressable>
                <Text 
                  style={{
                    textAlign: 'center', 
                    fontSize: 20,
                    fontWeight: '600',
                    paddingHorizontal: 6}}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable style={styles.symbolContainer}
                onPress={() => setChildren((c) => c +1)}
              >
                <Text style={styles.symboleTxt}>+</Text>
              </Pressable>

            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}



export default HomeScreen

