import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        padding: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    searchField: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10,
        
    },
    searchBtn: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#DDFFF7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});