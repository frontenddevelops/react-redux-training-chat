import React, { Component } from 'react';

export default class MessageItem extends Component {
    render() {
        const {author, text, time, color} = this.props;
        const date = new Date(time);
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{
                        date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
                    }</span> &nbsp; &nbsp;
                    <span className="message-data-name">{author} </span>
                    <i className="fa fa-circle me" style={{color: color}}/>
                </div>
                <div style={{background: color}} className="message other-message float-right">
                    {text}
                </div>
            </li>
        );
    }
}
