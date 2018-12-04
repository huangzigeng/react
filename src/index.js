/**
 * Created by Administrator on 2018/12/4.
 */
import React from 'react'
import  ReactDOM from 'react-dom'
import './index.scss'
import { DatePicker } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import homeRoute from './routers/index'
import { renderRoutes } from 'react-router-config'
class Index extends React.Component {

  render() {
    return (
    <Router>
      <div>
        {renderRoutes(homeRoute)}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    </Router>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))