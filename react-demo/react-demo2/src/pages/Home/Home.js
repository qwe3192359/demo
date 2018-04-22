/**
 * Created by yy on 2018/4/20.
 */
import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <div>
                        菜单按钮
                    </div>
                    <div>
                        5月
                    </div>
                    <div>
                        今天
                    </div>
                </div>
                <div className="date">
                    <table>
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
                    </table>
                </div>
            </div>
        );
    }
}
export default Home;