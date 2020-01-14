import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import CustomText from "../../CustomText";

import { lineColor, whiteColor } from "../../../constants/color";

const styles = StyleSheet.create({
    container: {
        width: 125,
        height: 144,
        borderWidth: 1,
        borderColor: lineColor,
        borderRadius: 4,
        marginLeft: 6,
        marginRight: 6,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        backgroundColor: whiteColor
    },
    iconImage: {
        height: 48,
        width: 48,
        resizeMode: "contain",
        marginBottom: 12
    }
});

const FatherVerticalCell = props => {
    const vertical = props.vertical;
    const icon = vertical.get("Icon");

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.verticalSelected(vertical)}
        >
            <Image
                style={styles.iconImage}
                source={{ uri: icon ? icon.url() : null }}
            />
            <CustomText type="semibold" numberOfLines={1}>
                {vertical.get("Type")}
            </CustomText>
        </TouchableOpacity>
    );
};

export default FatherVerticalCell;
