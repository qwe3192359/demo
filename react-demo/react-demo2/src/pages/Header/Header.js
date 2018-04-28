import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
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
    );
  }
}
export default Header;
