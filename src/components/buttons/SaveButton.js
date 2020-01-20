import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import CustomText from "../CustomText";
import { whiteColor, greenJobinColor } from "../../constants/color";

const SafeAreaViewStyled = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    height: ${props => (props.fullScreen ? "56px" : "72px")};
    background-color: ${whiteColor};
`;

const KeyboardAvoidingViewStyled = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-right: ${props => (props.fullScreen ? "0px" : "8px")};
    padding-left: ${props => (props.fullScreen ? 0 : "8px")};
    background-color: ${whiteColor};
`;

const Button = styled.TouchableOpacity`
    background-color: ${props => props.buttonColor ? props.buttonColor : greenJobinColor};
    height: 56px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: ${props => (props.fullScreen ? "0px" : "4px")};
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    flex-direction: row;
`;

const SaveButton = props => {
    const disableKeyboard = props.disableKeyboard
        ? props.disableKeyboard
        : false;

    return (
        <KeyboardAvoidingViewStyled
            behavior={Platform.OS === "android" ? null : "padding"}
            enabled={!disableKeyboard}
        >
            <SafeAreaViewStyled>
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
            </SafeAreaViewStyled>
        </KeyboardAvoidingViewStyled>
    );
};

export default SaveButton;
