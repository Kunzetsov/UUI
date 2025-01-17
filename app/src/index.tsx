import * as React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ApiCallOptions, ContextProvider, CommonContexts, UuiContexts } from '@epam/uui';
import { Snackbar, Modals } from '@epam/uui-components';
import { skinContext as promoSkinContext } from '@epam/promo';
import { AmplitudeListener } from "./analyticsEvents";
import { svc } from './services';
import App from './App';
import { getApi, TApi } from './data';
import '@epam/internal/styles.css';
import './index.scss';
import './themes/index.css';
import * as css from './index.scss';

const history = createBrowserHistory();

export class UuiEnhancedApp extends React.Component {

    onInitCompleted = (context: CommonContexts<TApi, UuiContexts>, ampCode: string) => {
        Object.assign(svc, context);
        const listener = new AmplitudeListener(ampCode);
        context.uuiAnalytics.addListener(listener);
    }

    renderSnow = () => {
        const snow = [];

        for (let index = 0; index < 300; index++) {
            snow.push(<div className={ css.christmasSnow}/>)
        }

        return <div className={ css.christmasBox }>{ snow }</div>;
    }

    render() {
        const isProduction = /uui.epam.com/.test(location.hostname);
        const ampCode = isProduction ? '94e0dbdbd106e5b208a33e72b58a1345' : 'b2260a6d42a038e9f9e3863f67042cc1';

        return (
            <ContextProvider<TApi, UuiContexts>
                apiDefinition={ (processRequest) =>
                    getApi((url: string, method: string, data?: any, options?: ApiCallOptions) =>
                        processRequest(url, method, data, { fetchOptions: { credentials: undefined }, ...options  }))
                }
                onInitCompleted={ (context) => this.onInitCompleted(context, ampCode) }
                history={ history }
                gaCode='UA-132675234-1'
                skinContext={ promoSkinContext }
                enableLegacyContext={ false }
            >
                <App />
                { this.renderSnow() }
                <Snackbar />
                <Modals />
            </ContextProvider>
        );
    }
}

render(
    <React.StrictMode>
        <Router history={ history }>
            <UuiEnhancedApp />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
