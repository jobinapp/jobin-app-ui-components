import React, { useState } from "react";
import styled from "styled-components";

import CustomText from "./CustomText";
import {
    lineColor,
    deactivatedGrayColor,
    redJobinColor
} from "../constants/color";
import { regular } from "../constants/fonts";

const View = styled.View`
    height: 58px;
    border-bottom-width: 1px;
    border-bottom-color: ${props =>
        props.badInput ? redJobinColor : lineColor};
    ${props => props.style};
`;
const TextInput = styled.TextInput`
    height: 22px;
    font-size: 16px;
    font-family: ${regular};
`;

const TextArea = props => {
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
                {...other}
                multiline={true}
                numberOfLines={props.numberOfLines || 4}
            />
        </View>
    );
};

export default TextArea;
