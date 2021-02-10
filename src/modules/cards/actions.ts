// Actions
import { createAsyncAction } from "typesafe-actions";
import {AxiosError} from "axios";
import { Card } from "../../api/getCardsAPI";

export const GET_CARDS = 'cards/GET_CARDS' as const;
export const GET_CARDS_SUCCESS = 'cards/GET_CARDS_SUCCESS' as const;
export const GET_CARDS_FAILURE = 'cards/GET_CARDS_FAILURE' as const;

// Action Create Function
export const getCardsAsync = createAsyncAction(
    GET_CARDS,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
)<undefined, Card[], AxiosError>();