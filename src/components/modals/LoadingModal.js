import React from "react";
import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const Container = styled.View`
    width: 56px;
    height: 56px;
    background-color: ${whiteColor};
    border-radius: 4px;
    overflow: "hidden";
    justify-content: "center";
    align-items: "center";
`;

const LoadingModal = props => {
    return (
        <Modal
            style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 0
            }}
            isVisible={props.isVisible}
            onBackdropPress={props.closeAction}
        >
            <Container>
                <ActivityIndicator />
            </Container>
        </Modal>
    );
};

export default LoadingModal;
