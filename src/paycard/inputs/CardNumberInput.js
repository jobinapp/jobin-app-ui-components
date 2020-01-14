import React, { useRef, useState } from "react";
import styled from "styled-components";

import {
    lineColor,
    redJobinColor,
    softblackColor,
    deactivatedGrayColor
} from "../../../constants/color";
import { marginLeft, marginRight } from "../../../constants/mainConstants";
import { mainSemibold } from "../../../constants/fonts";

import CustomText from "../../CustomText";

const Container = styled.View`
    height: 80px;
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
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

const CardNumberInput = props => {
    // this brand should be working for something
    const [brand, setBrand] = useState(
        require("../../../../assets/images/settings/addPaymentMethod/defaultCard.png")
    );
    const [cardNumber, setCardNumber] = useState(null);
    const cardNumberInputRef = useRef();

    const onInputChange = text => {
        // check card type
        if (text.substring(0, 1) === 4) {
            setBrand(
                require("../../../../assets/images/settings/addPaymentMethod/visaCard.png")
            );
        } else if (text.substring(0, 1) === 5) {
            setBrand(
                require("../../../../assets/images/settings/addPaymentMethod/mastercardCard.png")
            );
        } else {
            setBrand(
                require("../../../../assets/images/settings/addPaymentMethod/defaultCard.png")
            );
        }

        setCardNumber(text);
    };

    const checkCardNumber = () => {
        if (cardNumber) {
            const result =
                cardNumber
                    .split("")
                    .reverse()
                    .map(x => parseInt(x, 10))
                    .map((x, idx) => (idx % 2 ? x * 2 : x))
                    .map(x => (x > 9 ? (x % 10) + 1 : x))
                    .reduce((accum, x) => (accum += x)) %
                    10 ===
                0;

            if (result) props.getCardNumber(state.cardNumber, result);
            else props.getCardNumber(null, result);
        } else props.getCardNumber(null, false);
    };

    return (
        <Container>
            <CustomText fontSize={13}>Número de tarjeta</CustomText>
            <CardInput
                ref={cardNumberInputRef}
                placeholder={"Número de tarjeta"}
                placeholderTextColor={deactivatedGrayColor}
                selectionColor={redJobinColor}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onChangeText={text => onInputChange(text)}
                maxLength={19}
                onEndEditing={checkCardNumber}
            />
        </Container>
    );
};

export default CardNumberInput;
