import React from "react";
import styled from "styled-components";

import CustomText from "../../CustomText";

const CellButton = styled.TouchableOpacity`
    flex-direction: "row";
    margin-left: 24px;
    margin-right: 24px;
    align-items: "center";
    margin-top: ${props => (props.image ? "16px" : "0")};
`;

const ImageIcon = styled.Image`
    height: 32px;
    width: 32px;
    margin-right: 16px;
`;

const ListVerticalCell = props => {
    const vertical = props.vertical;
    const father = vertical.get("Father");

    if (!father) {
        const icon = vertical.get("Icon");
        return (
            <CellButton
                onPress={() => props.verticalSelected(vertical)}
                image={true}
            >
                <ImageIcon source={{ uri: icon.url() }} />
                <CustomText
                    numberOfLines={1}
                    style={{ marginBottom: 12, marginTop: 12 }}
                    type="semibold"
                    fontSize={18}
                >
                    {vertical.get("Type")}
                </CustomText>
            </CellButton>
        );
    } else {
        return (
            <CellButton onPress={() => props.verticalSelected(vertical)}>
                <CustomText
                    numberOfLines={2}
                    style={{ marginBottom: 8, marginTop: 8 }}
                >
                    {vertical.get("Type")}
                </CustomText>
            </CellButton>
        );
    }
};

export default ListVerticalCell;
