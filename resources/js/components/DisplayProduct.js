import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ProductRow from './ProductRow';

class DisplayProduct extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {value: '', items: ''};
        this.createGrid = this.createGrid.bind(this);

    }
    createGrid() {
        this.setState({items:[]});
        console.log('grid')
        axios.get('products')
            .then(response => {
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    componentDidMount() {
             this.createGrid();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    tabRow() {
        if (this.state.items instanceof Array) {
              let refreshGrid = this.createGrid;
            return this.state.items.map(function (object, i) {
                return <ProductRow obj={object} key={i} refreshGrid={refreshGrid}/>;
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
