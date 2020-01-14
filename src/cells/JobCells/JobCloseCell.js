import React from "react";
import { StyleSheet, View, Image } from "react-native";

import JobCell from "../root/JobCell";
import Text from "../../CustomText";

import { lineColor, greenJobinColor } from "../../../constants/color";

const styles = StyleSheet.create({
    reviewView: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 20
    },
    joberView: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10
    },
    joberImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12,
        backgroundColor: lineColor
    },
    joberLabel: {
        marginTop: 2
    },
    starsView: {
        flexDirection: "row",
        marginTop: 3
    },
    starsImage: {
        height: 16,
        width: 16
    },
    reviewLabel: {
        marginBottom: 22
    },
    responseLabel: {
        marginBottom: 22
    }
});

const JobCloseCell = props => {
    const review = props.review;
    const joberImage = review.jober.get("Thumbnail");
    const emptyStar = require("../../../../assets/images/common/starEmptySmall.png");
    const fillStar = require("../../../../assets/images/common/starFillSmall.png");

    return (
        <JobCell job={review.job}>
            <View style={styles.reviewView}>
                <View style={styles.joberView}>
                    <Image
                        style={styles.joberImage}
                        source={
                            joberImage
                                ? { uri: joberImage.url() }
                                : require("../../../../assets/images/common/joberDefault.png")
                        }
                    />
                    <View>
                        <Text
                            style={styles.joberLabel}
                            type="semibold"
                            fontSize={16}
                        >
                            {review.jober.get("Name")}
                        </Text>
                        <View style={styles.starsView}>
                            <Image
                                style={styles.starsImage}
                                source={review.stars > 0 ? fillStar : emptyStar}
                            />
                            <Image
                                style={styles.starsImage}
                                source={review.stars > 1 ? fillStar : emptyStar}
                            />
                            <Image
                                style={styles.starsImage}
                                source={review.stars > 2 ? fillStar : emptyStar}
                            />
                            <Image
                                style={styles.starsImage}
                                source={review.stars > 3 ? fillStar : emptyStar}
                            />
                            <Image
                                style={styles.starsImage}
                                source={review.stars > 4 ? fillStar : emptyStar}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.reviewLabel}>{props.review.text}</Text>
                {review.response && (
                    <View>
                        <Text
                            style={{ marginBottom: 14 }}
                            type="semibold"
                            textColor={greenJobinColor}
                        >
                            Respuesta del Jober
                        </Text>
                        <Text style={styles.responseLabel}>
                            {review.response}
                        </Text>
                    </View>
                )}
            </View>
        </JobCell>
    );
};

export default JobCloseCell;
