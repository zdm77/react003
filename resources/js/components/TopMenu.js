import React, {Component} from 'react';
import {Link} from "react-router-dom";

/**
 * Верхнее, главное меню
 */
class TopMenu extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul class="nav navbar-nav">
                        <li class="navbar-brand"><Link to={'/about'}>О приложении</Link></li>
                        <li class="navbar-brand"><Link to={'/display-product'}>Каталог</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopMenu;
