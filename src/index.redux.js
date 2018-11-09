import React from 'react';

const ADD_GUN = "加武器";
const REMOVE_GUN = "减武器";

//reducer：通过老的state和action，生成新的state
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return ++state;//state++会在return之后执行
        case REMOVE_GUN:
            return --state;
        default:
            return 10;
    }
}

//action creator 创建action的方法
export function addGun() {
    return {type: ADD_GUN};
}

export function removeGun() {
    return {type: REMOVE_GUN};
}