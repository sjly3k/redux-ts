import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../modules";
import {getCardsThunk} from "../modules/cards";

function CardsLoader() {
    const data = useSelector((state : RootState) => state.cards);
    const dispatch = useDispatch();

    console.log(data)
    useEffect(() => {
        dispatch(getCardsThunk(data.page));
    }, [])
    return (
        <React.Fragment></React.Fragment>
    )
};

export default CardsLoader;