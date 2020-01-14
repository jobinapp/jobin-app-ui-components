import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import CustomText from "../../CustomText";

import { lineColor, whiteColor } from "../../../constants/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F7F6"
    },
    listItemView: {
        backgroundColor: "#F8F7F6"
    },
    cellView: {
        flex: 1,
        marginTop: 12,
        marginBottom: 12,
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: lineColor,
        backgroundColor: whiteColor
    },
    titleView: {
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: lineColor
    }
});

const JobCloseCell = props => {
    const job = props.job;

    const goToJobDetail = () => {
        props.goToJobDetail(props.job);
    };

    return (
        <View style={styles.listItemView}>
            <TouchableOpacity
                style={styles.cellView}
                onPress={goToJobDetail}
                disabled={!props.goToJobDetail}
            >
                <View style={styles.titleView}>
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
                </View>
                {props.children}
            </TouchableOpacity>
        </View>
    );
};

export default JobCloseCell;
