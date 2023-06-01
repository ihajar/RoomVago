import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
        flexDirection: 'column',
    },
    profileContainer: {
        // width: '20%',
        marginVertical: 20, 
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        flexDirection: 'column',
        
    },
    imgPickerBox: {
        backgroundColor:'#ECF6FE', 
        alignItems:'center', 
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 10,
        flex: 1
    },
    avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center', 
    },
    container: {
        // width: '88%',
        marginHorizontal: 30,
        paddingVertical: 5,
        // padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputContainer: {
        backgroundColor: 'transparent',
        textAlign: 'left',
        width: '100%',
        textDecorationLine: 'none',
    },
    confirmContainer: {
        backgroundColor: "#ECF6FE",
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        padding: 10,
        width: '100%',
        paddingTop: 20,
    },
    confirmBox: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 4,
        gap: 5,
    },
    // priceContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
});