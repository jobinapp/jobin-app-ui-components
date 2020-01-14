import React from "react";
import { Text, Platform } from "react-native";

import { softblackColor } from "../constants/color";
import {
    mainBold,
    mainSemibold,
    mainExtraBold,
    mainLight,
    regular
} from "../constants/fonts";

const CustomText = props => {
    setFontType = type => {
        switch (type) {
            case "bold":
                return mainBold;
            case "semibold":
                return mainSemibold;
            case "extrabold":
                return mainExtraBold;
            case "light":
                return mainLight;
            default:
                return regular;
        }
    };

    const size = props.fontSize ? props.fontSize : 16;
    const font = setFontType(props.type ? props.type : "regular");
    const color = props.textColor ? props.textColor : softblackColor;
    const align = props.textAlign ? props.textAlign : "left";
    const numberOfLines = props.numberOfLines ? props.numberOfLines : null;
    const adjustsFontSizeToFit = props.adjustsFontSizeToFit
        ? props.adjustsFontSizeToFit
        : false;
    const style = [
        {
            fontFamily: font,
            fontSize: size,
            color: color,
            textAlign: align
        },
        props.style || {}
    ];
    const allProps = Object.assign(
        {},
        props,
        { style: style },
        {
            numberOfLines: numberOfLines,
            adjustsFontSizeToFit: adjustsFontSizeToFit
        }
    );
    return <Text {...allProps}>{props.children}</Text>;
};

export default CustomText;
