import React from "react";
import styled from "styled-components";

import CustomText from "./CustomText";

import { lineColor, backgroundGrayColor, whiteColor } from "../constants/color";

const Container = styled.TouchableOpacity`
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 56px;
    align-items: center;
    background-color: ${props =>
        props.selected ? backgroundGrayColor : whiteColor};
    ${props => props.style};
`;
const TextView = styled.View`
    display: flex;
    flex: 1;
    height: 100%;
    margin-right: 24px;
    margin-left: 12px;
    justify-content: center;
    border-bottom-color: ${lineColor};
    border-bottom-width: ${props => (props.selected ? 0 : 1)};
`;

const CheckImage = styled.Image`
    width: 24px;
    height: 24px;
`;

const CheckBox = props => {
    return (
        <Container style={props.style} {...props}>
            <CheckImage
                source={
                    props.selected
                        ? require("../assets/images/common/checkboxChecked.png")
                        : require("../assets/images/common/checkboxUnchecked.png")
                }
            />
            <TextView selected={props.selected}>
                <CustomText>{props.text}</CustomText>
            </TextView>
        </Container>
    );
};
export default CheckBox;
