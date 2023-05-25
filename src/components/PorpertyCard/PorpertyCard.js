import {Dimensions, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


const PorpertyCard = ({property, rooms, adults, children, startDate, endDate, availableRooms}) => {
    const {width, height} = Dimensions.get("window")

  return (
    
    <View style={styles.mainContainer}>
       
      <Pressable style={styles.propertyContainer}>
        <View>
            <Image style={{height:height/5, width: width-250, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} 
                source={{uri:property.image}} 
            />
        </View>
        <View>
            <View style={styles.propertyContent}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <AntDesign name="hearto" size={24} color="black" />
            </View>
        </View>

      </Pressable>
    </View>
  )
}

export default PorpertyCard

