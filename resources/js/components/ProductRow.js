import React from 'react';
import { navigate,useRedirect } from "hookrouter";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let uri = `products/${this.props.obj.id}`;
        axios.delete(uri).then((response) => {
            useRedirect('/user', '/dashboard');
           // navigate('/display-product/');
        });

    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-danger"/>
                    </form>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
