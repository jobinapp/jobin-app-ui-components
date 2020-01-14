import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import CustomText from "../CustomText";

import {
    silverColor,
    goldColor,
    greenJobinColor,
    redJobinColor,
    whiteColor,
    deactivatedGrayColor
} from "../../constants/color";

const styles = StyleSheet.create({
    joberCellView: {
        flex: 1,
        flexDirection: "row",
        marginRight: 16,
        marginLeft: 16,
        paddingTop: 12,
        paddingBottom: 12
    },
    joberImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12
    },
    joberSilverImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12,
        borderWidth: 2,
        borderColor: silverColor
    },
    joberGoldImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginRight: 12,
        borderWidth: 2,
        borderColor: goldColor
    },
    joberLabel: {
        marginTop: 2
    },
    starsView: {
        flexDirection: "row",
        marginTop: 2
    },
    starsImage: {
        height: 16,
        width: 16,
        marginLeft: 2,
        marginRight: 6,
        marginTop: 3
    },
    arrowImage: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        marginTop: 24
    },
    newLabelView: {
        width: 59,
        height: 21,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: greenJobinColor,
        marginTop: 3
    },
    medalView: {
        height: 24,
        width: 24,
        right: 24,
        top: 24,
        position: "absolute"
    }
});

const JoberCell = props => {
    const goToJoberProfile = () => {
        props.goToJoberProfile(props.jober);
    };

    const jober = props.jober;
    if (jober) {
        const fillStar = require("../../../assets/images/common/starFillSmall.png");
        const joberImage = jober.get("Thumbnail");
        const level = jober.get("Level");
        const nReviews = jober.get("Reviews");
        const points = jober.get("Points");

        // TODO: Falta el caso en el que el Jober no esté disponible
        return (
            <TouchableOpacity
                style={styles.joberCellView}
                onPress={goToJoberProfile}
            >
                <Image
                    resizeMode="cover"
                    style={
                        level == 2
                            ? styles.joberSilverImage
                            : level == 3
                            ? styles.joberGoldImage
                            : styles.joberImage
                    }
                    source={
                        joberImage
                            ? { uri: joberImage.url() }
                            : require("../../../assets/images/common/joberDefault.png")
                    }
                />
                <View style={{ flex: 1, marginRight: level > 1 ? 48 : 24 }}>
                    <CustomText
                        numberOfLines={1}
                        style={styles.joberLabel}
                        type="semibold"
                        fontSize={16}
                    >
                        {jober.get("Name")}
                    </CustomText>
                    {nReviews > 0 && (
                        <View style={styles.starsView}>
                            <CustomText
                                type="bold"
                                fontSize={16}
                                textColor={redJobinColor}
                            >
                                {Number(points.toFixed(1))}
                            </CustomText>
                            <Image
                                style={styles.starsImage}
                                source={fillStar}
                            />
                            <CustomText>
                                {nReviews + " valoraciones"}
                            </CustomText>
                        </View>
                    )}
                    {nReviews === 0 && (
                        <View style={styles.newLabelView}>
                            <CustomText
                                type="bold"
                                fontSize={13}
                                textColor={whiteColor}
                            >
                                NUEVO
                            </CustomText>
                        </View>
                    )}
                </View>
                {level > 1 && (
                    <View style={styles.medalView}>
                        <Image
                            source={
                                level === 2
                                    ? require("../../../assets/images/jober/silverMedal.png")
                                    : require("../../../assets/images/jober/goldMedal.png")
                            }
                        />
                    </View>
                )}
                <Image
                    style={styles.arrowImage}
                    source={require("../../../assets/images/common/cellArrow.png")}
                />
            </TouchableOpacity>
        );
    }
    // no jober cell
    else {
        return (
            <View style={styles.joberCellView}>
                <Image
                    style={styles.joberImage}
                    source={require("../../../assets/images/common/joberEmpty.png")}
                />
                <View>
                    <CustomText
                        style={styles.joberLabel}
                        type="semibold"
                        fontSize={16}
                        textColor={deactivatedGrayColor}
                    >
                        Profesional
                    </CustomText>
                    <CustomText fontSize={14} textColor={deactivatedGrayColor}>
                        Aquí aparecerá un Jober
                    </CustomText>
                </View>
            </View>
        );
    }
};

export default JoberCell;
