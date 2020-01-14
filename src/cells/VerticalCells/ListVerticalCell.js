import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import CustomText from "../../CustomText";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 24,
        marginRight: 24,
        alignItems: "center"
    },
    iconImage: {
        height: 32,
        width: 32,
        marginRight: 16
    }
});

const ListVerticalCell = props => {
    const vertical = props.vertical;
    const father = vertical.get("Father");

    if (!father) {
        const icon = vertical.get("Icon");
        return (
            <TouchableOpacity
                style={[styles.container, { marginTop: 16 }]}
                onPress={() => props.verticalSelected(vertical)}
            >
                <Image style={styles.iconImage} source={{ uri: icon.url() }} />
                <CustomText
                    numberOfLines={1}
                    style={{ marginBottom: 12, marginTop: 12 }}
                    type="semibold"
                    fontSize={18}
                >
                    {vertical.get("Type")}
                </CustomText>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => props.verticalSelected(vertical)}
            >
                <CustomText
                    numberOfLines={2}
                    style={{ marginBottom: 8, marginTop: 8 }}
                >
                    {vertical.get("Type")}
                </CustomText>
            </TouchableOpacity>
        );
    }
};

export default ListVerticalCell;
