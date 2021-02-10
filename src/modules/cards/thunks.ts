import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getCardsAPI } from "../../api/getCardsAPI";
import { getCardsAsync } from "./actions";

export function getCardsThunk(page : number) : ThunkAction<void, RootState, null, any> {
    return async dispatch => {
        const { request, success, failure } = getCardsAsync;
        dispatch(request());
        try {
            const pages = await getCardsAPI(page);
            dispatch(success(pages))
        } catch (e) {
            dispatch(failure(e));
        }
    };
}