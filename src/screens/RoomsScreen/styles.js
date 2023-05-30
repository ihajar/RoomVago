import { StyleSheet } from "react-native";

export default StyleSheet.create({
    roomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding:10,
    },
    roomImg: {
        width: '50%',
        height: 150,
        borderRadius: 20,
    },
    roomDetailsContainer: {
        width: '50%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    bookContainer: {
        width: 200,
        height: 80,
        backgroundColor: '#66B7F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10
    }
});