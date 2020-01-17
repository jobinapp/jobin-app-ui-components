import React from "react";
import styled from "styled-components";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CustomText from "../../CustomText";

import { lineColor, softblackColor } from "../../../constants/color";

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
`;

const JobLeadCell = props => {
    const job = props.job;

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
            <JoberCell
                jober={job.jobersArray[1]}
                goToJoberProfile={goToJoberProfile}
            />
            <JoberCell
                jober={job.jobersArray[2]}
                goToJoberProfile={goToJoberProfile}
            />
            <ButtonsView>
                <Button onPress={goToPayment}>
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
                <Button onPress={goToReview}>
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
                <Button onPress={goToDelete}>
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
                </Button>
            </ButtonsView>
        </JobCell>
    );
};

export default JobLeadCell;
