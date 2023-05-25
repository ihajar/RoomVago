import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    propertyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'yellow',
        width: '100%',
        borderRadius: 20
        // flex: 2,
    },

    propertyContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
    },
    
});