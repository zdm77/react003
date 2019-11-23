
require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
// import { Router, Route} from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';

render(
    <Router>
        <div>
            <Link to={'/'}>Home</Link>
            <Route path='/' component={Master}/>
            <Link to={'/add'}>CreateProduct</Link>
            <Route path='/add' exact component={CreateProduct}/>
        </div>
    </Router>,


    document.getElementById('example')
);
