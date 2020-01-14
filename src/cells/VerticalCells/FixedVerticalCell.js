import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import CustomText from "../../CustomText";

import { deactivatedGrayColor, backgroundGrayColor } from "../../../constants/color";

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 185,
        marginLeft: 6,
        marginRight: 6
    },
    image: {
        height: 100,
        width: 150,
        resizeMode: "contain",
        marginBottom: 12,
        backgroundColor: backgroundGrayColor,
        borderRadius: 4
    }
});

const FixedVerticalCell = props => {
    // TODO: Obtener precio por localizacion
    const vertical = props.vertical;
    const price = vertical.get("Price").fixed.default.user;
    const totalPrice = price * 1.21;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.verticalSelected(vertical)}
        >
            <Image style={styles.image} />
            <CustomText
                type="semibold"
                numberOfLines={2}
                style={{ marginBottom: 2 }}
            >
                {vertical.get("JobTitle")}
            </CustomText>
            <CustomText
                type="semibold"
                fontSize={11}
                textColor={deactivatedGrayColor}
            >
                {"Desde " + Number(totalPrice.toFixed(0)) + " €"}
            </CustomText>
        </TouchableOpacity>
    );
};

export default FixedVerticalCell;
