/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import Refund from '../../../components/AboutMaizuo/Refund'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Refund />
        <Footer />
      </div>
    )
  }
}

export default App