import React from "react";
import styled from "styled-components";
import Modal from "react-native-modal";

import { whiteColor } from "../../constants/color";

const Container = styled.View`
    flex: 1;
    background-color: ${whiteColor};
    border-radius: 8px;
    overflow: hidden;
    margin-top: 24px;
`;

const FullModal = props => {
    return (
        <Modal isVisible={props.isVisible} onBackdropPress={props.closeAction}>
            <Container>{props.children}</Container>
        </Modal>
    );
};

export default FullModal;
