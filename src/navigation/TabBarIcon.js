import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { useStateValue } from "../../state/context";
import { redJobinColor } from "../../constants/color";

const Icon = styled.Image.attrs(props => ({
    tintColor: props.tintColor
}))`
    height: 24px;
    width: 24px;
`;

const TabBarIcon = props => {
    const [data] = useStateValue();

    let iconSource;
    if (props.routeName === "HomeView")
        iconSource = require("../../../assets/images/tabbar/homeTabBar.png");
    else if (props.routeName === "MyTasksView")
        iconSource = require("../../../assets/images/tabbar/tasksTabBar.png");
    else if (props.routeName === "MagazineView")
        iconSource = require("../../../assets/images/tabbar/magazineTabBar.png");
    else if (props.routeName === "ChatListView")
        iconSource = require("../../../assets/images/tabbar/chatTabBar.png");
    else if (props.routeName === "SettingsView")
        iconSource = require("../../../assets/images/tabbar/profileTabBar.png");

    return (
        <View>
            <Icon tintColor={props.tintColor} source={iconSource} />
            <View
                style={{
                    opacity: data.chatBadge ? 1 : 0,
                    position: "absolute",
                    right: -6,
                    top: -3,
                    backgroundColor: redJobinColor,
                    borderRadius: 7,
                    width: 14,
                    height: 14,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </View>
    );
};

export default TabBarIcon;
