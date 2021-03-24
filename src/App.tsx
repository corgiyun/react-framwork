// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect, useMemo, useCallback } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Button from "./components/Button"

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const handleClickButton1 = () => {
    setCount1(count1 + 1)
  }
  const handleClickButton2 = useCallback(()=> {
    setCount2(count2 + 1)
  }, [count2])
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
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button onClickButton={()=> setCount3(count3 + 1)}>Button3</Button>
      </div>
    </Router>
  );
}

export default App;
