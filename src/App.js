import React from 'react';
import {Button} from 'antd-mobile';
import {addGun, removeGun} from "./index.redux";

class App extends React.Component {
    render() {
        const store = this.props.store;
        let num = store.getState();
        return (
            <div>
                <h1>现在有武器{num}把</h1>
                <Button type={`primary`} onClick={() => store.dispatch(addGun())}>申请武器</Button>
                <Button type={`primary`} onClick={() => store.dispatch(removeGun())}>减少武器</Button>
            </div>
        );
    }
}

export default App;