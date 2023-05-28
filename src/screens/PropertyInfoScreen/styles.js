import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        fontSize: 22,
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
    offerDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: 10
    },
    OfferTxt: {
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 5,
    },
    offerIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexWrap: 'wrap',
        alignContent: 'center',
        width: '100%'
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignContent: 'center',
        width: 'auto'
    },
    iconsTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: '#095086',
        paddingHorizontal: 5,
        paddingVertical: 5,
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
    },
    stayContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        margin: 10
    },
    appContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        backgroundColor: 'white', 
        borderRadius: 20,
        justifyContent: 'space-between', 
        width: '100%', 
        marginVertical: 10
    },
    container: {
        flexDirection: 'column', 
        justifyContent:'space-evenly', 
        marginHorizontal: 10,
        padding: 10
    },
    divider: {
        backgroundColor: '#D8ECFD',
        width: '90%',
        height: 1,
        marginHorizontal: 20, 
    },
    btnContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        width: "90%",
        backgroundColor: '#095086',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center'
    }
});