import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const persistedStore= persistStore(store);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
