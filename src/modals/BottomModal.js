import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    container: {
        width: 100 + "%",
        marginTop: 48,
        backgroundColor: whiteColor,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: "hidden"
    }
});

const BottomModal = props => {
    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.closeAction}
        >
            <View style={styles.container}>{props.children}</View>
        </Modal>
    );
};

export default BottomModal;
