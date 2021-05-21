import {GET_INFO} from "./actionTypes";

export function asyncGetPhoto(data) {
    return {
        type: GET_INFO,
        payload: {
            title: data.title,
            img: data.url,
            description: data.explanation
        }
    }
}