import React from "react";
import styled from "styled-components";

import CustomText from "../../CustomText";

import {
    deactivatedGrayColor,
    backgroundGrayColor
} from "../../../constants/color";

const CellButton = styled.TouchableOpacity`
    width: 150px;
    height: 185px;
    margin-left: 6px;
    margin-right: 6px;
`;

const ImageIcon = styled.Image`
    height: 100px;
    width: 150px;
    margin-bottom: 12px;
    background-color: ${backgroundGrayColor};
    border-radius: 4px;
`;

const FixedVerticalCell = props => {
    // TODO: Obtener precio por localizacion
    const vertical = props.vertical;
    const price = vertical.get("Price").fixed.default.user;
    const totalPrice = price * 1.21;

    return (
        <CellButton onPress={() => props.verticalSelected(vertical)}>
            <ImageIcon resizeMode="contain" />
            <CustomText
                type="semibold"
                numberOfLines={2}
                style={{ marginBottom: 2 }}
            >
                {vertical.get("JobTitle")}
            </CustomText>
            <CustomText
                type="semibold"
                fontSize={11}
                textColor={deactivatedGrayColor}
            >
                {"Desde " + Number(totalPrice.toFixed(0)) + " €"}
            </CustomText>
        </CellButton>
    );
};

export default FixedVerticalCell;
