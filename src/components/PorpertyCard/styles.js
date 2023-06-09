import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    propertyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        flexWrap: 'nowrap',
        width: '100%',
        borderRadius: 20
    },
    ratingContainer: {
        position:'absolute', 
        backgroundColor: 'rgba(9, 80, 134, 0.5)', 
        display: 'flex', 
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 3,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9
    },
    ratingNb: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white'
    },
    propertyContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        
    },
    propertyName: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    propertyAddress: {
        fontSize: 14,
        color: '#474747',
        // paddingRight: 5,
        width: '85%'
    },
    btmContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    propertyOldPrice: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 5, 
        textDecorationStyle: 'solid', 
        textDecorationLine: 'line-through',
        color: 'red'
    },
});