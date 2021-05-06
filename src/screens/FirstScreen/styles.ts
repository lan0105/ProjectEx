import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    touchable: {
        marginRight: 7
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
      },
      preview: {
        flex: 1,
        borderWidth:2,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    
})
export default styles;
