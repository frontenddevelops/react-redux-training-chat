import { connectedNewUser, disconnectedUser, receiveNewMessage } from '../actions';
import store from 'store';

export default ((wsUrl) => {
    let ws;
    const {dispatch} = store;

    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('WS OPEN!');
    };

    ws.onmessage = (message) => {
        const messageObj = JSON.parse(message.data);

        switch (messageObj.type) {
            case 'connected_new_user':
                dispatch(connectedNewUser(messageObj));
                break;
            case 'disconnected_user':
                dispatch(disconnectedUser(messageObj.userID));
                break;
            case 'message':
                console.log('message_sent_from_gui 0', messageObj);

                dispatch(receiveNewMessage(messageObj.data));
                break;
            default:
                break;
        }
    };

    const sendFromGui = (message) => {
        ws.send(message);
    };

    let countReconnect = 0;
    const emit = (message) => {
        if (countReconnect > 5) return;
        if (ws.readyState === ws.CONNECTING) {
            setTimeout(() => {
                emit(message);
                countReconnect++;
            }, 500);
            return;
        }
        ws.send(message);
        countReconnect = 0;
    };

    return {emit, sendFromGui};

})('ws://localhost:3000');
