// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import { server } from './api/config'
import Button from './components/Button'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const handleClickButton1 = () => {
    setCount1(count1 + 1)
  }
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  const sendData = {
    msgtype: 'link',
    link: {
      text:
        '这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林',
      title: '时代的火车向前开',
      picUrl: '',
      messageUrl:
        'https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI',
    },
  }
  useEffect(() => {
    server.PostDingRobotMsg({ ...sendData }).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/user'>User</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">这里是About</Route>
          <Route path="/user">这里是User</Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div> */}

      <div>
        <Button
          onClickButton={handleClickButton2}
          type="dashed"
          size="small"
          icon="&#xe627;"
        >
          Button1
        </Button>
      </div>
      <div>
        <Button onClickButton={() => setCount3(count3 + 1)}>Button12</Button>
      </div>
      <div>
        <Button
          onClickButton={handleClickButton1}
          type="danger"
          icon="&#xe666;"
          size="large"
        >
          Button3
        </Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton1} type="primary">
          Button4
        </Button>
      </div>
    </Router>
  )
}

export default App
