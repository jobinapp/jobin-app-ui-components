import React from "react";
import styled from "styled-components";

import CustomText from "../CustomText";

import { lineColor, deactivatedGrayColor } from "../../constants/color";
import { marginLeft, marginRight } from "../../constants/mainConstants";

const Cell = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    height: 56px;
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    ${props => props.style}
`;
const TextView = styled.View`
    flex: 1;
    height: 56px;
    flex-direction: row;
    align-items: center;
    border-bottom-color: ${lineColor};
    border-bottom-width: 1px;
`;
const Icon = styled.Image`
    height: 20px;
    width: 20px;
    margin-right: 16px;
`;
const Arrow = styled.Image`
    height: 20px;
    width: 20px;
    margin-left: 16px;
`;
const View = styled.View`
    flex: 1;
    flex-direction: column;
`;

const SearchCell = props => {
    return (
        <Cell {...props}>
            <Icon
                source={
                    props.source
                        ? props.source
                        : require("../../assets/images/common/searchIcon.png")
                }
            />
            <TextView>
                <View>
                    <CustomText>{props.title}</CustomText>
                    {props.subtitle && (
                        <CustomText
                            fontSize={14}
                            textColor={deactivatedGrayColor}
                        >
                            {props.subtitle}
                        </CustomText>
                    )}
                </View>
                <Arrow
                    source={require("../../assets/images/common/cellArrow.png")}
                />
            </TextView>
        </Cell>
    );
};

export default SearchCell;
