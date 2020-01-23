import React, {useState} from "react";
import styled from "styled-components";

import CustomText from "./CustomText";

import { whiteColor } from "../constants/color";

const Container = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${whiteColor};
    ${props => props.style};
`;
const TextView = styled.View`
    flex: 1;
    margin-right: 24px;
    margin-left: 12px;
`;

const CheckImage = styled.Image`
    width: 24px;
    height: 24px;
`;

const CheckBox = props => {

    const [selected, setSelected] = useState(props.selected ? props.selected : false);

    const onChange = () =>{
        setSelected(!selected);
        props.onChange ? props.onChange(!selected) : null;
    }

    return (
        <Container style={props.style} onPress={onChange}>
            <CheckImage
                source={
                    selected
                        ? require("../assets/images/common/checkboxOn.png")
                        : require("../assets/images/common/checkboxOff.png")
                }
            />
            <TextView selected={selected}>
                <CustomText>{props.text}</CustomText>
            </TextView>
        </Container>
    );
};
export default CheckBox;
