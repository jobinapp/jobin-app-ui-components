import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import CustomText from './CustomText';
import {lineColor, greenJobinColor} from '../constants/color'
import CallToAction from "./buttons/CallToAction";

const StepView = styled.View`
    flex-direction: row;
    opacity: ${props => props.disabled ? 0.6 : 1};
`
const StepImage = styled.Image`
    height: 24px;
    width: 24px;
    margin-right: 16px;
    ${props => props.style}
`
const Line = styled.View`
    flex: 1;
    width: 1px;
    margin-left: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: ${props => props.disabled ? lineColor : greenJobinColor};
`
const BodyView = styled.View`
    margin-top: 12px;
    margin-bottom: 16px;
`

const ProgressView = props => {

    const state = props.job.get("State");
    const step = state === "draft" ? 0
        : (state === "pending" || state === "abierto") ? 1
        : state === "full" ? 2
        : (state === "signaturePending" || state === "finalizado") ? 3
        :  state === "review" ? 4 : 0
    const disableImage = require("../assets/images/common/buttonDisabled.png");
    const activeImage = require("../assets/images/common/checkBlue.png");

    return (
        <View>
            <StepView disabled={step >= 0 ? false : true}>
                <View>
                    <StepImage
                        source={step >= 1 ? activeImage : disableImage}
                        style={step === 0 && {tintColor: greenJobinColor}}
                    />
                    <Line disabled={step >= 1 ? false : true}/>
                </View>
                <View>
                    <CustomText type="semibold" fontSize={18}>
                        Servicio contratado
                    </CustomText>
                    <BodyView>
                        {step === 0 &&
                            <CustomText >
                                Para contratar el servicio debes finalizar el proceso de pago
                            </CustomText>
                        }
                        {step === 0 &&
                            <CallToAction
                                style={{marginTop: 8}}
                                buttonText={"Realizar pago"}
                                onPress={props.goToPayment ? props.goToPayment : null}
                            />
                        }
                    </BodyView>
                </View>
            </StepView>
            <StepView disabled={step >= 1 ? false : true}>
                <View>
                    <StepImage
                        source={step >= 2 ? activeImage : disableImage}
                        style={step === 1 && {tintColor: greenJobinColor}}
                    />
                    <Line disabled={step >= 2 ? false : true}/>
                </View>
                <View>
                    <CustomText type="semibold" fontSize={18}>
                        Jober asignado
                    </CustomText>
                    <BodyView>
                        {step === 1 &&
                            <CustomText >
                                En proceso
                            </CustomText>
                        }
                    </BodyView>
                </View>
            </StepView>
            <StepView disabled={step >= 2 ? false : true}>
                <View>
                    <StepImage
                        source={step >= 3 ? activeImage : disableImage}
                        style={step === 2 && {tintColor: greenJobinColor}}
                    />
                    <Line disabled={step >= 3 ? false : true}/>
                </View>
                <View>
                    <CustomText type="semibold" fontSize={18}>
                        Servicio finalizado
                    </CustomText>
                    <BodyView>
                        {step === 2 &&
                            <CustomText >
                                En proceso
                            </CustomText>
                        }
                    </BodyView>
                </View>
            </StepView>
            <StepView disabled={step >= 3 ? false : true}>
                <View>
                    <StepImage
                        source={step === 4 ? activeImage : disableImage}
                        style={step === 3 && {tintColor: greenJobinColor}}
                    />
                </View>
                <View>
                    <CustomText type="semibold" fontSize={18}>
                        Servicio valorado
                    </CustomText>
                    <BodyView>
                        {(step === 3 && state === "finalizado") &&
                            <CallToAction
                                buttonText="Escribir valoración"
                                onPress={props.goToReview ? props.goToReview : null}
                            />
                        }
                    </BodyView>
                </View>
            </StepView>
        </View>
    );
};
export default ProgressView;
