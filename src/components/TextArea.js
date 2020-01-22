import React, { useState } from "react";
import styled from "styled-components";

import CustomText from "./CustomText";
import {
    lineColor,
    deactivatedGrayColor,
    redJobinColor
} from "../constants/color";
import { regular } from "../constants/fonts";
import { marginLeft, marginRight } from "../constants/mainConstants";

const View = styled.View`
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    margin-top: 16px;
    margin-bottom: 16px;
    height: 56px;
    border-width: 1px;
    border-color: ${props => (props.badInput ? redJobinColor : lineColor)};
    ${props => props.style};
`;
const TextInput = styled.TextInput`
    font-size: 16px;
    padding: 8px 8px;
    font-family: ${regular};
`;

const TextArea = props => {
    const { style, badInput, onChangeText, ...other } = props;
    const tooltip = props.tooltip || 1000;
    const [value, setValue] = useState(null);
    const [chars, setChars] = useState(tooltip);

    const onChange = text => {
        if (text.length > 0) setValue(text);
        else setValue(null);
        props.onChangeText ? props.onChangeText(text) : null;
        setChars(tooltip - text.length);
    };

    return (
        <>
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
            <CustomText
                style={{ marginLeft: marginLeft }}
                fontSize={14}
                textColor={deactivatedGrayColor}
            >
                {`${chars} caracter${chars >= 2 ? "es" : ""}`}
            </CustomText>
        </>
    );
};

export default TextArea;
