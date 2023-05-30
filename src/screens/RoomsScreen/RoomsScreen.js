// import { Image, Text, View, ScrollView, Pressable } from 'react-native'
// import React, {useLayoutEffect} from 'react'
// import { useNavigation, useRoute } from '@react-navigation/native'
// import styles from './styles'

// import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


// const RoomsScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   console.log(route.params.rooms)

//   useLayoutEffect(() => {
//       navigation.setOptions({
//         headerShown: true,
//         title: 'Available Rooms',
//         headerTitleStyle: {
//          fontSize: 22, 
//          fontWeight: 'bold',
//          color: '#010B13'
//         },
//         headerStyle: {
//           height: 120,
//           backgroundColor: 'white',
//           borderBottomColor: 'transparent',
//           shadowColor: 'transparent',
//         },
//       })
//     }, []);
//   return (
//     <>
//     <ScrollView>
      
//       {route.params.rooms.map((item, index) => {
//         <Pressable 
//           style={styles.roomContainer}
//           key={index}
//         >
//           <View style={styles.roomImg}>
//             <Image
//               style={{width: '100%', height: 100, borderRadius: 20}}
//               source={{uri:item.image}}
//             />
//           </View>
//           <View style={styles.roomDetailsContainer}>
//             <Text style={{fontSize: 18, fontWeight: '600', color: '#095086'}}>{item.name}</Text>
//             <View style={styles.detailsContainer}>
//               {item.refundable === "refundable" ? (
                
//               <MaterialCommunityIcons name="cash-refund" size={24} color="green" />
//               )
//             : ( <MaterialCommunityIcons name="cash-refund" size={24} color="red" />)
//               }
//               <Text style={{fontSize: 15, fontWeight: '500'}}>{item.refundable}</Text>

//             </View>
//             <View style={styles.detailsContainer}>
//               <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
//                 <MaterialCommunityIcons name="bed-queen-outline" size={24} color="#095086" />
//                 <Text style={{fontSize: 15, fontWeight: '500'}}>{item.bed}</Text>
//               </View>
//               <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
//               <MaterialIcons name="payment" size={24} color="#095086" />
//                 <Text style={{fontSize: 15, fontWeight: '500'}}>{item.payment}</Text>
//               </View>
//             </View>
//             <Pressable
//               style={styles.bookContainer}
//             >
//               <Text style={{fontSize: 20, fontWeight: '800', color: 'white'}}>Book Now</Text>
//             </Pressable>
//           </View>
//         </Pressable>
//       })}
//     </ScrollView>
//     </>
//   )
// }

// export default RoomsScreen


import { Image, Text, View, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const RoomsScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Available Rooms',
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
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView style={{backgroundColor: '#ECF6FE'}}>
        {route.params.rooms.map((item, index) => (
          <Pressable
            style={{ margin: 10, backgroundColor: "white", padding: 5, borderRadius: 20 }}
            key={index}
          >
           <View style={styles.roomContainer}>
            <Image
              style={styles.roomImg}
              source={{uri:item.image}}
            />
            <View style={styles.roomDetailsContainer}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#095086'}}>{item.name}</Text>
              <View style={styles.detailsContainer}>
                {item.refundable === "refundable" ? (   
                <MaterialCommunityIcons name="cash-refund" size={20} color="green" />
                )
              : ( <MaterialCommunityIcons name="cash-refund" size={20} color="#EF066F" />)
                }
                {item.refundable === "refundable" ? (
                  <Text style={{fontSize: 16, fontWeight: '500', color: 'green', paddingLeft: 5}}>{item.refundable}</Text>
                )
                : (
                  <Text style={{fontSize: 16, fontWeight: '500', color: '#EF066F', paddingLeft: 5,}}>{item.refundable}</Text>
                )
                }
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <MaterialCommunityIcons name="bed-queen-outline" size={24} color="#095086" />
                 <Text style={{fontSize: 15, fontWeight: '500', paddingLeft: 5}}>{item.bed}</Text>
               </View> 
               <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
               <MaterialIcons name="payment" size={24} color="#095086" />
                 <Text style={{fontSize: 15, fontWeight: '500', paddingLeft: 5}}>{item.payment}</Text>
              </View>
              <View style={styles.detailsContainer}>
               
             </View>
           </View>
            
           </View>
           

            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#095086",
                  backgroundColor: "#095086",
                  borderWidth: 2,
                  width: '50%',
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="#FDC3DD"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#095086",
                  borderWidth: 2,
                  borderRadius: 20,
                  padding: 10,
                  width: '50%',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#095086",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            backgroundColor: "#EF066F",
            padding: 8,
            marginBottom: 30,
            borderRadius: 20,
            marginHorizontal: 20,
            marginVertical: 20,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 20 }}
          >
            Book Now
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;

