import React from "react";
import styled from "styled-components";

import CustomText from "../../CustomText";

import { lineColor, whiteColor } from "../../../constants/color";

const CellButton = styled.TouchableOpacity`
    width: 125px;
    height: 144px;
    border-width: 1px;
    border-color: ${lineColor};
    border-radius: 4px;
    margin-left: 6px;
    margin-right: 6px;
    align-items: "center";
    justify-content: "center";
    padding: 8px;
    background-color: ${whiteColor};
`;

const IconImage = styled.Image`
    height: 48px;
    width: 48px;
    margin-bottom: 12px;
`;

const FatherVerticalCell = props => {
    const vertical = props.vertical;
    const icon = vertical.get("Icon");

    return (
        <CellButton onPress={() => props.verticalSelected(vertical)}>
            <IconImage
                resizeMode="contain"
                source={{ uri: icon ? icon.url() : null }}
            />
            <CustomText type="semibold" numberOfLines={1}>
                {vertical.get("Type")}
            </CustomText>
        </CellButton>
    );
};

export default FatherVerticalCell;
