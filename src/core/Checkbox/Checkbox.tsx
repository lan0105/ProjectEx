import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
interface Props {
    title: string
}
const Checkbox: React.FC<Props> = forwardRef((props, ref) => {
    const {title}=props;
    let [value, setValue] = useState(false);
    useImperativeHandle(ref, () => ({
            getValue:()=>{
                return value;
            }
        }),

    )
    const setValueCheckbox=()=>{
        setValue(!value)
    }
    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.touchable} onPress={setValueCheckbox}>
                <Icon
                    type={!value?"font-awesome":"antdesign"}
                    name={!value?'circle-thin':"checkcircleo"} />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
})
const styles = StyleSheet.create({
    touchable: {
        marginRight: 7
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})
export default Checkbox;