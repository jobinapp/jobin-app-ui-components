import React from "react";
import styled from "styled-components";

import CustomText from "../CustomText";

import { whiteColor, softblackColor } from "../../constants/color";
import { marginRight, marginLeft } from "../../constants/mainConstants";

const Container = styled.View`
    background-color: ${whiteColor};
    width: 100%;
    padding-right: ${marginRight};
    padding-left: ${marginLeft};
    padding-bottom: 8px;
    ${props => props.style}
`;

const NavigationTitle = props => {
    const textColor = props.textColor ? props.textColor : softblackColor;
    return (
        <Container style={props.style}>
            <CustomText type="bold" fontSize={24} textColor={textColor}>
                {props.titleText}
            </CustomText>
        </Container>
    );
};

export default NavigationTitle;
