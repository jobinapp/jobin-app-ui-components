import React from "react";
import styled from "styled-components";

import CustomText from "../CustomText";
import { greenJobinColor } from "../../constants/color";

const ButtonStyled = styled.TouchableOpacity`
    min-width: 100px;
    border-radius: 4px;
    ${props => props.style};
`;

const CallToAction = props => {
    return (
        <ButtonStyled
            style={props.style}
            {...props}
        >
            <CustomText type="bold" fontSize={17} textColor={greenJobinColor}>
                {props.buttonText}
            </CustomText>
        </ButtonStyled>
    );
};

export default CallToAction;
