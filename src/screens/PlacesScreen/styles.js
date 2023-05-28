import { StyleSheet } from "react-native";
export default StyleSheet.create({
    hdIconContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between', 
        paddingHorizontal: 20, 
        padding:12, 
        backgroundColor: '#D9EDFC'
    },
    icnContainer: {
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent: 'space-around',
    },
    icnTxt: {
        paddingHorizontal: 5,
        fontSize: 15,
        fontWeight: '500',
        color: '#095086'
    },
    prptyContainer: {
        backgroundColor: '#F5F5F5',
        margin: 20, 
    },

    footerContainer: {
        paddingLeft: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 10,
        marginBottom: 30,
    },
    footerBtn: {
        fontSize: 20,
        fontWeight: '700',
        color: '#095086',
    },
    modalConatiner: {
        flexDirection: 'row'
    },
    modalRight: {
        marginVertical: 10, 
        flex: 2,
        height: 280,
        borderRightWidth: 1,
        borderColor: '#095086',
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    modalLeft: {
        flex: 3,
        margin: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginVertical: 10,
    },
    filterTxt: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 6,
        color: '#095086'
    },
})