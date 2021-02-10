import axios from "axios";

const BASE_URL : string = 'https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards';

export const getCardsAPI = async (page : number) => {
    const response = await axios.get(`${BASE_URL}/page_${page}.json`);
    return response.data;
}

export interface Card {
    id : string;
    image_url : string;
    nickname : string;
    profile_image_url : string;
    description : string;
}