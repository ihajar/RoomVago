import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '88%',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgContainer: {
        width: '40%',
        
    },
    image: {
        width: '100%', 
        height: 100, 
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius: 20
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    detailsTxt: {
        fontSize: 18
    },
    ratingContainer: {
        position:'absolute', 
        backgroundColor: 'rgba(221, 255, 247, 0.5)', 
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
        textAlign: 'center'
    }
});