import {Dimensions, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign, Entypo } from '@expo/vector-icons';


const PorpertyCard = ({property, rooms, adults, children, startDate, endDate, availableRooms}) => {
    const {width, height} = Dimensions.get("window")

  return (
    
    <View style={styles.mainContainer}>
       
      <Pressable style={styles.propertyContainer}>
        <View>
            <Image style={{height:height/5, width: width-280, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} 
                source={{uri:property.image}} 
            />
            <View style={styles.ratingContainer}>
              <Entypo name="star" size={24} color="#F5E663"  />
              <Text style={styles.ratingNb}>{property.rating}</Text>
            </View>
        </View>
        <View style={{flex: 1}} >
            <View style={styles.propertyContent}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 0}}>
                  <Entypo name="location-pin" size={22} color="#FCCE16" />
                  <Text style={styles.propertyAddress}>{property.address}</Text>
                </View>
            </View>
            <View style={styles.btmContainer}>
              <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <Text style={styles.propertyOldPrice}>{property.oldPrice}</Text>
                <Text style={{paddingHorizontal: 5, fontSize: 18, fontWeight: '500'}}>{property.nowPrice}</Text>
             </View>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
            
        </View>

      </Pressable>
    </View>
  )
}

export default PorpertyCard

