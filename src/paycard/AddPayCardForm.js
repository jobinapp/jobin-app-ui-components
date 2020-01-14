import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import CardNumberInput from "./inputs/CardNumberInput";
import CardNameInput from "./inputs/CardNameInput";
import CardExpiryDateInput from "./inputs/CardExpiryDateInput";
import CvcCardInput from "./inputs/CvcCardInput";

const styles = StyleSheet.create({
    rowView: {
        height: 80,
        width: 100 + "%",
        flexDirection: "row"
    },
    twoInputsView: {
        height: 80,
        width: 50 + "%"
    }
});

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
            <View style={styles.rowView}>
                <View style={styles.twoInputsView}>
                    <CardExpiryDateInput
                        getMonthAndYear={getMonthAndYear}
                        valid={dateValid}
                    />
                </View>
                <View style={styles.twoInputsView}>
                    <CvcCardInput getCVC={getCVC} valid={cvcValid} />
                </View>
            </View>
            <CardNameInput getCardName={getCardName} valid={nameValid} />
        </View>
    );
};
export default AddPayCardForm;
