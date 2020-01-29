import React from "react";
import styled from "styled-components";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CallToAction from '../../buttons/CallToAction';

import { lineColor } from "../../../constants/color";

const BottomView = styled.View`
    margin-top: 16px;
    height: 56px;
    border-top-width: 1px;
    border-top-color: ${lineColor};
    margin-left: 24px;
    margin-right: 24px;
    justify-content: center;
`

const JobFixedCell = props => {
    const job = props.job;

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
            <BottomView>
                <CallToAction
                    buttonText="Ver detalle del servicio"
                    onPress={goToJobDetail}
                />
            </BottomView>
        </JobCell>
    );
};

export default JobFixedCell;
