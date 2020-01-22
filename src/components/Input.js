import React, { useState } from "react";
import styled from "styled-components";

import CustomText from "./CustomText";
import { deactivatedGrayColor, redJobinColor, greenJobinColor } from "../constants/color";
import { regular } from "../constants/fonts";

const View = styled.View`
    height: 58px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.badInput ? redJobinColor : deactivatedGrayColor};
    ${props => props.style};
`;
const TextInput = styled.TextInput`
    height: 22px;
    font-size: 16px;
    font-family: ${regular};
`;

const Input = props => {
    const { style, badInput, onChangeText, ...other } = props;
    const [value, setValue] = useState(null);

    const onChange = text => {
        if (text.length > 0) setValue(text);
        else setValue(null);
        props.onChangeText ? props.onChangeText(text) : null;
    };

    return (
        <View style={style} badInput={badInput}>
            <CustomText
                style={{ marginTop: 13 }}
                fontSize={12}
                textColor={deactivatedGrayColor}
            >
                {props.placeholder && value ? props.placeholder : ""}
            </CustomText>
            <TextInput
                onChangeText={onChange}
                placeholderTextColor={deactivatedGrayColor}
                selectionColor={greenJobinColor}
                {...other}
            />
        </View>
    );
};

export default Input;
