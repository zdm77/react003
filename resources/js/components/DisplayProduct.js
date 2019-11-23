import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ProductRow from './ProductRow';

class DisplayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
    }

    componentDidMount() {

        axios.get('products')
            .then(response => {
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <ProductRow obj={object} key={i}/>;
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link className="btn btn-primary" to="/add-product">Создать</Link>
                    <br/>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <td>Наименование</td>
                            <td>Цена</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DisplayProduct;
