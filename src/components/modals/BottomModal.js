import React from "react";
import styled from "styled-components";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const Container = styled.View`
    width: 100%;
    margin-top: 48px;
    background-color: ${whiteColor};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
`;

const BottomModal = props => {
    return (
        <Modal
            style={{ justifyContent: "flex-end", margin: 0 }}
            isVisible={props.isVisible}
            onBackdropPress={props.closeAction}
        >
            <Container>{props.children}</Container>
        </Modal>
    );
};

export default BottomModal;
