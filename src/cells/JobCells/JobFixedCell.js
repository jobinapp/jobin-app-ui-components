import React from "react";
import styled from "styled-components";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CustomText from "../../CustomText";

import { deactivatedGrayColor } from "../../../constants/color";

const PriceView = styled.View`
    margin-left: 76px;
    margin-bottom: 20px;
`

const JobFixedCell = props => {
    const job = props.job;
    const price = job.object.get("PriceMax");

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
                    Precio cerrado
                </CustomText>
                <CustomText type="semibold" fontSize={18}>
                    {Number((price * 1.21).toFixed(0)) + "€"}
                </CustomText>
            </PriceView>
        </JobCell>
    );
};

export default JobFixedCell;
