import React, { useState } from "react";
import styled from "styled-components";

import {
    lineColor,
    redJobinColor,
    softblackColor,
    deactivatedGrayColor
} from "../../../constants/color";
import { marginRight } from "../../../constants/mainConstants";
import { mainSemibold } from "../../../constants/fonts";

import CustomText from "../../CustomText";

const Container = styled.View`
    height: 80px;
    margin-right: ${marginRight};
    margin-left: 8px;
    padding-top: 15px;
    padding-bottom: 17px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => (props.valid ? lineColor : redJobinColor)};
`;

const CardInput = styled.TextInput`
    font-size: 17px;
    font-family: ${mainSemibold};
    color: ${softblackColor};
    margin-top: 7px;
`;

const CvcCardInput = props => {
    const [cvc, setCvc] = useState(null);

    const onTextChange = text => {
        setCvc(text);
    };

    const checkCVC = () => {
        if (cvc) {
            if (cvc.length === 3 || cvc.length === 4) props.getCVC(cvc, true);
            else props.getCVC(null, false);
        } else props.getCVC(null, false);
    };

    return (
        <Container>
            <CustomText fontSize={13}>CVC</CustomText>
            <CardInput
                placeholder={"CVC"}
                placeholderTextColor={deactivatedGrayColor}
                selectionColor={redJobinColor}
                autoCorrect={false}
                keyboardType={"number-pad"}
                secureTextEntry={true}
                maxLength={4}
                onChangeText={onTextChange}
                onEndEditing={checkCVC}
            />
        </Container>
    );
};

export default CvcCardInput;
