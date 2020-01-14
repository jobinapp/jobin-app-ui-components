import React, {
    useEffect,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle
} from "react";
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Animated
} from "react-native";

import {
    whiteColor,
    softblackColor,
    redJobinColor,
    greenJobinColor,
    deactivatedGrayColor
} from "../constants/color";
import {mainSemibold} from "../constants/fonts"

import CustomText from "./CustomText";

const SearchBar = forwardRef((props, ref) => {

    const [searchText, setSearchText] = useState(null);
    const [showCancel, setShowCancel] = useState(false);
    const [timer, setTimer] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const animation = new Animated.Value(0);
    const inputRef = useRef();

    const styles = StyleSheet.create({
        backgroundView: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: whiteColor,
            ...props.backgroundStyle
        },
        searchView: {
            flex: 1,
            flexDirection: "row",
            height: 48,
            backgroundColor: whiteColor,
            borderRadius: 4,
            alignItems: "center",
            borderColor: 'rgba(29, 27, 26, 0.16)',
            borderWidth: 1,
            shadowColor: "rgb(29, 27, 26)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.10,
            shadowRadius: 4,
            ...props.barStyle
        },
        searchImage: {
            height: 16,
            width: 16,
            marginLeft: 12,
            marginRight: 8,
            resizeMode: "cover",
            tintColor: deactivatedGrayColor
        },
        searchInput: {
            flex: 1,
            marginRight: 12,
            color: softblackColor,
            fontSize: 15,
            fontFamily: mainSemibold
        },
        cancelButton: {
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 8,
            height: 40
        }
    });

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
        reset: () => {
            inputRef.current.blur();
            Animated.timing(animation, {
                toValue: 0,
                duration: 200
            }).start();
            setExpanded(false);
            setShowCancel(false);
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

    const cancelAction = () => {
        if ("cancelAction" in props) props.cancelAction();
        toggle();
        setSearchText(null);
        inputRef.current.blur();
    };

    const search = () => {
        props.search(searchText);
    };

    const onFocus = () => {
        if ("onFocus" in props) props.onFocus();
        toggle();
    };

    const onBlur = () => {
        if ("onBlur" in props) props.onBlur();
        inputRef.current.clear();
    };

    // ANIMATION METHODS
    const toggle = () => {
        Animated.timing(animation, {
            toValue: expanded ? 0 : 80,
            duration: 200
        }).start();
        setExpanded(!expanded);
        setShowCancel(!showCancel);
    };

    useEffect(() => {
        // unmount
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <View style={styles.backgroundView}>
            <View style={styles.searchView}>
                <Image
                    style={styles.searchImage}
                    source={require("../../assets/images/common/searchIcon.png")}
                />
                <TextInput
                    ref={inputRef}
                    style={styles.searchInput}
                    value={searchText}
                    placeholder={
                        props.placeholder ? props.placeholder : "Buscar"
                    }
                    placeholderTextColor={"rgba(29, 27, 26, 0.64)"}
                    returnKeyType="search"
                    onSubmitEditing={search}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    selectionColor={redJobinColor}
                    autoCorrect={false}
                />
            </View>
            <Animated.View style={{ width: animation }}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={cancelAction}
                >
                    <CustomText type="semibold" textColor={greenJobinColor}>
                        Cancelar
                    </CustomText>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
});
export default SearchBar;
