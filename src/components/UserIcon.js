/**
 * Icon UI
 */
import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
} from 'react-native';

export default UserIcon = (icon) => (
    <>
    <Image source={icon.image} style={styles.image} />
    <Text style={styles.name} >
        {icon.name}
    </Text>
    </>
);

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        borderRadius: 150 / 2,
        borderWidth: 0,
        resizeMode: "cover",
    },
    name: {
        color: "#C0C0C0",
        fontSize: 18,
        fontFamily: "Menlo"
    }
});