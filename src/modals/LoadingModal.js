import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
        margin: 0
    },
    container: {
        width: 56,
        height: 56,
        backgroundColor: whiteColor,
        borderRadius: 4,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    }
});

const LoadingModal = props => {
    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.closeAction}
        >
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        </Modal>
    );
};

export default LoadingModal;
