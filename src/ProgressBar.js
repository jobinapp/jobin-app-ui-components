import React from "react";
import styled from "styled-components";

import { greenJobinColor, lineColor } from "../constants/color";

const ProgressView = styled.View`
    height: ${props => (props.height ? props.height : "4px")};
    width: ${props => (props.progress ? props.progress + "%" : 0)};
    background-color: ${props =>
        props.progressTintColor ? props.progressTintColor : greenJobinColor};
    border-radius: ${props => (props.height ? props.height / 2 : 2)};
`;

const BarView = styled.View`
    flex: 1;
    height: ${props => (props.height ? props.height : "4px")};
    background-color: ${props =>
        props.barBackgroundColor ? props.barBackgroundColor : lineColor};
    border-radius: ${props => (props.height ? props.height / 2 : 2)};
`;

const ProgressBar = props => {
    return (
        <BarView>
            <ProgressView />
        </BarView>
    );
};

export default ProgressBar;
