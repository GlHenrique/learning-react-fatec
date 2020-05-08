import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Pagina1 from './pages/page1/';
import Pagina2 from './pages/page2';
import App from './App';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/pagina1" component={Pagina1} />
            <Route exact path="/pagina2" component={Pagina2} />
        </BrowserRouter>
    )
}