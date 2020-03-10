import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ChatWrap from './ChatWrap';

window.store = store;
export default class App extends Component {
    render() {
        return (
            <Provider store={store} key={module.hot ? Date.now() : store}>
                <div className="container clearfix">
                    <ChatWrap/>
                </div>
            </Provider>
        );
    }
}
