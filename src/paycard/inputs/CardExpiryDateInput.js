import React, { useState } from "react";
import styled from "styled-components";

import {
    lineColor,
    redJobinColor,
    softblackColor,
    deactivatedGrayColor
} from "../../../constants/color";
import { marginLeft } from "../../../constants/mainConstants";
import { mainSemibold } from "../../../constants/fonts";

import CustomText from "../../CustomText";

const Container = styled.View`
    height: 80px;
    margin-right: 8px;
    margin-left: ${marginLeft};
    padding-top: 15px;
    padding-bottom: 17px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.valid ? lineColor : redJobinColor};
`;

const CardInput = styled.TextInput`
    font-size: 17px;
    font-family: ${mainSemibold};
    color: ${props => props.valid ? softblackColor : redJobinColor};
    margin-top: 7px;
`;

const CardNumberInput = props => {
    const [dateText, setDateText] = useState("");
    const [month, setMonth] = useState(null);

    const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === "Backspace") {
            setDateText("");
            setMonth(null);
            props.getMonthAndYear(null, null, true);
        } else {
            const dateTextTemp = dateText + keyValue;
            if (dateTextTemp.length <= 5) {
                if (dateTextTemp.length === 2) {
                    setDateText(`${dateTextTemp}/`);
                    setMonth(dateTextTemp);
                } else {
                    setDateText(dateTextTemp);
                    if (dateTextTemp.length === 5) {
                        // check if the dates are ok
                        const yearTemp = dateTextTemp.substring(3, 5);
                        if (checkExpiryDate(month, yearTemp))
                            props.getMonthAndYear(month, yearTemp, true);
                        else props.getMonthAndYear(null, null, false);
                    }
                }
            }
        }
    };

    const checkExpiryDate = (month, year) => {
        if (month <= 12) {
            const currentYear = new Date()
                .getFullYear()
                .toString()
                .substr(-2);
            return currentYear < year;
        } else return false;
    };

    // FIXME: onKeyPress en Android no funciona correctamente. Únicamente si keyboardType === default
    return (
        <Container>
            <CustomText fontSize={13}>F. caducidad</CustomText>
            <CardInput
                placeholder={"MM/AA"}
                placeholderTextColor={deactivatedGrayColor}
                selectionColor={redJobinColor}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onKeyPress={handleKeyPress}
                value={dateText}
                maxLength={5}
            />
        </Container>
    );
};

export default CardNumberInput;
