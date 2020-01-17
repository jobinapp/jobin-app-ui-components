import React, {
    useEffect,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle
} from "react";
import styled from "styled-components";
import { Animated } from "react-native";

import {
    whiteColor,
    softblackColor,
    redJobinColor,
    greenJobinColor,
    deactivatedGrayColor
} from "../constants/color";
import { mainSemibold } from "../constants/fonts";

import CustomText from "./CustomText";

const BackgroundView = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${whiteColor};
`;

const SearchView = styled.View.attrs(props => ({
    shadowColor: "rgb(29, 27, 26)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
}))`
    flex: 1;
    flex-direction: row;
    height: 48px;
    background-color: ${whiteColor};
    border-radius: 4px;
    align-items: center;
    border-color: rgba(29, 27, 26, 0.16);
    border-width: 1px;
`;

const SearchImage = styled.Image.attrs(props => ({
    resizeMode: "cover",
    tintColor: deactivatedGrayColor
}))`
    height: 16px;
    width: 16px;
    margin-left: 12px;
    margin-right: 8px;
`;

const SearchInput = styled.TextInput`
    flex: 1;
    margin-right: 12px;
    color: ${softblackColor};
    font-size: 15px;
    font-family: ${mainSemibold};
`;

const CancelButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    height: 40px;
`;

const SearchBar = forwardRef((props, ref) => {
    const [searchText, setSearchText] = useState(null);
    const [timer, setTimer] = useState(0);
    const width = new Animated.Value(0);
    const inputRef = useRef();

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
        reset: () => {
            inputRef.current.blur();
            Animated.timing(width, {
                toValue: 0,
                duration: 200
            }).start();
            setSearchText(null);
        },

        isFocused: () => {
            return inputRef.current.isFocused();
        }
    }));

    const onChangeText = text => {
        setSearchText(text);

        if (timer) clearTimeout(timer);
        setTimer(
            setTimeout(() => {
                search();
            }, 300)
        );
    };

    const search = () => {
        props.search(searchText);
    };

    const onFocus = () => {
        Animated.timing(width, {
            toValue: 80,
            duration: 200
        }).start(() => {
            if ("onFocus" in props) props.onFocus();
        });
    };

    const onBlur = () => {
        Animated.timing(width, {
            toValue: 0,
            duration: 200
        }).start(() => {
            inputRef.current.clear();
            if ("onBlur" in props) props.onBlur();
        });
    };

    // ANIMATION METHODS
    useEffect(() => {
        // unmount
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <BackgroundView>
            <SearchView>
                <SearchImage
                    source={require("../assets/images/common/searchIcon.png")}
                />
                <SearchInput
                    ref={inputRef}
                    value={searchText}
                    placeholder={
                        props.placeholder ? props.placeholder : "Buscar"
                    }
                    placeholderTextColor={deactivatedGrayColor}
                    returnKeyType="search"
                    onSubmitEditing={search}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    selectionColor={redJobinColor}
                    autoCorrect={false}
                />
            </SearchView>
            <Animated.View style={{ width: width }}>
                <CancelButton onPress={() => inputRef.current.blur()}>
                    <CustomText type="semibold" textColor={greenJobinColor}>
                        Cancelar
                    </CustomText>
                </CancelButton>
            </Animated.View>
        </BackgroundView>
    );
});
export default SearchBar;
