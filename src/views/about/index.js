import React from 'react'
import AboutChild from '../aboutChild/index'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class About extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>about</h2>
          <Link to='/about/child' replace={true}>aboutChild</Link>
        </div>
      </Router>
    )
  }
}
export default About
