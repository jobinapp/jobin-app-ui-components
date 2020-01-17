import React from "react";
import styled from "styled-components";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CustomText from "../../CustomText";

import {
    lineColor,
    softblackColor,
    deactivatedGrayColor
} from "../../../constants/color";

const PriceView = styled.View`
    margin-left: 76px;
    margin-bottom: 10px;
`;

const ButtonsView = styled.View`
    flex: 1;
    flex-direction: row;
    height: 56px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
    border-top-width: 1px;
    border-top-color: ${lineColor};
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: ${props => (props.state === "bidWinner" ? 1 : 0.5)};
`;

const ButtonDelete = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const JobBidCell = props => {
    const job = props.job;
    const state = job.object.get("State");
    const price = job.object.get("PriceMax");

    const goToPayment = () => {
        props.goToPayment(props.job);
    };

    const goToReview = () => {
        props.goToReview(props.job);
    };

    const goToDelete = () => {
        props.goToDelete(props.job);
    };

    const goToJobDetail = () => {
        props.goToJobDetail(props.job);
    };

    const goToJoberProfile = jober => {
        props.goToJoberProfile(jober, props.job);
    };

    return (
        <JobCell job={job.object} goToJobDetail={goToJobDetail}>
            <JoberCell
                jober={job.jobersArray[0]}
                goToJoberProfile={goToJoberProfile}
            />
            <PriceView>
                <CustomText textColor={deactivatedGrayColor} fontSize={14}>
                    Precio máximo
                </CustomText>
                <CustomText type="semibold" fontSize={18}>
                    {Number((price * 1.21).toFixed(0)) + "€"}
                </CustomText>
            </PriceView>
            <ButtonsView>
                <Button
                    disabled={state !== "bidWinner"}
                    state={state}
                    onPress={goToPayment}
                >
                    <Image
                        source={require("../../../assets/images/settings/cardSettings.png")}
                        height={22}
                        width={22}
                        style={{ marginRight: 6 }}
                        tintColor={softblackColor}
                        resizeMode="contain"
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Pagar
                    </CustomText>
                </Button>
                <Button
                    disabled={state !== "bidWinner"}
                    state={state}
                    onPress={goToReview}
                >
                    <Image
                        source={require("../../../assets/images/common/starEmpty.png")}
                        height={22}
                        width={22}
                        style={{ marginRight: 6 }}
                        tintColor={softblackColor}
                        resizeMode="contain"
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Valorar
                    </CustomText>
                </Button>
                <ButtonDelete onPress={goToDelete}>
                    <Image
                        source={require("../../../assets/images/common/trashRed.png")}
                        height={22}
                        width={22}
                        style={{ marginRight: 6 }}
                        tintColor={softblackColor}
                        resizeMode="contain"
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Eliminar
                    </CustomText>
                </ButtonDelete>
            </ButtonsView>
        </JobCell>
    );
};

export default JobBidCell;
