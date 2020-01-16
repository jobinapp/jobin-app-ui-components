import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import CardNumberInput from "./inputs/CardNumberInput";
import CardNameInput from "./inputs/CardNameInput";
import CardExpiryDateInput from "./inputs/CardExpiryDateInput";
import CvcCardInput from "./inputs/CvcCardInput";

const RootView = styled.View`
    height: 80px;
    width: 100%;
    flex-direction: "row";
`;

const TwoInputsView = styled.View`
    height: 80px;
    width: 50%;
`;

const AddPayCardForm = props => {
    const [cardNumberValid, setCardNumberValid] = useState(true);
    const [dateValid, setDateValid] = useState(true);
    const [cvcValid, setCvcValid] = useState(true);
    const [nameValid, setNameValid] = useState(true);

    const getCardNumber = (cardNumber, valid) => {
        setCardNumberValid(valid);
        props.getCardNumber(cardNumber);
    };

    const getMonthAndYear = (month, year, valid) => {
        setDateValid(valid);
        props.getMonthAndYear(month, year);
    };

    const getCVC = (CVC, valid) => {
        setCvcValid(valid);
        props.getCVC(CVC);
    };

    const getCardName = (cardName, valid) => {
        setNameValid(valid);
        props.getCardName(cardName);
    };

    return (
        <View>
            <CardNumberInput
                getCardNumber={getCardNumber}
                valid={cardNumberValid}
            />
            <RootView>
                <TwoInputsView>
                    <CardExpiryDateInput
                        getMonthAndYear={getMonthAndYear}
                        valid={dateValid}
                    />
                </TwoInputsView>
                <TwoInputsView>
                    <CvcCardInput getCVC={getCVC} valid={cvcValid} />
                </TwoInputsView>
            </RootView>
            <CardNameInput getCardName={getCardName} valid={nameValid} />
        </View>
    );
};
export default AddPayCardForm;
