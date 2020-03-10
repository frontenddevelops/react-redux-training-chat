import React from 'react';
import { render } from 'react-dom';
import 'assets/styles/styles.scss';
import App from 'containers/App';
import { AppContainer } from 'react-hot-loader';
import ws from 'utils/ws';

window.ws = ws;

localStorage.removeItem('auth');

const renderApp = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.querySelector('#mount_place')
    );
};


renderApp(App);

if (module.hot) {
    module.hot.accept('containers/App', () => renderApp(App));
}
