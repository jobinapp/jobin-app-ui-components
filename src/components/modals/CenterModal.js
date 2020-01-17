import React from "react";
import styled from "styled-components";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const Container = styled.View`
    width: 94%;
    background-color: ${whiteColor};
    border-radius: 4px;
    overflow: hidden;
`;

const CenterModal = props => {
    const backdropColor = props.backdropColor ? props.backdropColor : "black";
    const backdropOpacity = props.backdropOpacity ? props.backdropOpacity : 0.7;

    return (
        <Modal
            style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 0
            }}
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            onModalHide={props.onModalHide}
            backdropColor={backdropColor}
            backdropOpacity={backdropOpacity}
        >
            <Container>{props.children}</Container>
        </Modal>
    );
};

export default CenterModal;
