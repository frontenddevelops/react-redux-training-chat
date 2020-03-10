import React, { Component } from 'react';
import ws from 'utils/ws';

export default (ChildComponent) => {
    return class authHOC extends Component {
        auth() {
            if (localStorage.getItem('auth')) return true;

            let name = prompt('Enter your name: ');
            if (!name || !name.trim().length) {
                return false;
            }
            localStorage.setItem('auth', name);
            ws.emit(name);
            return true;
        }

        noName() {
            return <div className={'noname-wrap'}>
                You didn't enter your name :C
                <br/>
                <button onClick={() => {
                    location.reload();
                }}>try again maybe?
                </button>
            </div>;
        }

        render() {
            return (
                this.auth() ? <ChildComponent/> : this.noName()
            );
        }
    };
}
