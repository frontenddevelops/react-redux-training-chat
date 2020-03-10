import React, { Component } from 'react';
import ws from 'utils/ws';

export default class ChatControl extends Component {

    sendMessage = (e) => {
        e.preventDefault();
        ws.sendFromGui(this.textarea.value);
        this.textarea.value = '';
    };
    textareaKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (!e.target.value.length) return;
            this.sendMessage(e);
        }
    };

    render() {
        return (
            <div className="chat-message clearfix">
                        <textarea onKeyDown={this.textareaKeyDown} placeholder="Type your message"
                                  ref={(textarea) => this.textarea = textarea}
                                  rows="4"/>
                <button onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}
