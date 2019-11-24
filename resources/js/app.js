require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';
import EditProduct from './components/EditProduct';

render(
    <Router>
        <div>
            <Route path='/' component={Master}/>
            <Route path='/add-product' exact component={CreateProduct}/>
            <Route path="/display-product" component={DisplayProduct}/>
            <Route path="/edit-product/:id" component={CreateProduct} />
        </div>
    </Router>,


    document.getElementById('example')
);
