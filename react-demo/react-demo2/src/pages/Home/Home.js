/**
 * Created by yy on 2018/4/20.
 */
import React, {Component} from 'react';
import './Home.css';
import Header from '../Header/Header';
import date from '../../utils/date';

class Home extends Component {


    render() {

        console.log(date);
        let i = [];
        i.length = 8
        return (
            <div>
                <Header></Header>
                <table className="date">
                    <thead>
                        <tr>
                            <td>日</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        i.map(function (key,value) {
                            return <td>{value}</td>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Home;