import React, {Component} from 'react'
import '../../assets/styles/App.styl'

import Footer from '../../components/Footer/Footer'
import Login from '../../components/login/login'
import Nav from '../../components/web-nav/nav'
class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   }
  // }
  //
  // componentDidMount () {
  //   fetch('api/billboard/login', {
  //     method: 'GET'
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({
  //         data: response.data.billboards
  //       })
  //     })
  // }
  render() {
    // const dataArr = this.state.data.map(function (item, index) {
    //   return (
    //     <p key={index.toString()}>{item['name']}</p>
    //   )
    // })
    return (
      <div>
        <Nav />
        <Login />
        <Footer />
      </div>
    )
  }
}
export default App