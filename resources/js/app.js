require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopMenu from './components/TopMenu';
import Product from './components/dictonary/product/Product';
import Grid from './components/dictonary/product/Grid';
import About from './components/About';

render(
    /**
     *  Регистрируем маршруты
     */
    <Router>
        <div>
            <Route path='/' component={TopMenu}/>
            <Route path='/about' component={About}/>
            <Route path='/add-product' exact component={Product}/>
            <Route path="/display-product" component={Grid}/>
            <Route path="/edit-product/:id" component={Product}/>
        </div>
    </Router>,
    document.getElementById('root')
);
