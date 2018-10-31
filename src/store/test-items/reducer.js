import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    testItems: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEST_ITEMS_FETCHED:
            return state.merge({
                testItems: action.testItems
            });
        default:
            return state;
    }
}