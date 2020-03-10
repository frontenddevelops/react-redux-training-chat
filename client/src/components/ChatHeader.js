import React, { Component } from 'react';

export default class ChatHeader extends Component {
    render() {
        return (
            <div className="chat-header clearfix">
                <div className="chat-about">
                    <div className="chat-with">Greatest chat ever!</div>
                </div>
                <i className="fa fa-star"/>
            </div>
        );
    }
}
