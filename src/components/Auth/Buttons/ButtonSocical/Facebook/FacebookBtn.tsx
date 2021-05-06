import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
interface Props {
    title?: string
}
const FacebookBtn: React.FC<Props> = forwardRef((props, ref) => {
    const {title}=props;
    
    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.touchable} >
            <Text>{"FB"}</Text>
            </TouchableOpacity>
           
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
export default FacebookBtn;