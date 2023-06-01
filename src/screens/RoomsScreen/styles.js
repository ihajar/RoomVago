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
    selectedContainer: {
        borderColor: "#095086",
        backgroundColor: "#095086",
        borderWidth: 2,
        width: '48%',
        padding: 10,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10
    },
    selectedTxt: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        alignContent: 'center',
        alignItems: 'center'
    },
    selectContainer: {
        borderColor: "#095086",
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        width: '48%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginLeft: 10
    },
    selectTxt: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
        color: "#095086",
    },
    bookContainer: {
        backgroundColor: "#EF066F",
        padding: 8,
        marginBottom: 30,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },

});