import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import JobCell from "../root/JobCell";
import JoberCell from "../JoberCell";
import CustomText from "../../CustomText";

import { lineColor, softblackColor } from "../../../constants/color";

const styles = StyleSheet.create({
    buttonsView: {
        flex: 1,
        flexDirection: "row",
        height: 56,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: lineColor
    },
    button: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageButton: {
        height: 22,
        width: 22,
        marginRight: 6,
        tintColor: softblackColor
    }
});

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
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={goToPayment}>
                    <Image
                        resizeMode="contain"
                        style={styles.imageButton}
                        source={require("../../../../assets/images/settings/cardSettings.png")}
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Pagar
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToReview}>
                    <Image
                        resizeMode="contain"
                        style={styles.imageButton}
                        source={require("../../../../assets/images/common/starEmpty.png")}
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Valorar
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToDelete}>
                    <Image
                        resizeMode="contain"
                        style={styles.imageButton}
                        source={require("../../../../assets/images/common/trashRed.png")}
                    />
                    <CustomText type="semibold" fontSize={14}>
                        Eliminar
                    </CustomText>
                </TouchableOpacity>
            </View>
        </JobCell>
    );
};

export default JobLeadCell;
