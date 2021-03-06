import React from "react";
import styled from "styled-components";

import CustomText from "../../CustomText";

import { lineColor, whiteColor } from "../../../constants/color";

const ListItemView = styled.View`
    background-color: #F8F7F6;
`;

const CellButton = styled.TouchableOpacity`
    flex: 1;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 4px;
    border-width: 1px;
    border-color: ${lineColor};
    background-color: ${whiteColor};
`;

const TitleView = styled.View`
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${lineColor};
`;

const JobCloseCell = props => {
    const job = props.job;

    const goToJobDetail = () => {
        props.goToJobDetail(props.job);
    };

    return (
        <ListItemView>
            <CellButton
                onPress={goToJobDetail}
                disabled={!props.goToJobDetail}
            >
                <TitleView>
                    <CustomText
                        type="semibold"
                        fontSize={13}
                        textColor="#848484"
                        numberOfLines={1}
                    >
                        {job.get("Type").toUpperCase()}
                    </CustomText>
                    <CustomText type="bold" fontSize={20} numberOfLines={1}>
                        {job.get("Title")}
                    </CustomText>
                </TitleView>
                {props.children}
            </CellButton>
        </ListItemView>
    );
};

export default JobCloseCell;
