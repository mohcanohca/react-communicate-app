import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import {counter} from "./index.redux";

//基于reducer（状态处理器）创建store（状态管理器）
const store = createStore(counter);


function render() {
    ReactDOM.render(<App store={store}/>,
        document.getElementById('root')
    )
}

render();

//订阅render，只要store的状态发生变化，Index.render会自动执行
store.subscribe(render);

