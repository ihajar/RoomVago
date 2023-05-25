import { StyleSheet, Text, View, Pressable, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


const Header = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };

  const renderIcon = (iconName, color, label) => {
    const isActive = iconName === activeIcon;
    const iconStyles = isActive ? styles.activeIcon : styles.inactiveIcon;
    const iconColor = isActive ? 'white' : color;
    const textColor = isActive ? 'white' : '#095086';

    return (
      <Pressable
        onPress={() => handleIconPress(iconName)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#FOFOFO' : 'transparent'},
          styles.pressableIcon,
          iconStyles,
        ]}
      >
        <Ionicons name={iconName} size={32} color={iconColor} />
        <Text style={[styles.iconTxt, { color: textColor }]}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{backgroundColor: 'white', height: 85, flexDirection: 'row', paddingBottom: 20, paddingTop: 10,
             alignItems: 'center', borderBottomEndRadius: 30, borderBottomStartRadius: 30}}
    >
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          {renderIcon('bed-outline', '#095086', 'Room')}
        </View>
        
        <View style={styles.iconContainer}>
          {renderIcon('airplane-outline', '#095086', 'Flight')}
        </View>
        
        <View style={styles.iconContainer}>
          {renderIcon('fast-food-outline', '#095086', 'Food')}
        </View>
        
        <View style={styles.iconContainer}>
          {renderIcon('car-sport-outline', '#095086', 'Car Rental')}
        </View>

      </View>    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    iconContainer: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center'
    },
    iconTxt: {
        // color: '#1D3557',
        fontSize: 14,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
    activeIcon: {
      backgroundColor: '#EF066F',
      borderRadius: 16,
      padding: 8
    },
    inactiveIcon: {
      backgroundColor: 'transparent',
      padding: 8,
    },
    pressableIcon: {
      borderRadius: 16,
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
})