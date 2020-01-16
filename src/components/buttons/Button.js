import React from "react";
import styled from "styled-components";

import CustomText from "../CustomText";
import { whiteColor, redJobinColor } from "../../constants/color";

const ButtonStyled = styled.TouchableOpacity`
    padding: 12px;
    border-radius: 4px;
    background-color: ${redJobinColor};
    align-items: center;
    justify-content: center;
    ${props => props.style};
`;

const Button = props => {
    return (
        <ButtonStyled
            style={props.style}
            {...props}
        >
            <CustomText type="bold" fontSize={17} textColor={whiteColor}>
                {props.buttonText}
            </CustomText>
        </ButtonStyled>
    );
};

export default Button;
