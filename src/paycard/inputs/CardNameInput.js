import React from "react";
import styled from "styled-components";

import {
    lineColor,
    redJobinColor,
    softblackColor,
    deactivatedGrayColor
} from "../../../constants/color";
import { marginRight, marginLeft } from "../../../constants/mainConstants";
import { mainSemibold } from "../../../constants/fonts";

import CustomText from "../../CustomText";

const Container = styled.View`
    height: 80px;
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    padding-top: 15px;
    padding-bottom: 17px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.valid ? lineColor : redJobinColor};
`;

const CardInput = styled.TextInput`
    font-size: 17px;
    font-family: ${mainSemibold};
    color: ${softblackColor};
    margin-top: 7px;
`;

const CardNameInput = props => {
    const onInputChange = text => {
        if (text.length > 2) {
            const nameReg = /^[A-Za-z áéíóúÁÉÍÓÚ]*$/;
            if (nameReg.test(text)) props.getCardName(text, true);
            else props.getCardName(null, false);
        } else props.getCardName(null, false);
    };

    return (
        <Container>
            <CustomText fontSize={13}>Nombre del titular</CustomText>
            <CardInput
                placeholder={"Nombre del titular"}
                placeholderTextColor={deactivatedGrayColor}
                selectionColor={redJobinColor}
                autoCorrect={false}
                onChangeText={text => onInputChange(text)}
                autoCapitalize={"words"}
            />
        </Container>
    );
};

export default CardNameInput;
