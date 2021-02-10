import {CardsAction, CardsState} from "./types";
import {createReducer} from "typesafe-actions";
import { GET_CARDS, GET_CARDS_FAILURE, GET_CARDS_SUCCESS } from "./actions";

const initialState : CardsState = {
    cards : [],
    scrapCards : [],
    error : null,
    filter : {
        onlyScrap : false,
    },
    page : 1,
    isLastPage : false,
}

const cards = createReducer<CardsState, CardsAction>(initialState, {
    [GET_CARDS] : (state) => ({
        ...state,
        error : null
    }),
    [GET_CARDS_SUCCESS] : (state, {payload : cards}) => ({
        ...state,
        cards : state.cards.concat(cards),
        error : null,
        isLastPage: cards.length === 0
    }),
    [GET_CARDS_FAILURE] : (state, { payload : error }) => ({
        ...state,
        error : error
    })
})

export default cards;