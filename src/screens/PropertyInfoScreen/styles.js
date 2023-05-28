import { StyleSheet } from "react-native";

export default StyleSheet.create({
    propertyContainer: {
        // flexDirection: 'column',
        // width: '100%',
      
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    topContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
 
   
    photosConatiner: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        margin: 10,
        width: '100%',
    },
    // stayContainer: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     width: '100%',
    //     margin: 20,
    // },
    // appContainer: {
    //     flex: 1,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: 10,
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     alignItems: 'center',
    //     justifyContent: 'space-evenly',
    // },
    // container: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    // },
    // detailsTxt: {
    //     fontSize: 15, 
    //     fontWeight: '500',
    //     color: '#095086',
    // },
    // guestsContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center'
    // },
    

    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    nrContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
   
    name: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
        paddingLeft: 10,
        paddingVertical: 5,
        flex: 1,
    },
    rContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '20%',
        alignItems: 'center',
        paddingRight: 10,
    },
    rating: {
        fontSize: 15,
        fontWeight: '700',
    },
    adressContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%'
    },
    address: {
        fontSize: 15,
        color: '#474747',
        paddingVertical: 5
    },
    // offerContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     margin:  10
    // },
    offerDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    OfferTxt: {
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    offerIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    roomsTxt: {
        fontSize: 12,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '600',
        paddingVertical: 5,
        paddingHorizontal: 5,
        color: '#095086'
    },
    offContainer: {
        marginHorizontal: 12,
        marginTop: 7,
        backgroundColor: "#EF066F",
        paddingHorizontal: 4,
        paddingVertical: 5,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      offTxt: { 
        textAlign: "center", 
        color: "white", 
        fontWeight: '500',
        fontSize: 16,
    }
});