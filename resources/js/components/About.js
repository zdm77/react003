import React from 'react';
import TopMenu from './TopMenu';
import axios from "axios";

/**
 * О приложении
 */
class About extends React.Component {


    render() {
        return (

            <div>
                <TopMenu></TopMenu>
                <div className="container">
                    <div className="align-text-center">
                        <h4>
                            Демонстраций проект.
                        </h4>
                    </div>
                    <p>
                        Приложение реализует основные действия по работе с базой данных (просмотр, создание,
                        редактирование, удаление)
                        на примере одного справочника - Товары в меню Каталог.<br/>
                        За основу взята СУБД PostgreSQL. Взаимодействие с БД происходит по средствам Backend,
                        отображение и навигация по средствам Frontend.
                    </p>
                    <p>
                        <div className="align-text-center">
                            <h5> Backend - Framework Laravel 5.8 :</h5>
                        </div>
                        <i className="bold"> Особенности и структура: </i><br/>
                        <ul>
                            <li><i className="bold"> Маршрутизация ( routes\web.php)</i></li>
                            <ul>
                                <li><i className="bold">Навигация:</i> <br/>
                                    Посколько дальнейшая навигация осуществляется средствами Frontend -ReactJS,
                                    навигационный маршрут у backend только один - корневой вход:
                                    Route::get('/', .... возращающий blade шаблон <i
                                        className="bold"> resources\views\index.blade.php</i> , в котором находится
                                    root элемент для дальнешей связи с React.
                                </li>
                                <li><i className="bold">Отображение и CRUD: </i><br/>
                                    Laravel позволяет создать один маршрут на все основные действия, так называемый
                                    ресурсный маршрут.<br/>
                                    <i className="bold"> Route::resource('products', 'ProductController');</i><br/>
                                    Первым параметром принимается имя маршрута, вторым - контроллер. <br/>
                                    Есть так же возможность уточнять действия вручную.<br/>
                                    <i className="bold"> Route::post('products/id' ,
                                        'ProductController@update');</i><br/>
                                    Принимается маршрут с параметром и отправляется на контроллер в метод update.
                                </li>
                            </ul>
                            <li><i className="bold">Модель:</i> <br/>
                                <i className="bold">app\Model\Dictonary\Product.php </i> <br/>
                                Модель Product - одноименная таблица базы данных с заглавной буквы.
                                Существует возможность указания и неодноименной таблицы, в случае несоответсвия логики
                                Laravel.
                            </li>
                            <li><i className="bold">Контроллер:</i> <br/>
                                <i className="bold">app\Http\Controllers\ProductController.php</i> <br/>
                                Контроллер реализует все основные методы:<br/>
                               - index() - Отображение списка<br/>
                               - store(Request $request) - Сохранение новой позиции<br/>
                               - edit($id) - При редактировании, возвращаяет сущность со всеми данными<br/>
                               - update(Request $request, $id) - Обновление<br/>
                               - destroy($id) - Удаление<br/>
                            </li>
                        </ul>
                        <div className="align-text-center">
                            <h5> Frontend - RectJS :</h5>
                        </div>
                        <ul>
                            <li>Начальная загрузка + Маршрутизация - <i className="bold">resources\js\app.js</i> <br/>
                                В последсвии, после сборки -npm run соберет через в webpack Laravel, всё в
                                <i className="bold"> public\js\app.js</i>
                            </li>
                            <li>Компоненты: </li>
                            - resources\js\components\TopMenu.js -верхнее меню<br/>
                            - resources\js\components\About.js - текущая страница<br/>
                            - resources\js\components\dictonary\product\Grid.js - Таблица каталога, запрашивает данные используя ajax запросы с контроллера.<br/>
                            - resources\js\components\dictonary\product\Row.js - Дочерняя от Grid, отвечает за отрисовку полей и назначение событий кнопкам редактировать и удалить.<br/>
                            - resources\js\components\dictonary\product\Product.js - Форма для создания и редактирования товара в зависимости от пришедших параметров.<br/>
                        </ul>
                    </p>
                </div>
            </div>


        )
    }
}

export default About;
