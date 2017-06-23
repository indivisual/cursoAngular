import { initialState } from "../state/main.state";
import * as ACTIONS from "../actions/main.actions";
export var mainStoreReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ACTIONS.SEND_MESSAGE: {
            state.messages.push(action.payload);
            return state;
        }
        case ACTIONS.GET_MESSAGES: {
            return {
                messages: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
//# sourceMappingURL=main.reducer.js.map