import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

import BottomModal from "../components/modals/BottomModal";
import CustomText from "../components/CustomText";
import { softblackColor, deactivatedGrayColor } from "../constants/color";
import { marginLeft, marginRight } from "../constants/mainConstants";

const Container = styled.View`
    ${props => props.style};
`;

const ButtonView = styled.TouchableOpacity`
    width: 100%;
    height: 64px;
    padding-left: ${marginLeft};
    padding-right: ${marginRight};
    border-bottom-width: 1px;
    border-bottom-color: ${deactivatedGrayColor};
    align-items: center;
    flex-direction: row;
`;

const ButtonImage = styled.Image.attrs(props => ({
    resizeMode: "contain"
}))`
    width: 24px;
    height: 24px;
`;

const ButtonText = styled(CustomText)`
    margin-left: 16px;
`;

const SelectView = styled.View`
    width: 100%;
    height: 64px;
    margin-top: 20px;
    padding-right: ${marginRight};
    padding-left: ${marginLeft};
    flex-direction: row;
    ${props => props.style};
`;

const SelectTouchable = styled.TouchableOpacity`
    height: 64px;
    width: 80px;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: row;
    align-items: center;
    border-bottom-color: ${softblackColor};
    border-bottom-width: 1px;
`;

const SourceImage = styled.Image.attrs(props => ({
    resizeMode: "contain"
}))`
    width: 20px;
    height: 20px;
`;

const PrefixTextView = styled.View`
    margin-left: 4px;
    text-align: center;
`;

const Select = props => {
    // array of Objects received by props
    /* 
    [
        {
            key: // defines the order
            prefix: // prefix of the text
            value: // logic value
            source: // if there is a image
            selected // whether the element is selected or not
        },
        ...
    ]
    */
    const prefixArray = props.prefixArray || [
        {
            key: "1",
            prefix: "+34",
            value: "España",
            source: require("../assets/images/registro/flags/spainFlag.png"),
            selected: true
        },
        {
            key: "2",
            prefix: "+33",
            value: "Francia",
            source: require("../assets/images/registro/flags/franceFlag.png"),
            selected: false
        },
        {
            key: "3",
            prefix: "+351",
            value: "Portugal",
            source: require("../assets/images/registro/flags/portugalFlag.png"),
            selected: false
        }
    ];
    const [prefix, setPrefix] = useState(
        prefixArray && prefixArray.length > 0
            ? prefixArray.filter(item => item.selected)[0].prefix
            : ""
    );
    const [value, setValue] = useState(
        prefixArray && prefixArray.length > 0
            ? prefixArray.filter(item => item.selected)[0].value
            : ""
    );
    const [source, setSource] = useState(
        prefixArray && prefixArray.length > 0
            ? prefixArray.filter(item => item.selected)[0].source
                ? prefixArray.filter(item => item.selected)[0].source
                : ""
            : ""
    );
    const [modalVisible, setModalVisible] = useState(false);

    const itemSelected = item => {
        setPrefix(item.prefix);
        setValue(item.value);
        setSource(item.source);
        setModalVisible(false);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const renderItem = ({ item }) => {
        return (
            <ButtonView
                // onPress={props.cameraAction}
                onPress={() => itemSelected(item)}
            >
                <ButtonImage source={item.source} />
                <ButtonText type="semibold" fontSize={17}>
                    {item.prefix}
                </ButtonText>
                <CustomText style={{ marginLeft: 8 }} fontSize={17}>
                    {item.value}
                </CustomText>
            </ButtonView>
        );
    };

    return (
        <Container>
            <SelectView>
                <SelectTouchable onPress={showModal}>
                    <SourceImage source={source} />
                    <PrefixTextView>
                        <CustomText fontSize={20}>{prefix}</CustomText>
                    </PrefixTextView>
                </SelectTouchable>
            </SelectView>
            <BottomModal
                isVisible={modalVisible}
                onBackdropPress={props.closeAction}
            >
                <FlatList data={prefixArray} renderItem={renderItem} />
            </BottomModal>
        </Container>
    );
};

export default Select;
