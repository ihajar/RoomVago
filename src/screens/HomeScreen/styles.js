import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        // width:'90%',
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center',
        // height: '60%',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        display: 'flex',
        flexDirection:'column',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      },
    fieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderBottomWidth: 0.3,
        paddingHorizontal: 10,
        borderBottomColor: 'grey',
      },
    inputField: {
        fontSize: 15,
        color: 'grey',
      },
    modalPressable: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
    symbolContainer: {
        width: 30, 
        height: 30, 
        borderRadius: 18, 
        borderColor: '#DDFFF7', 
        backgroundColor: '#DDFFF7',
        alignItems: 'center',
      },
    symboleTxt: {
        textAlign: 'center', 
        fontSize: 22, 
        fontWeight: '400', 
        paddingHorizontal: 6,
        color: 'grey'
      },
    selectionContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginVertical: 10, 
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 20,
      },
    searchContainer: {
        backgroundColor: '#095086', 
        width: '100%', 
        height: 50, 
        paddingVertical: 10, 
        borderRadius: 20, 
        alignItems: 'center', 
        marginVertical: 20
    },
    currentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
        marginTop: 20,
        
    },
    currentTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 10,
        color: '#095086',
        paddingBottom: 10
    },
    searchOutputs: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5,
    },
    txtOupt: {
        fontSize: 14,
        fontWeight: '600',
        color: '#095086'
    },
    outputBubble: {
        backgroundColor: '#DDFFF7', 
        padding: 10, 
        borderRadius: 20, 
        marginHorizontal: 5
    },
    imageContainer: {
        // marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
       marginBottom: 15
      
    },
    image: {
        width: 300, 
        height: 90,
        resizeMode: 'contain'
    },
});

