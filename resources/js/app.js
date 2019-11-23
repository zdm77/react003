require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
// import { Router, Route} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';

render(
    <Router>
        <div>
            <Route path='/' component={Master}/>
            <Route path='/add-product' exact component={CreateProduct}/>
            <Route path="/display-product" component={DisplayProduct}/>
        </div>
    </Router>,


    document.getElementById('example')
);
