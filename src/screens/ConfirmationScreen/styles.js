import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bookingContainer: {
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-around',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imgContainer: {
        flex: 1/2,
    },
    infosContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-around',
        
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    guestsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'left',
        
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        paddingVertical: 5,
    },
    editContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    divider: {
        backgroundColor: '#D8ECFD',
        width: '100%',
        height: 1,
      
    },
    datesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    checkBox: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    contactContainer: {
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-around',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    userBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-evenly',
        
    }, 
    confirmContainer: {
        backgroundColor: 'white', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    confirmBtn: {
        backgroundColor: "#095086",
        width: '50%',
        padding: 10,
        marginHorizontal: 12,
        // marginBottom: 20,
        borderRadius:20
    },
    priceContainer: {
        flexDirection: 'column',
        alignItems: 'left',
        width: '48%',
        justifyContent: 'flex-start'
    }
});