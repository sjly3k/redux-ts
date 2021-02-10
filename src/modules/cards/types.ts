import * as actions from "./actions"
import { ActionType } from "typesafe-actions";
import { Card } from "../../api/getCardsAPI";

export type CardsAction = ActionType<typeof actions>;

export type CardsState = {
    cards : Card[];
    scrapCards : Card[];
    error : Error | null;
    filter : {
        onlyScrap : boolean;
    };
    page : number;
    isLastPage : boolean;
}