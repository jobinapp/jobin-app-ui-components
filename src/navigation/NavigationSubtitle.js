import React from "react";
import styled from "styled-components";

import { whiteColor, softblackColor } from "../../constants/color";
import { marginLeft, marginRight } from "../../constants/mainConstants";

import CustomText from "../CustomText";

const Container = styled.View`
    background-color: ${props => props.backgroundColor};
    width: 100%;
    padding-right: ${marginRight};
    padding-left: ${marginLeft};
    padding-bottom: 12px;
`;

const NavigationSubtitle = props => {
    return (
        <Container
            backgroundColor={
                props.backgroundColor ? props.backgroundColor : whiteColor
            }
        >
            <CustomText
                type="regular"
                textColor={props.textColor ? props.textColor : softblackColor}
                numberOfLines={props.numberOfLines ? props.numberOfLines : null}
            >
                {props.subtitleText}
            </CustomText>
        </Container>
    );
};

export default NavigationSubtitle;
