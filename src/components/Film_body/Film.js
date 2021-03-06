import React, {Component} from 'react'
import '../../assets/styles/Film.styl'
// import FilmHotActive from './FilmHotActive'
import RightActive from './RightActive'
class Film extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      show: 'hot',
      pagenum: 1,
      page: 1,
      sortType: 1,
      type: 1,
      total: ''
    }
  }
  // componentDidMount () {
  //   fetch('api/film?__t=1503653957136&page=1&count=5&sortType=1&type=1', {
  //     method: 'GET'
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //     //  console.log(response.data)
  //       this.setState({
  //         data: response.data.films
  //       })
  //     })
  // }
  getUrl = (myUrl) => {
    fetch(myUrl, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response.data)
        this.setState({
          data: response.data.films
        })
      })
  }
  getUrl2 = (myUrl) => {
    fetch(myUrl, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
       // console.log(response.data.page.total)
        this.setState({
          total: response.data.page.total
        })
      })
  }
  componentDidMount() {
   // this.hotClick()
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=1'
    this.getUrl(myUrl)
    this.getUrl2(myUrl)
    var abc = document.getElementById('abc')
    abc.className = 'spanred'
    // this.setState({
    //   total: this.state.data['page']['total']
    // }, () => {
    //   console.log(this.state.total)
    // })
    console.log(this.state.total)
  }
  hotClick = (e) => {
    this.setState({
      show: 'hot',
      type: 1,
      pagenum: 1
    }, () => {
      document.getElementById('pageLiA').innerHTML = '1'
      document.getElementById('pageLiB').innerHTML = '2'
      document.getElementById('pageLiC').innerHTML = '3'
      document.getElementById('pageLiD').innerHTML = '4'
      document.getElementById('pageLiE').innerHTML = '5'
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    })
    var h3Arr = document.querySelectorAll('.film_header h3 span')
    h3Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'spanred'
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=1'
    this.getUrl(myUrl)
  }
  willClick = (e) => {
    this.setState({
      show: 'will',
      type: 2,
      pagenum: 1
    }, () => {
      document.getElementById('pageLiA').innerHTML = '1'
      document.getElementById('pageLiB').innerHTML = '2'
      document.getElementById('pageLiC').innerHTML = '3'
      document.getElementById('pageLiD').innerHTML = '4'
      document.getElementById('pageLiE').innerHTML = '5'
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    })
    var h3Arr = document.querySelectorAll('.film_header h3 span')
    h3Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'spanred'
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=2'
    this.getUrl(myUrl)
    this.getUrl2(myUrl)
  }
  pageBtn = (e) => {
    this.setState({
      pagenum: Number(e.target.innerHTML)
    }, () => {
      if (this.state.pagenum === Math.floor(this.state.total / 6) + 1) {
        let pageLiA = Math.floor(this.state.total / 6) - 3
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Math.floor(this.state.total / 6) - 2
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Math.floor(this.state.total / 6) - 1
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Math.floor(this.state.total / 6)
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Math.floor(this.state.total / 6) + 1
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiE').className = 'lired'
        console.log('8')
      }
      if (this.state.pagenum === Math.floor(this.state.total / 6)) {
        let pageLiA = Math.floor(this.state.total / 6) - 3
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Math.floor(this.state.total / 6) - 2
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Math.floor(this.state.total / 6) - 1
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Math.floor(this.state.total / 6)
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Math.floor(this.state.total / 6) + 1
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiD').className = 'lired'
        console.log(Math.floor(this.state.total / 6))
      }
      if (this.state.pagenum >= 4 && this.state.pagenum <= Math.floor(this.state.total / 6) - 1) {
        let pageLiA = Number(this.state.pagenum) - 2
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Number(this.state.pagenum) - 1
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Number(this.state.pagenum)
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Number(this.state.pagenum) + 1
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Number(this.state.pagenum) + 2
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiC').className = 'lired'
        console.log('6')
      }
      if (this.state.pagenum === 3) {
        document.getElementById('pageLiA').innerHTML = '1'
        document.getElementById('pageLiB').innerHTML = '2'
        document.getElementById('pageLiC').innerHTML = '3'
        document.getElementById('pageLiD').innerHTML = '4'
        document.getElementById('pageLiE').innerHTML = '5'
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiC').className = 'lired'
      }
      if (this.state.pagenum === 2) {
        document.getElementById('pageLiA').innerHTML = '1'
        document.getElementById('pageLiB').innerHTML = '2'
        document.getElementById('pageLiC').innerHTML = '3'
        document.getElementById('pageLiD').innerHTML = '4'
        document.getElementById('pageLiE').innerHTML = '5'
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiB').className = 'lired'
      }
      if (this.state.pagenum === 1) {
        document.getElementById('pageLiA').innerHTML = '1'
        document.getElementById('pageLiB').innerHTML = '2'
        document.getElementById('pageLiC').innerHTML = '3'
        document.getElementById('pageLiD').innerHTML = '4'
        document.getElementById('pageLiE').innerHTML = '5'
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiA').className = 'lired'
      }
    })
    let myUrl = 'api/film?__t=1503715245520&page=' + e.target.innerHTML + '&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
    this.getUrl(myUrl)
    // let liArr = document.querySelectorAll('.film_page div ul li')
    // liArr.forEach(function (item, index) {
    //   item.className = ''
    // })
    // e.target.className = 'lired'
  }
  preClick = (e) => {
    this.setState({
      pagenum: this.state.pagenum - 1
    }, () => {
      let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
      this.getUrl(myUrl)
      if (this.state.pagenum <= 0) {
        this.setState({
          pagenum: 1
        })
      }
      // if (this.state.pagenum > 3 && this.state.pagenum <= 50) {
      //   var pageLiA = Number(this.state.pagenum) - 2
      //   document.getElementById('pageLiA').innerHTML = pageLiA
      //   var pageLiB = Number(this.state.pagenum) - 1
      //   document.getElementById('pageLiB').innerHTML = pageLiB
      //   var pageLiC = Number(this.state.pagenum)
      //   document.getElementById('pageLiC').innerHTML = pageLiC
      //   var pageLiD = Number(this.state.pagenum) + 1
      //   document.getElementById('pageLiD').innerHTML = pageLiD
      //   var pageLiE = Number(this.state.pagenum) + 2
      //   document.getElementById('pageLiE').innerHTML = pageLiE
      // }
      if (this.state.pagenum >= 3 && this.state.pagenum <= Math.floor(this.state.total / 6) - 2) {
        let pageLiA = Number(this.state.pagenum) - 2
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Number(this.state.pagenum) - 1
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Number(this.state.pagenum)
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Number(this.state.pagenum) + 1
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Number(this.state.pagenum) + 2
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiC').className = 'lired'
      }
      if (this.state.pagenum >= Math.floor(this.state.total / 6) - 4 && this.state.pagenum < Math.floor(this.state.total / 6)) {
        let pageLiA = Number(this.state.pagenum) - 2
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Number(this.state.pagenum) - 1
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Number(this.state.pagenum)
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Number(this.state.pagenum) + 1
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Number(this.state.pagenum) + 2
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiC').className = 'lired'
      }
      if (this.state.pagenum === Math.floor(this.state.total / 6)) {
        let pageLiA = Number(this.state.pagenum) - 3
        document.getElementById('pageLiA').innerHTML = pageLiA
        let pageLiB = Number(this.state.pagenum) - 2
        document.getElementById('pageLiB').innerHTML = pageLiB
        let pageLiC = Number(this.state.pagenum) - 1
        document.getElementById('pageLiC').innerHTML = pageLiC
        let pageLiD = Number(this.state.pagenum)
        document.getElementById('pageLiD').innerHTML = pageLiD
        let pageLiE = Number(this.state.pagenum) + 1
        document.getElementById('pageLiE').innerHTML = pageLiE
        let liArr = document.querySelectorAll('.film_page div ul li')
        liArr.forEach(function (item, index) {
          item.className = ''
        })
        document.getElementById('pageLiD').className = 'lired'
      }
    })
    if (this.state.pagenum === 2) {
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    }
    if (this.state.pagenum === 3) {
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiB').className = 'lired'
    }
    console.log(this.state.pagenum)
  }
  nextClick = (e) => {
    if (this.state.pagenum >= 3 && this.state.pagenum <= Math.floor(this.state.total / 6) - 2) {
      let pageLiA = Number(this.state.pagenum) - 1
      document.getElementById('pageLiA').innerHTML = pageLiA
      let pageLiB = Number(this.state.pagenum)
      document.getElementById('pageLiB').innerHTML = pageLiB
      let pageLiC = Number(this.state.pagenum) + 1
      document.getElementById('pageLiC').innerHTML = pageLiC
      let pageLiD = Number(this.state.pagenum) + 2
      document.getElementById('pageLiD').innerHTML = pageLiD
      let pageLiE = Number(this.state.pagenum) + 3
      document.getElementById('pageLiE').innerHTML = pageLiE
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiC').className = 'lired'
    }
    if (this.state.pagenum >= Math.floor(this.state.total / 6) - 2 && this.state.pagenum < Math.floor(this.state.total / 6)) {
      let pageLiA = Number(this.state.pagenum) - 2
      document.getElementById('pageLiA').innerHTML = pageLiA
      let pageLiB = Number(this.state.pagenum) - 1
      document.getElementById('pageLiB').innerHTML = pageLiB
      let pageLiC = Number(this.state.pagenum)
      document.getElementById('pageLiC').innerHTML = pageLiC
      let pageLiD = Number(this.state.pagenum) + 1
      document.getElementById('pageLiD').innerHTML = pageLiD
      let pageLiE = Number(this.state.pagenum) + 2
      document.getElementById('pageLiE').innerHTML = pageLiE
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiD').className = 'lired'
    }
    if (this.state.pagenum === Math.floor(this.state.total / 6)) {
      let pageLiA = Number(this.state.pagenum) - 3
      document.getElementById('pageLiA').innerHTML = pageLiA
      let pageLiB = Number(this.state.pagenum) - 2
      document.getElementById('pageLiB').innerHTML = pageLiB
      let pageLiC = Number(this.state.pagenum) - 1
      document.getElementById('pageLiC').innerHTML = pageLiC
      let pageLiD = Number(this.state.pagenum)
      document.getElementById('pageLiD').innerHTML = pageLiD
      let pageLiE = Number(this.state.pagenum) + 1
      document.getElementById('pageLiE').innerHTML = pageLiE
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiE').className = 'lired'
    }
    // console.log(Math.floor(this.state.total / 6) - 2)
    if (this.state.pagenum === 1) {
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiB').className = 'lired'
    }
    if (this.state.pagenum === 2) {
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiC').className = 'lired'
    }
    // if (this.state.pagenum >= 3 && this.state.pagenum <= 50) {
    //   var pageLiA = Number(this.state.pagenum) - 1
    //   document.getElementById('pageLiA').innerHTML = pageLiA
    //   var pageLiB = Number(this.state.pagenum)
    //   document.getElementById('pageLiB').innerHTML = pageLiB
    //   var pageLiC = Number(this.state.pagenum) + 1
    //   document.getElementById('pageLiC').innerHTML = pageLiC
    //   var pageLiD = Number(this.state.pagenum) + 2
    //   document.getElementById('pageLiD').innerHTML = pageLiD
    //   var pageLiE = Number(this.state.pagenum) + 3
    //   document.getElementById('pageLiE').innerHTML = pageLiE
    //   let liArr = document.querySelectorAll('.film_page div ul li')
    //   liArr.forEach(function (item, index) {
    //     item.className = ''
    //   })
    //   document.getElementById('pageLiC').className = 'lired'
    // }
    let myUrl = 'api/film?__t=1503715245520&page=' + (this.state.pagenum + 1) + '&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
    fetch(myUrl, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.data.films.length !== 0) {
          this.setState({
            pagenum: this.state.pagenum + 1
          }, () => {
            let myUrl1 = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
            this.getUrl(myUrl1)
          })
        }
      })
    // if (this.state.show === 'hot') {
    //   let myUrl = 'api/film?__t=1503715245520&page=' + (this.state.pagenum + 1) + '&count=6&sortType=' + this.state.sortType + '&type=1'
    //   fetch(myUrl, {
    //     method: 'GET'
    //   })
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(response => {
    //         if (response.data.films.length !== 0) {
    //           this.setState({
    //             pagenum: this.state.pagenum + 1
    //           }, () => {
    //             let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=' + this.state.sortType + '&type=1'
    //             this.getUrl(myUrl)
    //           })
    //         }
    //       })
    // }
    // if (this.state.show === 'will') {
    //   let myUrl = 'api/film?__t=1503715245520&page=' + (this.state.pagenum + 1) + '&count=6&sortType=' + this.state.sortType + '&type=2'
    //   fetch(myUrl, {
    //     method: 'GET'
    //   })
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(response => {
    //         if (response.data.films.length !== 0) {
    //           this.setState({
    //             pagenum: this.state.pagenum + 1
    //           }, () => {
    //             let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=' + this.state.sortType + '&type=2'
    //             this.getUrl(myUrl)
    //           })
    //         }
    //       })
    // }
    console.log(this.state.pagenum)
  }
  FilmHot = (e) => {
    this.setState({
      sortType: 1,
      pagenum: 1
    }, () => {
      let myUrl1 = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
      this.getUrl(myUrl1)
      document.getElementById('pageLiA').innerHTML = '1'
      document.getElementById('pageLiB').innerHTML = '2'
      document.getElementById('pageLiC').innerHTML = '3'
      document.getElementById('pageLiD').innerHTML = '4'
      document.getElementById('pageLiE').innerHTML = '5'
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    })
    var liArr = document.querySelectorAll('.film_order ul li')
    liArr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'orderLiRed'
  }
  ReleaseDate = (e) => {
    this.setState({
      sortType: 2,
      pagenum: 1
    }, () => {
      let myUrl2 = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=' + this.state.type
      this.getUrl(myUrl2)
      document.getElementById('pageLiA').innerHTML = '1'
      document.getElementById('pageLiB').innerHTML = '2'
      document.getElementById('pageLiC').innerHTML = '3'
      document.getElementById('pageLiD').innerHTML = '4'
      document.getElementById('pageLiE').innerHTML = '5'
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    })
    var liArr = document.querySelectorAll('.film_order ul li')
    liArr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'orderLiRed'
  }
  FilmGrade = (e) => {
    this.setState({
      sortType: 3,
      pagenum: 1
    }, () => {
      let myUrl3 = 'api/film?__t=1503715245520&page=1&count=6&sortType=' + this.state.sortType + '&type=1'
      this.getUrl(myUrl3)
      document.getElementById('pageLiA').innerHTML = '1'
      document.getElementById('pageLiB').innerHTML = '2'
      document.getElementById('pageLiC').innerHTML = '3'
      document.getElementById('pageLiD').innerHTML = '4'
      document.getElementById('pageLiE').innerHTML = '5'
      let liArr = document.querySelectorAll('.film_page div ul li')
      liArr.forEach(function (item, index) {
        item.className = ''
      })
      document.getElementById('pageLiA').className = 'lired'
    })
    var liArr = document.querySelectorAll('.film_order ul li')
    liArr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'orderLiRed'
  }
  render () {
    const dataArr = this.state.data.map(function (item, index) {
      return (
        <li key={index.toString()} className='film_li'>
          <a href={'twopageFilm.html?id=' + item.id}>
            <div className='film_img'>
              <img src={item.poster.origin} />
            </div>
          </a>
          <div className='film_text'>
            <h4>{item.name}</h4>
            <p>{item.grade}</p>
            <span>[{item.intro}]</span>
            <ul>
              <li>
                <label>导演: </label>
                <span>{item.director}</span>
              </li>
              <li>
                <label>主演: </label>
                <span> {item.actors.map(function (item1, index) {
                  return <span key={index.toString()}>{item1['name']} / </span>
                })}</span>
              </li>
              <li>
                <label>类型: </label>
                <span>{item.category}</span>
              </li>
              <li>
                <label>上映: </label>
                <span>{new Date(parseInt(item.premiereAt)).toLocaleString().slice(0, 10)}</span>
              </li>
            </ul>
            <div className='film_tags'>
              <span>{item.item.name}</span>
              <span>{item.nation}/{item.language}</span>
              <span>{item.runtime}分钟</span>
            </div>
          </div>
          <a href={'twopageFilm.html?id=' + item.id}>
            <button className='film_btn'>
              影片详情
            </button>
          </a>
        </li>
      //  <p key={index.toString()}>{item['name']}</p>
      )
    })
   // console.log(this.state.data.films)
    return (
      <div className='film'>
        <div className='film_left'>
          <div className='film_header'>
            <h3>
              <span id='abc' onClick={this.hotClick}>正在热映</span>
              /
              <span onClick={this.willClick}>即将上映</span>
            </h3>
            <div className='film_order'>
              <ul>
                <li onClick={this.FilmHot}>热映场次</li>
                <li onClick={this.ReleaseDate}>上映日期</li>
                <li onClick={this.FilmGrade}>评分↓</li>
              </ul>
            </div>
          </div>
          <div className='film_body'>
            <ul>
              {dataArr}
            </ul>
          </div>
          <div className='film_page'>
            <i className='film_page_pre' onClick={this.preClick}>上一页</i>
            <div>
              <ul>
                <li id='pageLiA' onClick={this.pageBtn}>1</li>
                <li id='pageLiB' onClick={this.pageBtn}>2</li>
                <li id='pageLiC' onClick={this.pageBtn}>3</li>
                <li id='pageLiD' onClick={this.pageBtn}>4</li>
                <li id='pageLiE' onClick={this.pageBtn}>5</li>
              </ul>
            </div>
            <i className='film_page_next' onClick={this.nextClick}>下一页</i>
          </div>
        </div>
        <div className='film_right'>
          <RightActive />
        </div>
      </div>
    )
  }
}

export default Film
