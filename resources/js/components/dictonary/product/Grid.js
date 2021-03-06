import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Row from './Row';
import TopMenu from '../../TopMenu';
/**
 * Таблица отображения товаров
 */
class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.createGrid = this.createGrid.bind(this);
    }

    createGrid() {
        this.setState({items: []});
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

    tabRow() {
        if (this.state.items instanceof Array) {
            let refreshGrid = this.createGrid;
            return this.state.items.map(function (object, i) {
                return <Row obj={object} key={i} refreshGrid={refreshGrid}/>;
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
<TopMenu/>
                    <Link className="btn btn-outline-secondary new" to="/add-product">Создать</Link>
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

export default Grid;
