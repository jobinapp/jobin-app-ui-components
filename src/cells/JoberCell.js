import React from "react";
import { StyleSheet, View, Image } from "react-native";
import styled from "styled-components";

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
    medalView: {
        height: 24,
        width: 24,
        right: 24,
        top: 24,
        position: "absolute"
    }
});

const JoberCellButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: "row";
    margin-right: 16px;
    margin-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const JoberCellView = styled.View`
    flex: 1;
    flex-direction: "row";
    margin-right: 16px;
    margin-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const JoberBadge = styled.Image`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    margin-right: 12px;
    border-width: ${props =>
        props.level === 2 || props.level === 3 ? "2px" : "0"};
    border-color: ${props =>
        props.level === 2
            ? silverColor
            : props.level === 3
            ? goldColor
            : "transparent"};
`;

const StarsView = styled.View`
    flex-direction: "row";
    margin-top: 2px;
`;

const StarsImage = styled.Image`
    height: 16px;
    width: 16px;
    margin-left: 2px;
    margin-right: 6px;
    margin-top: 3px;
`;

const ArrowImage = styled.Image`
    width: 24px;
    height: 24px;
    position: "absolute";
    right: 0;
    margin-top: 24px;
`;

const NewLabelView = styled.View`
    width: 59px;
    height: 21px;
    border-radius: 4px;
    justify-content: "center";
    align-items: "center";
    background-color: ${greenJobinColor};
    margin-top: 3px;
`;

const MedalView = styled.View`
    height: 24px;
    width: 24px;
    right: 24px;
    top: 24px;
    position: "absolute";
`

const JoberCell = props => {
    const goToJoberProfile = () => {
        props.goToJoberProfile(props.jober);
    };

    const jober = props.jober;
    if (jober) {
        const fillStar = require("../../assets/images/common/starFillSmall.png");
        const joberImage = jober.get("Thumbnail");
        const level = jober.get("Level");
        const nReviews = jober.get("Reviews");
        const points = jober.get("Points");

        // TODO: Falta el caso en el que el Jober no esté disponible
        return (
            <JoberCellButton onPress={goToJoberProfile}>
                <JoberBadge
                    resizeMode="cover"
                    source={
                        joberImage
                            ? { uri: joberImage.url() }
                            : require("../../assets/images/common/joberDefault.png")
                    }
                />
                <View style={{ flex: 1, marginRight: level > 1 ? 48 : 24 }}>
                    <CustomText
                        numberOfLines={1}
                        style={{ marginTop: 2 }}
                        type="semibold"
                        fontSize={16}
                    >
                        {jober.get("Name")}
                    </CustomText>
                    {nReviews > 0 && (
                        <StarsView>
                            <CustomText
                                type="bold"
                                fontSize={16}
                                textColor={redJobinColor}
                            >
                                {Number(points.toFixed(1))}
                            </CustomText>
                            <StarsImage
                                source={fillStar}
                            />
                            <CustomText>
                                {nReviews + " valoraciones"}
                            </CustomText>
                        </StarsView>
                    )}
                    {nReviews === 0 && (
                        <NewLabelView>
                            <CustomText
                                type="bold"
                                fontSize={13}
                                textColor={whiteColor}
                            >
                                NUEVO
                            </CustomText>
                        </NewLabelView>
                    )}
                </View>
                {level > 1 && (
                    <MedalView>
                        <Image
                            source={
                                level === 2
                                    ? require("../../assets/images/jober/silverMedal.png")
                                    : require("../../assets/images/jober/goldMedal.png")
                            }
                        />
                    </MedalView>
                )}
                <ArrowImage
                    resizeMode="contain"
                    source={require("../../assets/images/common/cellArrow.png")}
                />
            </JoberCellButton>
        );
    }
    // no jober cell
    else {
        return (
            <JoberCellView>
                <Image
                    style={styles.joberImage}
                    source={require("../../assets/images/common/joberEmpty.png")}
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
            </JoberCellView>
        );
    }
};

export default JoberCell;
