import React, {Component} from 'react';
import {Link} from "react-router-dom";


class TopMenu extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light" >
              <ul class="nav navbar-nav">
                  <li class="navbar-brand"><Link to={'/'}>Home</Link> </li>
                  <li class="navbar-brand"> <Link to={'/display-product'}>Каталог</Link> </li>
              </ul>
            </div>
        )
    }
}

export default TopMenu;
