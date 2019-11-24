import React from 'react';
import {Link} from "react-router-dom";
import DeleteButton from '@material-ui/icons/Delete'
import EditButton from '@material-ui/icons/Edit'

/**
 * Вложенный компонент для работы с таблиецей
 * Отрисовка полей, экшены
 */
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Удаление записи из грида
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        let uri = `products/${this.props.obj.id}`;

        axios.delete(uri).then((response) => {
            //перерисовать родительский грид
            this.props.refreshGrid();
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
                <td className="action">
                    {/*перенаправляем на редактирование */}
                    <Link to={"edit-product/" + this.props.obj.id} className="btn">
                        <EditButton></EditButton>
                    </Link>
                </td>
                <td className="action">
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-light">
                            <DeleteButton></DeleteButton>
                        </button>
                    </form>
                </td>
            </tr>
        );
    }
}

export default Row;
