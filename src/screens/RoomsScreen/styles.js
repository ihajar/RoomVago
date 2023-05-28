import { StyleSheet } from "react-native";

export default StyleSheet.create({
    roomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '88%',
        margin:10,
    },
    roomImg: {
        flex: 1,
    },
    roomDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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