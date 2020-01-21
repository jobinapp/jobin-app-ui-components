import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import Input from "./Input";

const RootView = styled.View`
    flex-direction: row;
`;

const AddPayCardForm = props => {
    const [brand, setBrand] = useState(require("../assets/images/settings/addPaymentMethod/defaultCard.png"));
    const [cardNumberValid, setCardNumberValid] = useState(true);
    const [dateValid, setDateValid] = useState(true);
    const [cvcValid, setCvcValid] = useState(true);
    const [nameValid, setNameValid] = useState(true);
    const [name, setName] = useState(undefined);
    const [cardNumber, setCardNumber] = useState(undefined);
    const [cvc, setCvc] = useState(undefined);
    const [month, setMonth] = useState(undefined);
    const [year, setYear] = useState(undefined);
    const [dateText, setDateText] = useState(undefined);

    const onNameChange = text => {
        if (text.length > 2) {
            const nameReg = /^[A-Za-z áéíóúÁÉÍÓÚ]*$/;
            if (nameReg.test(text)){
                setName(text);
                setNameValid(true);
                props.onDataChange ? props.onDataChange(cardNumber, month, year, cvc, text) : null
            }
            else{
                setName(null);
                setNameValid(false);
                props.onDataChange ? props.onDataChange(cardNumber, month, year, cvc, null) : null
            }
        } 
        else {
            setName(null);
            setNameValid(true);
            props.onDataChange ? props.onDataChange(cardNumber, month, year, cvc, null) : null
        }
    };

    const onCardChange = text => {
        // check card type
        if (text.substring(0, 1) === 4) {
            setBrand(
                require("../assets/images/settings/addPaymentMethod/visaCard.png")
            );
        } else if (text.substring(0, 1) === 5) {
            setBrand(
                require("../assets/images/settings/addPaymentMethod/mastercardCard.png")
            );
        } else {
            setBrand(
                require("../assets/images/settings/addPaymentMethod/defaultCard.png")
            );
        }
        setCardNumber(text);
    };

    const onDateChange = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === "Backspace") {
            setDateText("");
            setMonth(null);
            setYear(null);
            setDateValid(true);
            props.onDataChange ? props.onDataChange(cardNumber, null, null, cvc, name) : null
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
                        if (checkExpiryDate(month, yearTemp)){
                            setMonth(month);
                            setYear(yearTemp);
                            setDateValid(true);
                            props.onDataChange ? props.onDataChange(cardNumber, month, yearTemp, cvc, name) : null
                        }
                        else {
                            setMonth(null);
                            setYear(null);
                            setDateValid(false);
                            props.onDataChange ? props.onDataChange(cardNumber, null, null, cvc, name) : null
                        }
                    }
                }
            }
        }
    };

    const onCvcChange = text => {
        setCvc(text);
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

            if (result){
                setCardNumberValid(true);
                props.onDataChange ? props.onDataChange(cardNumber, month, year, cvc, name) : null
            }
            else{
                setCardNumberValid(false);
                setCardNumber(null);
                props.onDataChange ? props.onDataChange(null, month, year, cvc, name) : null
            }
        }
        else{
            setCardNumberValid(true);
            props.onDataChange ? props.onDataChange(null, month, year, cvc, name) : null
        }
    };

    const checkCVC = () => {
        if (cvc) {
            if (cvc.length === 3 || cvc.length === 4){
                setCvcValid(true);
                props.onDataChange ? props.onDataChange(cardNumber, month, year, cvc, name) : null
            }
            else{
                setCvc(null);
                setCvcValid(false);
                props.onDataChange ? props.onDataChange(cardNumber, month, year, null, name) : null
            }
        }
        else {
            setCvcValid(true);
            props.onDataChange ? props.onDataChange(cardNumber, month, year, null, name) : null
        }
    };

    return (
        <View>
            <Input
                placeholder={"Número de tarjeta"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onChangeText={text => onCardChange(text)}
                maxLength={19}
                onEndEditing={checkCardNumber}
                badInput={!cardNumberValid}
            />
            <RootView>
                <Input
                    style={{flex: 1, marginRight: 8}}
                    placeholder={"MM/AA"}
                    autoCorrect={false}
                    keyboardType={"number-pad"}
                    onKeyPress={onDateChange}
                    value={dateText}
                    maxLength={5}
                    badInput={!dateValid}
                />
                <Input
                    style={{flex: 1, marginLeft: 8}}
                    placeholder={"CVC"}
                    autoCorrect={false}
                    keyboardType={"number-pad"}
                    maxLength={4}
                    onChangeText={onCvcChange}
                    onEndEditing={checkCVC}
                    badInput={!cvcValid}
                />
            </RootView>
            <Input
                placeholder={"Nombre del titular"}
                autoCorrect={false}
                onChangeText={text => onNameChange(text)}
                autoCapitalize={"words"}
                badInput={!nameValid}
            />
        </View>
    );
};
export default AddPayCardForm;
