import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { useHeaderHeight } from "react-navigation-stack";

import CustomText from "../CustomText";
import { whiteColor, greenJobinColor } from "../../constants/color";

const KeyboardAvoidingViewStyled = styled.KeyboardAvoidingView`
    height: ${props => props.fullScreen ? "56px" : "72px"};;
    padding-right: ${props => props.fullScreen ? "0px" : "24px"};
    padding-left: ${props => props.fullScreen ? "0px" : "24px"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : whiteColor};
`;

const Button = styled.TouchableOpacity`
    background-color: ${props => props.buttonColor ? props.buttonColor : greenJobinColor};
    height: 56px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.fullScreen ? "0px" : "4px"};
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    flex-direction: row;
    margin-top: ${props => props.fullScreen ? "0px" : "8px"};
    margin-bottom: ${props => props.fullScreen ? "0px" : "8px"};
`;

const SaveButton = props => {

    const headerHeight = useHeaderHeight(); 

    return (
        <KeyboardAvoidingViewStyled
            keyboardVerticalOffset = {headerHeight+56}
            behavior={Platform.OS === "android" ? null : "padding"}
            enabled={props.disableKeyboard ? !props.disableKeyboard : true}
            fullScreen={props.fullScreen}
            backgroundColor={props.backgroundColor}
        >
            <Button
                onPress={props.onPress}
                disabled={props.disabled || props.loading}
                fullScreen={props.fullScreen}
                buttonColor={props.buttonColor}
            >
                {props.loading ? (
                    <LottieView
                        style={{ height: 24 }}
                        source={require("../../assets/animations/loadingButton.json")}
                        autoPlay
                        loop
                    />
                ) : (
                    <CustomText
                        type="bold"
                        fontSize={17}
                        textColor={whiteColor}
                        styled={{ color: whiteColor, fontSize: 17 }}
                    >
                        {props.buttonText}
                    </CustomText>
                )}
            </Button>
        </KeyboardAvoidingViewStyled>
    );
};

export default SaveButton;
