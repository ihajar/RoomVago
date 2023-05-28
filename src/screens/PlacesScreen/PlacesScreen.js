import { Pressable, ScrollView, Text, View } from 'react-native'
import React, {useLayoutEffect, useState}from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';

import styles from './styles'

import data from '../../../assets/data/data.json';

import PorpertyCard from '../../components/PorpertyCard/PorpertyCard';

import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';

const PlacesScreen = () => {
    const route = useRoute();
    // console.log(route.params)
    const navigation  = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFiler, setSelectedFilter] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: 'Popular Stay Ins',
          headerTitleStyle: {
           fontSize: 24,
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
    
    const filters = [
      {
        id: '0',
        filter: 'cost: Low to High',
      },
      {
        id: '1',
        filter: 'cost: Hight to Low'
      }
    ];

    const searchPlaces = data?.filter((itemFilter) => itemFilter.place === route.params.place);
    const [sortedData, setSortedData] = useState(data);
    // console.log(searchPlaces);

    const compare = (a,b) => {
      if(a.nowPrice > b.nowPrice) {
        return -1;
      }
      if(a.nowPrice < b.nowPrice) {
        return 1
      }
      return 0;
    } 

    const comparision = (a,b) => {
      if(a.nowPrice < b.nowPrice) {
        return -1;
      }
      if(a.nowPrice > b.nowPrice) {
        return 1
      }
      return 0;
    }

    const applyFilter = (filter) => {
      setModalVisible(false)
      switch(filter) {
        case "cost: Hight to Low":
          searchPlaces.map((val) => val.properties.sort(compare));
          setSortedData(searchPlaces);
          break;
        case "cost: Low to High":
          searchPlaces.map((val) => val.properties.sort(comparision));
          setSortedData(searchPlaces);
          break;
      }
    }

  return (
    <View>
      <Pressable style={styles.hdIconContainer}>
        <Pressable 
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.icnContainer} 
        >
            <Octicons name="arrow-switch" size={24} color="#095086" />
            <Text style={styles.icnTxt}>Sort</Text>
        </Pressable>
        <Pressable style={styles.icnContainer}>
        <Ionicons name="filter-outline" size={24} color="#095086" />
            <Text style={styles.icnTxt}>Filter</Text>
        </Pressable>
        <Pressable 
          onPress={() => navigation.navigate('Map', {
            searchResults:searchPlaces,
          })}
          style={styles.icnContainer}
        >
        <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="#095086" />
            <Text style={styles.icnTxt}>Map</Text>
        </Pressable>
      </Pressable>
      
      <ScrollView style={styles.prptyContainer}>
        {sortedData?.filter((item) => item.place === route.params.place).map((item) => 
            item.properties.map((property, index) => 
            <PorpertyCard
                key={index}
                rooms={route.params.rooms}
                adults={route.params.adults}
                children={route.params.children}
                startDate={route.params.startDate}
                endDate={route.params.endDate}
                property={property}
                availableRooms={property.rooms}
            />
            ))
        }
      </ScrollView>

      {/* Bottom Modal */}
      <BottomModal 
        swipeThreshold={200} 
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <Pressable 
              onPress={() => applyFilter(selectedFiler)}
              style={styles.footerContainer}
            >
              <Text style={styles.footerBtn}>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle title='Sort and Filter' 
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
        <ModalContent style={{width: '100%', height: 320}}>
          <View style={styles.modalConatiner}>
            <View style={styles.modalRight}>
              <Text style={styles.modalTitle}>Sort</Text>
            </View>

            <View style={styles.modalLeft}>
              {filters.map((itemFilter, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(itemFilter.filter)}
                  style={styles.filterContainer} 
                  key={index}
                >
                  {selectedFiler.includes(itemFilter.filter) ? (
                    <MaterialIcons name="radio-button-checked" size={18} color="#EF066F" />
                  ) : ( 
                    <MaterialIcons name="radio-button-unchecked" size={18} color="#095086" />
                  )}
                 
                  <Text style={styles.filterTxt}>{itemFilter.filter}</Text>
                </Pressable>
              ))}
            </View>

          </View>
        </ModalContent>
      </BottomModal>
    </View>
  )
}

export default PlacesScreen

