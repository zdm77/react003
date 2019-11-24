import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import SaveButton from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button';
import TopMenu from '../../TopMenu';

/**
 * Форма создания/редактирования товара
 * @property this.props.match.params.id пришедший ID для режима редактирования
 */
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', price: ''};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //если пришел айдишник, значит в режиме редактирования
        if (this.props.match.params.id) {
            axios.get(`/products/${this.props.match.params.id}/edit`)
                .then(response => {
                    this.setState({name: response.data.name, price: response.data.price});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    handleChange1(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            price: e.target.value
        })
    }

    saveRecord(uri, products) {

    }

    handleSubmit(e) {
        e.preventDefault();
        const products = {
            name: this.state.name,
            price: this.state.price
        }
        let uri;
        if (this.props.match.params.id) { //если пришел айдишник, значит в режиме редактирования
            uri = '/products/' + this.props.match.params.id;
        } else { //иначе вставка
            uri = 'products';
        }
        axios.post(uri, products).then((response) => {
                this.props.history.push('/display-product');
            },
            (error) => {
                alert('Ошибка сохранения, проверьте правильность введенных данных.');

            });


    }

    render() {
        return (
            <div className="container">
                <TopMenu/>
                <h1></h1>
                <Link to="/display-product" className="btn btn-outline-secondary">Назад</Link>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Наименование:</label>
                                <input type="text"
                                       className="form-control"
                                       onChange={this.handleChange1}
                                       value={this.state.name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Цена:</label>
                                <input type="text"
                                       className="form-control col-md-6"
                                       onChange={this.handleChange2}
                                       value={this.state.price}
                                />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <Button variant="outlined" color="primary" type="submit" className="btn btn-light">
                            <SaveButton></SaveButton>
                            Сохранить
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Product;
