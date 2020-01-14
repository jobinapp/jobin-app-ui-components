import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
        margin: 0
    },
    container: {
        width: 94 + "%",
        backgroundColor: whiteColor,
        borderRadius: 4,
        overflow: "hidden"
    }
});

const CenterModal = props => {
    const backdropColor = props.backdropColor ? props.backdropColor : "black";
    const backdropOpacity = props.backdropOpacity ? props.backdropOpacity : 0.7;

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            onModalHide={props.onModalHide}
            backdropColor={backdropColor}
            backdropOpacity={backdropOpacity}
        >
            <View style={styles.container}>{props.children}</View>
        </Modal>
    );
};

export default CenterModal;
