import React from "react";
import { StyleSheet, View } from "react-native";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CustomText from "../../CustomText";

import { deactivatedGrayColor } from "../../../constants/color";

const styles = StyleSheet.create({
    priceView: {
        marginLeft: 76,
        marginBottom: 20
    }
});

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
            <View style={styles.priceView}>
                <CustomText textColor={deactivatedGrayColor} fontSize={14}>
                    Precio cerrado
                </CustomText>
                <CustomText type="semibold" fontSize={18}>
                    {Number((price * 1.21).toFixed(0)) + "€"}
                </CustomText>
            </View>
        </JobCell>
    );
};

export default JobFixedCell;
