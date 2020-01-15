import React, { useState } from "react";
import styled from "styled-components";

import CustomText from "./CustomText";

const View = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    height: 48px;
    justify-content: center;
    align-items: center;
    ${props => props.style}
`;
const ButtonRight = styled.TouchableOpacity`
    border: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    background-color: transparent;
    margin-left: 16px;
`;
const ButtonLeft = styled.TouchableOpacity`
    border: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    background-color: transparent;
    margin-right: 16px;
`;
const ButtonImage = styled.Image`
    height: 36px;
    width: 36px;
`;

const Counter = props => {
    const [counter, setCounter] = useState(props.min || 0);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(
        props.max ? props.min === props.max : false
    );

    const addToCounter = () => {
        const temp = counter + 1;
        setDisabledLeft(false);
        setCounter(temp);
        if (props.onPress) props.onPress(temp);

        if (temp + 1 > props.max) {
            setDisabledRight(true);
        }
    };

    const substractToCounter = () => {
        const temp = counter - 1;
        setDisabledRight(false);
        setCounter(temp);
        if (props.onPress) props.onPress(temp);
        if (temp - 1 < props.min || temp - 1 < 0) {
            setDisabledLeft(true);
        }
    };

    return (
        <View style={props.style}>
            <ButtonLeft
                key={"button-left"}
                onPress={disabledLeft ? null : substractToCounter}
                disabled={disabledLeft}
            >
                <ButtonImage
                    source={require("../assets/images/common/substractButton.png")}
                />
            </ButtonLeft>
            <CustomText key={"input"} type="semibold">
                {counter}
            </CustomText>
            <ButtonRight
                key={"button-right"}
                onPress={disabledRight ? null : addToCounter}
                disabled={disabledRight}
            >
                <ButtonImage
                    source={require("../assets/images/common/addButton.png")}
                />
            </ButtonRight>
        </View>
    );
};

export default Counter;
