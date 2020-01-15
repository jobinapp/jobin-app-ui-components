import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import JobCell from "../root/JobCell";
import Text from "../../CustomText";

import { lineColor, greenJobinColor } from "../../../constants/color";

const ReviewView = styled.View`
    flex: 1;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 20px;
`;

const JoberView = styled.View`
    flex: 1;
    flex-direction: "row";
    margin-bottom: 10;
`;

const JoberImage = styled.Image`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    margin-right: 12px;
    background-color: ${lineColor};
`;

const JoberLabel = styled.Text`
    margin-top: 2px;
`;

const StarsView = styled.View`
    flex-direction: "row";
    margin-top: 3px;
`;

const StarsImage = styled.Image`
    height: 16px;
    width: 16px;
`;

const ReviewLabel = styled.Text`
    margin-bottom: 22px;
`;

const JobCloseCell = props => {
    const review = props.review;
    const joberImage = review.jober.get("Thumbnail");
    const emptyStar = require("../../../assets/images/common/starEmpty.png");
    const fillStar = require("../../../assets/images/common/starFill.png");

    return (
        <JobCell job={review.job}>
            <ReviewView>
                <JoberView>
                    <JoberImage
                        source={
                            joberImage
                                ? { uri: joberImage.url() }
                                : require("../../../assets/images/common/joberDefault.png")
                        }
                    />
                    <View>
                        <JoberLabel type="semibold" fontSize={16}>
                            {review.jober.get("Name")}
                        </JoberLabel>
                        <StarsView>
                            <StarsImage
                                source={review.stars > 0 ? fillStar : emptyStar}
                            />
                            <StarsImage
                                source={review.stars > 1 ? fillStar : emptyStar}
                            />
                            <StarsImage
                                source={review.stars > 2 ? fillStar : emptyStar}
                            />
                            <StarsImage
                                source={review.stars > 3 ? fillStar : emptyStar}
                            />
                            <StarsImage
                                source={review.stars > 4 ? fillStar : emptyStar}
                            />
                        </StarsView>
                    </View>
                </JoberView>
                <ReviewLabel>{props.review.text}</ReviewLabel>
                {review.response && (
                    <View>
                        <Text
                            style={{ marginBottom: 14 }}
                            type="semibold"
                            textColor={greenJobinColor}
                        >
                            Respuesta del Jober
                        </Text>
                        <ReviewLabel>{review.response}</ReviewLabel>
                    </View>
                )}
            </ReviewView>
        </JobCell>
    );
};

export default JobCloseCell;
