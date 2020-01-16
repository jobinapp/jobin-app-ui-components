export const reducer = (state, action) => {
    switch (action.type) {
        case "NEW_CHAT_MESSAGE":
            return {
                liveQueryMessage: action.liveQueryMessage,
                chatBadge: action.chatBadge
            };
        case "NEW_CHAT_BADGE":
            return {
                chatBadge: action.chatBadge
            };
    }
    return state;
};
